import { ReactNode } from "react";

type MainHeaderProps = {
  children: ReactNode;
};

export const MainHeader = ({ children }: MainHeaderProps) => (
  <h1 className="text-4xl uppercase font-bold mb-2">{children}</h1>
);

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: SubHeaderProps) => (
  <h2 className="text-3xl font-bold mb-2">{children}</h2>
);

type SubHeaderProps = {
  children: ReactNode;
};

export const SubHeader = ({ children }: SubHeaderProps) => (
  <h3 className="text-2xl font-semibold mb-2">{children}</h3>
);

type TextBlockProps = {
  children: ReactNode;
};

export const TextBlock = ({ children }: TextBlockProps) => (
  <p className="mb-3">{children}</p>
);
