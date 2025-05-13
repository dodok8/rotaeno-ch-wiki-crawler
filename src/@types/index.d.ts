export interface Chart {
  difficultyLevel: string;
  difficultyDecimal: number;
  chartDesigner: string;
  jacketDesigner: string;
}

export interface Song {
  id: string;
  imageUrl: string;
  artist: string;
  releaseVersion: string;
  chapter: string;
  title_localized: {
    default: string;
    [locale: string]: string;
  };
  source_localized?: {
    default: string;
  };
  charts: Chart[];
}