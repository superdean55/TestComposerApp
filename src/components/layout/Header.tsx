import type { Margin } from "../../types/margins";
import type { LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";
import { NodeWrapper } from "../../shared/NodeWrapper";

export interface HeaderProps {
  height: number;
  text: string;
  padding: number;
  margin: Margin;
}
export const Header = ({
  node,
  selectedId,
  setSelectedId,
}: LayoutProps<"Header">) => {
  const { text, height, padding, margin } = node.props;
  return (
    <NodeWrapper nodeId={node.id} selectedId={selectedId} setSelectedId={setSelectedId}> 
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
          renderNode(child, selectedId, setSelectedId)
        )}
      </div>
    </NodeWrapper>
  );
};
