import { ButtonHTMLAttributes, PropsWithChildren, useState } from 'react'
import { STORY_TREE_DE, StoryNode } from './story-tree-de'

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-emerald-800 p-2 rounded-md ${
        props.disabled && 'opacity-40'
      }`}
    >
      {children}
    </button>
  )
}

function StoryAudio({ storyNode }: { storyNode: StoryNode }) {
  return (
    <audio controls>
      <source src={`./audio/${storyNode.audioFile}.mp3`} type="audio/mpeg" />
    </audio>
  )
}

function App() {
  const [storyIndex, setStoryIndex] = useState(0)
  const storyNode = STORY_TREE_DE[storyIndex]
  const lastStoryNodeIndex = STORY_TREE_DE.length - 1

  function previousStory() {
    setStoryIndex(storyIndex - 1)
  }

  function nextStory() {
    setStoryIndex(storyIndex + 1)
  }

  return (
    <div className="p-6 max-w-screen-sm">
      <h1 className="text-md mb-4 text-emerald-400 font-semibold">
        Arkham Narrator
      </h1>
      <div className="grid gap-4">
        <div className="p-4 bg-stone-900 rounded-lg">
          <h2 className="mb-2 text-2xl text-stone-200">{storyNode.title}</h2>
          <StoryAudio storyNode={storyNode} key={storyNode.title} />
        </div>
        {storyNode.choices != null && (
          <div className="grid gap-2">
            <h3 className="font-semibold text-stone-400">Auflösungen</h3>
            {storyNode.choices.map((childNode) => (
              <div
                key={childNode.title}
                className="p-4 bg-stone-900 rounded-lg"
              >
                <h4 className="mb-2 text-md text-stone-100">
                  {childNode.title}
                </h4>
                <StoryAudio storyNode={childNode} />
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={previousStory} disabled={storyIndex === 0}>
            Zurück
          </Button>
          <Button
            onClick={nextStory}
            disabled={storyIndex === lastStoryNodeIndex}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
