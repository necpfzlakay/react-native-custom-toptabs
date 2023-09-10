import React from "react";
import type { ComponentState } from "react";
import type { ViewStyle } from 'react-native';
interface CustomTopTabProps {
    children: React.ReactNode;
    pages?: Array<string>;
    containerStyle?: ViewStyle;
    scrollTo?: ComponentState;
    sectionSwitchStyle?: ViewStyle;
    sectionSwitchTextStyle?: ViewStyle;
    backgroundColor?: string | Array<string>;
    tintColor?: string;
    tintHeight?: number;
    tintRadius?: number;
    switchHeight?: number;
}
declare const CustomTopTab: ({ children, pages, containerStyle, scrollTo, sectionSwitchStyle, sectionSwitchTextStyle, backgroundColor, tintColor, tintHeight, tintRadius, switchHeight }: CustomTopTabProps) => React.JSX.Element;
export default CustomTopTab;
