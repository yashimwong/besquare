import { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <section className="mt-4 mb-8">{children}</section>;
};
