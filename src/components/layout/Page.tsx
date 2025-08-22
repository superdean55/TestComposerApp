import type { LayoutNode, LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";

export interface PageProps {
  text: string;
  children?: React.ReactNode;
}

export const Page = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"Page"> & { children?: React.ReactNode }) => {
  const handleAddHeaders = () => {
    const newHeaders: LayoutNode[] = [
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
        type: "Content",
        props: {
          text: "Some content",
        },
        children: [],
      },
    ];
    onAdd(node.id, newHeaders);
  };

  const hasChildren = node.children && node.children.length > 0;
  return (
    <div className="w-full flex flex-col border border-gray-300">
      <div className="w-full flex flex-row justify-center">
        <h2>{node.props.text}</h2>
      </div>
      {!hasChildren && (
        <button
          className="my-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddHeaders}
        >
          Add layout
        </button>
      )}
      {node.children?.map((child) =>
        renderNode(child, onAdd, selectedId, setSelectedId)
      )}
    </div>
  );
};
