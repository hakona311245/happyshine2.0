
export interface LearningPoint {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Course {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  accent: string;
  tag: string;
  results?: string[];
  learningPoints?: LearningPoint[];
  faqs?: FAQ[];
}

export interface Achievement {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}
