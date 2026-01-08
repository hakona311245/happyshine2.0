
export interface Course {
  id: string;
  title: string;
  level: string;
  description: string;
  icon: string;
  duration: string;
  price: string;
  features: string[];
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
