export interface ContentProps {
  text: string;
  children?: React.ReactNode;
}
export const Content = ({ text }: ContentProps) => {
  return <p>{text}</p>;
};
