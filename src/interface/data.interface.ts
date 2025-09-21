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
  }[];
}

export interface CareerPath {
  [key: string]: Question;
}
