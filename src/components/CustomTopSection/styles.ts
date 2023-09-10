

import { StyleSheet } from 'react-native';

import { font_size } from '../../constants/Fontsize';
import { width } from '../../constants/Dimensions';
console.log('width', width)
export const getStyles = ({
  length = 1,
  maxItemWidth = width / 4.2,
}) => StyleSheet.create({
  scrollView: {
    // flex: 1,
    width: width,
    // borderWidth: 1

  },
  scrollViewItemWrapper: {
    width: width,
    // borderWidth: 1,
  },
  switchContainer: {
    marginTop: 10,
  },
  switchItemWrapper: {
    // borderBottomWidth: 2,
    // flex: 1,
    width: length > 4 ? maxItemWidth : width / length,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 10,
  },
  switchWrapper: {
    // borderWidth: 1,
    // height: 50,
  },
  switchLabel: {
    color: 'black',
    // fontSize: 10,
    ...font_size.d,
    // ...fonts_family.medium,
    textAlign: 'center',
  },
  contentContainer: {
    // borderWidth: 1,
    flex: 1,
  },
  switchLine: {
    borderWidth: 1,
    width: length > 4 ? maxItemWidth : width / length,
    position: 'absolute',
    height: 1,
    bottom: 0,
    borderColor: 'black',

  }
})

