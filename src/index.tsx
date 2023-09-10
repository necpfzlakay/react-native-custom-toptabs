
// import {
//   requireNativeComponent,
//   UIManager,
//   Platform,
//   type ViewStyle,
// } from 'react-native'; 

export {default as CustomTopTab} from './components/CustomTopSection/CustomTopSection';
export {default as CustomTopSectionItem} from './components/TopSectionContainer/TopSectionContainer';
// export { CustomTopTab, CustomTopSectionItem }

// type CustomToptabsProps = {
//   routes: Array<String>,
//   color: String,
//   style: ViewStyle,
// };
 

// export const CustomToptabs = ({ routes }) =>
//   UIManager.getViewManagerConfig('CustomTopTab') != null
//     ? requireNativeComponent<CustomToptabsProps>(CustomTopTab)
//     : () => {
//       throw new Error(LINKING_ERROR);
//     };

// const CustomToptabs = () => {

//   return (
//     <>
//       <View>
//         <CustomTopTab pages={['arr1', 'arr2']} >
//           <CustomTopSectionItem style={{}}>
//             <Text>CustomTopSectionItem</Text>
//           </CustomTopSectionItem>
//           <CustomTopSectionItem >
//             <Text>CustomTopSectionItem</Text>
//           </CustomTopSectionItem>
//         </CustomTopTab>
//       </View>
//     </>
//   )
// }


// const LINKING_ERROR = `The package 'react-native-custom-toptabs' doesn't seem to be linked. Please make sure: \n\n` +
//   `1. You're running a compatible version of React Native.\n\n` +
//   `2. You've installed 'react-native-custom-toptabs' correctly. Run ${Platform.select({ ios: `'pod install'`, default: `'yarn add react-native-custom-toptabs'` })} and then \`cd ios && ${Platform.select({ ios: `'pod install'`, default: `'npx pod-install'` })}\`.\n\n` +
//   `3. You've rebuilt the app with \`yarn run ios\`.\n\n` +
//   `4. You're referencing the correct build variant of the module. \n\n`;


