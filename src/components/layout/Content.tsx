import type { LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";

export interface ContentProps {
  text: string;
  children?: React.ReactNode;
}
export const Content = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"Content">) => {
  return (
    <div className="w-full flex flex-col">
      <p>{node.props.text}</p>
      {/* render child node-ove */}
      {node.children?.map((child) =>
        renderNode(child, onAdd, selectedId, setSelectedId)
      )}
    </div>
  );
};
