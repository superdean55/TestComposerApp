import { NodeWrapper } from "../../shared/NodeWrapper";
import type { LayoutNode, LayoutProps } from "../../types/nodes";
export interface DescriptionProps {
  text: string;
}
export const Description = ({
  node,
  selectedId,
  setSelectedId,
}: LayoutProps<"Description">) => {
  return (
    <>
      <NodeWrapper
        nodeId={node.id}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      >
        <div className="w-full text-black">
          <p>{node.props.text}</p>
        </div>
      </NodeWrapper>
    </>
  );
};

export const DescriptionPreview = ({
  onClick,
}: {
  onClick: (node: LayoutNode[]) => void;
}) => {
  const handleClick = () => {
    const newHeaders: LayoutNode[] = [
      {
        id: crypto.randomUUID(),
        type: "Description",
        props: {
          text: "some text",
        },
        children: [],
      },
    ];
    onClick(newHeaders);
  };
  return (
    <>
      <div
        className="w-[100px] h-[50px] p-2 grid grid-cols-[10px_1fr] grid-rows-[auto] border-[1px] border-gray-400 text-black cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-row items-center col-start-2 col-end-3">
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>
        <div className="flex flex-row items-center col-span-2">
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>
        <div className="flex flex-row items-center col-span-2">
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>
        <div className="flex flex-row items-center col-span-2">
          <div className="w-full h-[2px] bg-gray-400"></div>
        </div>
      </div>
    </>
  );
};
