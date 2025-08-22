export interface PageProps {
  text: string;
  children?: React.ReactNode;
}

export const Page = ({ text, children }: PageProps) => {
  return (
    <div className="w-full flex flex-col border border-gray-300">
      <div className="w-full flex flex-row justify-center">
          <h2>{text}</h2>
      </div>
      {children}
    </div>
  );
};
