interface StoryMultimedia {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
};

type MultimediasType = Array<StoryMultimedia> | [];

export interface StoryType{
  section: string;
  title: string;
  multimedia: MultimediasType;
};
