import type { ReactNode } from "react";

export const NodeWrapper = ({
  height,
  nodeId,
  selectedId,
  setSelectedId,
  children,
}: {
  height?: string;
  nodeId: string;
  selectedId: string | null;
  setSelectedId: (nodeId: string) => void;
  children?: ReactNode;
}) => {
  const isSelected = nodeId === selectedId;

  return (
    <>
      <div
        className="w-full flex"
        key={nodeId}
        style={{
          border: isSelected ? "1px solid red" : "1px solid transparent",
          height: height ? `${height}` : `auto`,
          backgroundColor: isSelected ? "rgba(0,0,0,0.4)" : "transparent",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(nodeId);
        }}
      >
        {children}
      </div>
    </>
  );
};
