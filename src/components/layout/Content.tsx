import type { LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";
import { NodeWrapper } from "../../shared/NodeWrapper";

export interface ContentProps {
  text: string;
  height: number;
}
export const Content = ({
  node,
  selectedId,
  setSelectedId,
}: LayoutProps<"Content">) => {
  return (
    <NodeWrapper height={'100%'} nodeId={node.id} selectedId={selectedId} setSelectedId={setSelectedId}>
      <div className="w-full flex flex-col" style={{ height: `${node.props.height}px`}}>
        <p className="text-black">{node.props.text}</p>
        {/* render child node-ove */}
        {node.children?.map((child) =>
          renderNode(child, selectedId, setSelectedId)
        )}
      </div>
    </NodeWrapper>
  );
};
