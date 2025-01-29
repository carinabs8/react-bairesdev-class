type StoryMultimedia = {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
}

export type StoryType = {
  section: string;
  title: string;
  multimedia: Array<StoryMultimedia> | []
};
