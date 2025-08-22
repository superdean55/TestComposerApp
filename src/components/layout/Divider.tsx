interface DividerProps {
  height: number;
}
export const Divider = ({ height }: DividerProps) => {
  return (
    <>
      <div className="w-full flex flex-row" style={{ height: `${height}px` }}>
        <div className="w-full h-0.5 bg-black"></div>
      </div>
    </>
  );
};
