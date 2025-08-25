
import { type LayoutNode, type LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";
import { type DividerProps } from "./Divider";
import { type HeaderProps } from "./Header";
import { NodeWrapper } from "../../shared/NodeWrapper";

export interface HorizontalLayoutProps {
  headerHeight: number;
  dividerHeight: number;
}
export const HorizontalLayout = ({
  node,
  selectedId,
  setSelectedId,
}: LayoutProps<"HorizontalLayout">) => {
  
  
  return (
    <>
      <NodeWrapper height={'100%'} nodeId={node.id} selectedId={selectedId} setSelectedId={setSelectedId}>
        <div
          className="w-full flex flex-col h-full"
          
        >
          {node.children?.map((child) => {
            let adjustedChild = child;
            if (child.type === "Header") {
              adjustedChild = {
                ...child,
                props: {
                  ...(child.props as HeaderProps), 
                  height: node.props.headerHeight,
                },
              };
            } else if (child.type === "Divider") {
              adjustedChild = {
                ...child,
                props: {
                  ...(child.props as DividerProps),
                  height: node.props.dividerHeight,
                },
              };
            } 
            return renderNode(adjustedChild, selectedId, setSelectedId);
          })}
        </div>
      </NodeWrapper>
    </>
  );
};

export const HorizontalLayoutPreview = ({
  onClick,
}: {
  onClick: (node: LayoutNode[]) => void;
}) => {
  const handleClick = () => {
    const newHeaders: LayoutNode[] = [
      {
        id: crypto.randomUUID(),
        type: "HorizontalLayout",
        props: {
          headerHeight: 200,
          dividerHeight: 16,
        },
        children: [
          {
            id: crypto.randomUUID(),
            type: "Header",
            props: {
              text: "Header",
              height: 200,
              padding: 10,
              margin: { top: 5, right: 5, bottom: 5, left: 5 },
            },
            children: [],
          },
          {
            id: crypto.randomUUID(),
            type: "Divider",
            props: {
              height: 16,
            },
            children: [],
          },
          {
            id: crypto.randomUUID(),
            type: "Content",
            props: {
              height: 50,
              text: "Some content",
            },
            children: [],
          },
        ],
      },
    ];
    onClick(newHeaders);
  };
  return (
    <>
      <div
        className="w-[100px] h-[170px] grid grid-cols-1 grid-rows-[1fr_10px_2fr] border-[1px] border-gray-400 text-black cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex flex-row justify-center items-center border-[1px] border-gray-400 m-0.5">
          <p className="text-sm">Header</p>
        </div>
        <div className="border-[1px] border-gray-400 m-0.5"></div>
        <div className="flex flex-row justify-center items-center border-[1px] border-gray-400 m-0.5">
          <p className="text-sm">Content</p>
        </div>
      </div>
    </>
  );
};
