import React from "react";
import { type ContentProps } from "./Content";
import { type LayoutProps } from "../../types/nodes";
import { renderNode } from "../../shared/renderNode";
import { type DividerProps } from "./Divider";
import { type HeaderProps } from "./Header";

export interface HorizontalLayoutProps {
  height: number;
  headerHeight: number;
  dividerHeight: number;
  children?: React.ReactNode;
}
export const HorizontalLayout = ({
  node,
  onAdd,
  selectedId,
  setSelectedId,
}: LayoutProps<"HorizontalLayout">) => {
  const contentHeight =
    node.props.height - node.props.headerHeight - node.props.dividerHeight - 6;

  return (
    <>
      <div
        className="w-full flex flex-col"
        style={{ height: node.props.height }}
      >
        {node.children?.map((child) => {
          let adjustedChild = child;

          if (child.type === "Header") {
            adjustedChild = {
              ...child,
              props: {
                ...(child.props as HeaderProps), // ili as HeaderProps
                height: node.props.headerHeight,
              },
            };
          } else if (child.type === "Divider") {
            adjustedChild = {
              ...child,
              props: {
                ...(child.props as DividerProps), // ili as DividerProps
                height: node.props.dividerHeight,
              },
            };
          } else if (child.type === "Content") {
            adjustedChild = {
              ...child,
              props: {
                ...(child.props as ContentProps), // ili as ContentProps
                height: contentHeight,
              },
            };
          }

          return renderNode(adjustedChild, onAdd, selectedId, setSelectedId);
        })}
      </div>
    </>
  );
};
