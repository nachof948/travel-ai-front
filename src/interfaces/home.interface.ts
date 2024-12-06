import { ReactNode } from 'react';

export interface IBenefitCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface IFeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ITestimonialCard {
  text: string;
  author: string;
  location: string;
  image: string;
} 