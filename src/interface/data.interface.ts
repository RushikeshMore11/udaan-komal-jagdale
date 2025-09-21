export interface Reference {
  name: string;
  title?: string;
  youtube?: string;
  linkedin?: string;
  description?: string;
  organization?: string;
}

interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    nextQuestion?: string;
    career?: string;
    degree?: string;
    contact?: {
      name: string;
      title: string;
      email: string;
      phone: string;
      organization: string;
    };
    references?: Reference[];
  }[];
}

export interface CareerPath {
  [key: string]: Question;
}
