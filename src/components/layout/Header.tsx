import type { Margin } from "../../types/margins";
import type { LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";

export interface HeaderProps {
  height: number;
  text: string;
  padding: number;
  margin: Margin;
  children?: React.ReactNode;
}
export const Header = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"Header">) => {
  const { text, height, padding, margin } = node.props;
  return (
    <div className="w-full flex flex-row" style={{ height: `${height}px` }}>
      <h3
        style={{
          color: "green",
          padding: `${padding}px`,
          marginTop: `${margin.top}px`,
        }}
      >
        {text}
      </h3>
      {/* render child node-ove */}
      {node.children?.map((child) =>
        renderNode(child, onAdd, selectedId, setSelectedId)
      )}
    </div>
  );
};
