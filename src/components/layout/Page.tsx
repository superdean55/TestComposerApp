import { renderNode } from "../../shared/renderNode";
import { NodeWrapper } from "../../shared/NodeWrapper";
import type { LayoutProps } from "../../types/nodes";

export interface PageProps {
  padding: number;
}

export const Page = ({
  node,
  selectedId,
  setSelectedId,
}: LayoutProps<"Page"> & { children?: React.ReactNode }) => {
  return (
    <NodeWrapper
      nodeId={node.id}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
    >
      <div
        className="w-[794px] flex flex-col items-center border border-gray-300 h-[1123px] bg-white"
        style={{
          padding: node.props.padding,
        }}
      >
        {node.children?.map((child) =>
          renderNode(child, selectedId, setSelectedId)
        )}
      </div>
    </NodeWrapper>
  );
};
