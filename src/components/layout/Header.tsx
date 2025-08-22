import type { Margin } from "../../types/margins";

export interface HeaderProps {
  text: string;
  padding: number;
  margin: Margin;
  children?: React.ReactNode;
}
export const Header = ({ text, padding, margin }: HeaderProps) => {
  return (
    <h3
      style={{
        color: "green",
        padding: `${padding}px`,
        marginTop: `${margin.top}px`,
      }}
    >
      {text}
    </h3>
  );
};
