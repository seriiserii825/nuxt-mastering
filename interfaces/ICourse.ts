interface Lesson {
  title: string;
  slug: string;
  number: number;
  downloadUrl: string;
  sourceUrl?: string;
  videoId: number;
  text: string;
}

interface Chapter {
  title: string;
  slug: string;
  number: number;
  lessons: Lesson[];
}

export interface ICourse {
  title: string;
  chapters: Chapter[];
}
