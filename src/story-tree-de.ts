export type StoryNode = {
  title: string
  audioFile: string
  choices?: StoryNode[]
}

export const STORY_TREE_DE: StoryNode[] = [
  {
    title: 'Die Nacht des Zeloten',
    audioFile: 'ndz-intro',
  },
  {
    title: 'Teil 1: Die Zusammenkunft',
    audioFile: 'ndz-teil1-intro',
    choices: [
      {
        title:
          'Falls keine Auflösung erreicht wurde (alle Ermittler haben aufgegeben oder wurden besiegt)',
        audioFile: 'ndz-teil1-a0',
      },
      {
        title: 'Auflösung 1',
        audioFile: 'ndz-teil1-a1',
      },
      {
        title: 'Auflösung 2',
        audioFile: 'ndz-teil1-a2',
      },
    ],
  },
]
