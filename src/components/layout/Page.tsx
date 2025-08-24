import type { LayoutNode, LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";
import PreviewDialog from "../../shared/PreviewDialog";
import { useState } from "react";
import { HorizontalLayoutPreview } from "./HorizontalLayout";
import { NodeWrapper } from "../../shared/NodeWrapper";

export interface PageProps {
  text: string;
}

export const Page = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"Page"> & { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleAddHeaders = (newNodes: LayoutNode[]) => {
    setOpen(false);
    onAdd(node.id, newNodes);
  };

  const hasChildren = node.children && node.children.length > 0;
  
  return (
    <NodeWrapper nodeId={node.id} selectedId={selectedId} setSelectedId={setSelectedId}>
      <div className="w-[794px] flex flex-col border border-gray-300 h-[1123px] bg-white">
        <div className="w-full flex flex-row justify-center">
          <h2>{node.props.text}</h2>
        </div>
        {!hasChildren && (
          <button
            className="my-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setOpen(true)}
          >
            Add layout
          </button>
        )}
        <PreviewDialog
          title="Choose layout configuration"
          open={open}
          onClose={() => setOpen(false)}
        >
          <HorizontalLayoutPreview onClick={handleAddHeaders} />
        </PreviewDialog>
        {node.children?.map((child) =>
          renderNode(child, onAdd, selectedId, setSelectedId)
        )}
      </div>
    </NodeWrapper>
  );
};
