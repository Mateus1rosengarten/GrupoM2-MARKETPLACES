import { MotionProps } from "framer-motion";
import { ReactNode } from "react";

// NAVIGATION //

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// CARDS

export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
  handleOnClick: () => void;
}

export type PlanCardProps = {
  title: string;
  oldPrice: string;
  newPrice: string;
  description: string;
  featuresIncluded: FeaturesIncluded;
  handleOnClick: () => void;
};

export type FeaturesIncluded = { title: string; description: string }[];

// ABOUT //
export type ImagePartnersProps = {
  className?: string;
};

// FORM //
export type ContactFormHeaderProps = {
  className?: string;
};

export type InputFieldProps = {
  icon: React.ReactNode;
  placeholder: string;
  register: any;
  dark?: boolean;
};

export type ContactFormProps = {
  onSucess: () => void;
};

export type FormValues = {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

export type ContactItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type ModalTextProps = {
  isOpen: boolean;
  onClose: () => void;
};

// COMPONENTS //
export type LogoProps = {
  customClass?: string;
};

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  type?: "button" | "submit" | "reset";
  customClass?: string;
  onClick?: () => void;
}

export interface FloatingBadgeProps {
  icon: React.ElementType;
  text: string;
  className?: string;
}

export type MotionDivProps = MotionProps & {
  children?: ReactNode;
  className?: string;
};

// export interface PlanCardProps extends PlanCardProps {}
