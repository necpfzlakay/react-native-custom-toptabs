import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';


type CustomToptabsProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'CustomToptabsView';

export const CustomToptabs = () => {

  return (
    <>
      <View>
        <Text>CustomToptabsView</Text>
      </View>
    </>
  )
}

// UIManager.getViewManagerConfig(ComponentName) != null
//   ? requireNativeComponent<CustomToptabsProps>(ComponentName)
//   : () => {
//       throw new Error(LINKING_ERROR);
//     };
