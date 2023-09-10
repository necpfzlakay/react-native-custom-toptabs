import React from "react";
import { View } from "react-native";
import { getStyles } from "../CustomTopSection/styles";
const CustomTopSectionItem = ({ children, style, }) => {
    const styles = getStyles({});
    return (React.createElement(View, { style: [styles.scrollViewItemWrapper, style] }, children));
};
export default CustomTopSectionItem;
