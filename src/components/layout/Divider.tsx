import { NodeWrapper } from "../../shared/NodeWrapper";
import { renderNode } from "../../shared/renderNode";
import type { LayoutProps } from "../../types/nodes";

export interface DividerProps {
  height: number;
}
export const Divider = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"Divider">) => {
  return (
    <>
      <NodeWrapper nodeId={node.id} selectedId={selectedId} setSelectedId={setSelectedId}>
        <div
          className="w-full flex flex-row items-center"
          style={{ height: `${node.props.height}px` }}
        >
          <div className="w-full h-0.5 bg-black"></div>
          {node.children?.map((child) =>
            renderNode(child, onAdd, selectedId, setSelectedId)
          )}
        </div>
      </NodeWrapper>
    </>
  );
};
