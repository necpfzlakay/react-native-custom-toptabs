import React, { useEffect } from "react";


import { Text, View, TouchableOpacity } from 'react-native';
// import {
//   requireNativeComponent,
//   UIManager,
//   Platform,
//   type ViewStyle,
// } from 'react-native';

// import { getStyles } from './styles';



import { Animated } from 'react-native';
import { ScrollView } from "react-native";
import { getStyles } from "./styles";
import { width } from '../../constants/Dimensions';


const horizontalLine = new Animated.Value(0)
interface CustomTopTabProps {
  children: React.ReactNode,
  pages?: Array<string>,
}
// interface UserData {
//   data: Array<string>,
//   length: number,
//   maxItemWidth: number,
//   indexOf: (index: number) => string,
//   [key: string]: any,

// }

// const [user, setUser] = useState<UserData | null>(null);

const CustomTopTab = ({ children, pages = ['array'] }: CustomTopTabProps) => {
  const [index, setIndex] = React.useState(0)
  const [pageList,] = React.useState<any>(pages)
  const ref = React.useRef<any>(null)
  const styles = getStyles({ length: pageList.length, maxItemWidth: width / 4.2 })


  useEffect(() => { setIndex(pageList?.[0]) }, [pageList])
  let lineOffset = pageList.length > 4 ? width / 4.2 : width / pageList.length
  function handleScroll(event: any) {
    let maxlength = event.nativeEvent.contentOffset.x
    let currentLength = event.nativeEvent.contentSize.width / pageList.length
    let scrolledindex: any = maxlength / currentLength
    console.log('maxlength', maxlength, ' currentLength', currentLength, ' index', scrolledindex);
    // let currentindex = event.nativeEvent.contentSize.width / pageList.length > event.nativeEvent.contentOffset.x ? 0 : 1
    if (parseInt(scrolledindex) !== parseInt(pageList.indexOf(index))) {
      console.log('scrolledindex', scrolledindex, pageList.indexOf(index));
      setIndex(pageList[scrolledindex])
    }
  }
  function handleChangeSwitch(params: any) {
    console.log(params);
    setIndex(params)
  }
  useEffect(() => {
    let currentIndex = index ? pageList.indexOf(index) : 0
    console.log('Current Index =', currentIndex, index);
    let abs = Math.abs(currentIndex * width)
    if (Boolean(ref?.current?.scrollTo)) {
      ref.current.scrollTo({ x: abs, y: 0, animated: true })
    }

    Animated.timing(horizontalLine, {
      toValue: currentIndex * lineOffset,
      duration: 200,
      useNativeDriver: true
    }).start() // start the animation  

  }, [index])


  function itemstyle(item: any) {
    return {
      ...styles.switchItemWrapper,
      borderBottomWidth: 0,
      borderBottomColor: index === item ? 'black' : 'transparent',
    }
  }




  return (
    <>
      <View style={styles.switchWrapper} >
        <ScrollView horizontal style={styles.switchContainer}>
          {pageList.map((item: string, i: any) =>
            <TouchableOpacity key={i}
              onPress={() => handleChangeSwitch(item)}
              style={itemstyle(item)}
            >
              <Text // fontWeight={'medium'} 
                style={{ ...styles.switchLabel, opacity: `${index}` === item ? 1 : 0.5, }}
              >{item}</Text>
            </TouchableOpacity>
          )}
          <Animated.View style={{
            ...styles.switchLine,
            transform: [{ translateX: horizontalLine }]
          }} />
        </ScrollView>
      </View >
      <View style={{ ...styles.contentContainer }} >
        <ScrollView
          horizontal
          style={styles.scrollView}
          ref={ref}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          bounces={false}
          scrollEventThrottle={200}
        >
          {children}
        </ScrollView>
      </View>

    </>
  );
}

export default CustomTopTab;

interface CustomTopSectionItemProps {
  children: React.ReactNode,
  style?: any
}
export const CustomTopSectionItem = ({ children, style }: CustomTopSectionItemProps) => {
  const styles = getStyles({})
  return (
    <View style={{ ...styles.scrollViewItemWrapper, ...style }}>
      {children}
    </View>
  )
}


// const horizontalLine = new Animated.Value(0)

// const CustomTopSection = ({ children, pages = [] }) => {
//   const { colors, darkMode } = useTheme()
//   const [index, setIndex] = React.useState(0)
//   const [pageList, setPageList] = React.useState(pages)
//   const ref = React.useRef(null)


//   useEffect(() => { setIndex(pageList?.[0]) }, [pageList])
//   let lineOffset = pageList.length > 4 ? width / 4.2 : width / pageList.length
//   function handleScroll(event) {
//     let maxlength = event.nativeEvent.contentOffset.x
//     let currentLength = event.nativeEvent.contentSize.width / pageList.length
//     let scrolledindex = maxlength / currentLength
//     console.log('maxlength', maxlength, ' currentLength', currentLength, ' index', scrolledindex);
//     // let currentindex = event.nativeEvent.contentSize.width / pageList.length > event.nativeEvent.contentOffset.x ? 0 : 1
//     if (scrolledindex !== pageList.indexOf(index)) {
//       console.log('scrolledindex', scrolledindex, pageList.indexOf(index));
//       setIndex(pageList[scrolledindex])
//     }
//   }
//   function handleChangeSwitch(params) {
//     console.log(params);
//     setIndex(params)
//   }
//   useEffect(() => {
//     let currentIndex = index ? pageList.indexOf(index) : 0
//     console.log('Current Index =', currentIndex, index);
//     let abs = Math.abs(currentIndex * width)
//     ref.current.scrollTo({ x: abs, y: 0, animated: true })

//     Animated.timing(horizontalLine, {
//       toValue: currentIndex * lineOffset,
//       duration: 200,
//       useNativeDriver: true
//     }).start() // start the animation  

//   }, [index])

//   const styles = getStyles({ colors, darkMode, length: pageList.length })
//   function itemstyle(item) {
//     return {
//       ...styles.switchItemWrapper,
//       borderBottomWidth: 0,
//       borderBottomColor: index === item ? colors.wirecashBlue : 'transparent',
//     }
//   }
//   return (
//     <>
//       <View style={styles.switchWrapper} >
//         <ScrollView horizontal style={styles.switchContainer}>
//           {pageList.map((item, i) =>
//             <TouchableOpacity key={i}
//               onPress={() => handleChangeSwitch(item)}
//               style={itemstyle(item)}
//             >
//               <Text  fontWeight={'medium'}
//                 languageEnum={item}
//                 style={{ ...styles.switchLabel, opacity: index === item ? 1 : 0.5, }}
//               />
//             </TouchableOpacity>
//           )}
//           <Animated.View style={{
//             ...styles.switchLine,
//             transform: [{ translateX: horizontalLine }]
//           }} />
//         </ScrollView>
//       </View >
//       <View style={{ ...styles.contentContainer }} >
//         <ScrollView
//           horizontal
//           style={styles.scrollView}
//           ref={ref}
//           pagingEnabled={true}
//           showsHorizontalScrollIndicator={false}
//           onMomentumScrollEnd={handleScroll}
//           bounces={false}
//           scrollEventThrottle={200}
//         >
//           {children}
//         </ScrollView>
//       </View>

//     </>
//   );
// }

// export default CustomTopSection;



// export const CustomTopSectionItem = ({ children, style }) => {
//   const styles = getStyles({})
//   return (
//     <View style={{ ...styles.scrollViewItemWrapper, ...style }}>
//       {children}
//     </View>
//   )
// }
