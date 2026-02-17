import { ReactNode } from "react";

// DATA TYPES
export type FeaturesIncluded = { title: string; description: string }[];

export type FaqItem = {
  question: string;
  answer: string;
};

export type PlanCardData = {
  title: string;
  oldPrice: string;
  newPrice: string;
  description: string;
  featuresIncluded: FeaturesIncluded;
  handleOnClick: () => void;
};

export type ContactFormHeaderProps = {
  className?: string;
};

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

// COMPONENTS PROPS
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  customClass?: string;
  onClick?: () => void;
}

export interface TechCarouselIcon {
  src: string;
  name: string;
}

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  handleOnClick: () => void;
}

export interface PlanCardProps extends PlanCardData {}

export interface FaqItemProps extends FaqItem {}
