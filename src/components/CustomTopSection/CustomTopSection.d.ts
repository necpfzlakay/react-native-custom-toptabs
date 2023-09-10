import React from "react";
interface CustomTopTabProps {
    children: React.ReactNode;
    pages?: Array<string>;
}
declare const CustomTopTab: ({ children, pages }: CustomTopTabProps) => React.JSX.Element;
export default CustomTopTab;
interface CustomTopSectionItemProps {
    children: React.ReactNode;
    style?: any;
}
export declare const CustomTopSectionItem: ({ children, style }: CustomTopSectionItemProps) => React.JSX.Element;
