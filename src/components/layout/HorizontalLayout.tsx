import React from "react";
import { Header } from "./Header";
import { Divider } from "@mui/material";
import { Content } from "./Content";

export interface HorizontalLayoutProps {
  height: number;
  headerHeight: number;
  dividerHeight: number;
  children?: React.ReactNode;
}
export const HorizontalLayout = ({
  height,
  headerHeight,
  dividerHeight,
  children,
}: HorizontalLayoutProps) => {
  const contentHeight = height - headerHeight - dividerHeight;

  const mappedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    // TypeScript ne zna propse djeteta, zato koristimo as React.ReactElement<any>
    const element = child as React.ReactElement<any>;

    // Dodaj height prema tipu komponente
    if (element.type === Header) {
      return React.cloneElement(element, { height: headerHeight });
    }
    if (element.type === Divider) {
      return React.cloneElement(element, { height: dividerHeight });
    }
    if (element.type === Content) {
      return React.cloneElement(element, { height: contentHeight });
    }

    return element;
  });

  return (
    <>
      <div className="w-full flex flex-col" style={{ height: height }}>
        {mappedChildren}
      </div>
    </>
  );
};
