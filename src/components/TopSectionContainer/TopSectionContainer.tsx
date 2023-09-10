import React from "react";
import { View } from "react-native";
import type { ViewStyle } from 'react-native';
import { getStyles } from "../CustomTopSection/styles";


interface CustomTopSectionItemProps {
  children: React.ReactNode,
  style?: ViewStyle
}

const CustomTopSectionItem = ({
  children,
  style,
}: CustomTopSectionItemProps) => {
  const styles = getStyles({})
  return (
    <View style={[styles.scrollViewItemWrapper, style]}>
      {children}
    </View>
  )
}
export default CustomTopSectionItem;