export interface NavItem {
  label: string;
  href: string;
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  image: string;
}

export interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Hospital {
  id: string;
  name: string;
  image: string;
}

export interface Event {
  id: string;
  type: string;
  title: string;
  location: string;
  specialty: string;
  thumbnail: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  instagram?: boolean;
}
