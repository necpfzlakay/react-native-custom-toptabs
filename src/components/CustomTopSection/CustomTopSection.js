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
const horizontalLine = new Animated.Value(0);
const CustomTopTab = ({ children, pages = ['array'], containerStyle, scrollTo, sectionSwitchStyle, sectionSwitchTextStyle, backgroundColor, tintColor = 'black', tintHeight = 12, tintRadius = 0, switchHeight = 55 }) => {
    const [index, setIndex] = React.useState(0);
    const [pageList,] = React.useState(pages);
    const ref = React.useRef(null);
    const styles = getStyles({ length: pageList.length, maxItemWidth: width / 4.2 });
    let lineOffset = pageList.length > 4 ? width / 4.2 : width / pageList.length;
    useEffect(() => { setIndex(pageList?.[0]); }, [pageList]);
    function handleScroll(event) {
        let maxlength = event.nativeEvent.contentOffset.x;
        let currentLength = event.nativeEvent.contentSize.width / pageList.length;
        let scrolledindex = maxlength / currentLength;
        console.log('maxlength', maxlength, ' currentLength', currentLength, ' index', scrolledindex);
        // let currentindex = event.nativeEvent.contentSize.width / pageList.length > event.nativeEvent.contentOffset.x ? 0 : 1
        if (parseInt(scrolledindex) !== parseInt(pageList.indexOf(index))) {
            console.log('scrolledindex', scrolledindex, pageList.indexOf(index));
            setIndex(pageList[scrolledindex]);
        }
    }
    function handleChangeSwitch(params) {
        console.log(params);
        setIndex(params);
    }
    useEffect(() => {
        let currentIndex = index ? pageList.indexOf(index) : 0;
        console.log('Current Index =', currentIndex, index);
        let abs = Math.abs(currentIndex * width);
        if (Boolean(ref?.current?.scrollTo)) {
            ref.current.scrollTo({ x: abs, y: 0, animated: true });
        }
        Animated.timing(horizontalLine, {
            toValue: currentIndex * lineOffset,
            duration: 200,
            useNativeDriver: true
        }).start(); // start the animation  
    }, [index]);
    function manualScroll(pageName) {
        console.log('scrollTo', pageName);
        if (pageName)
            ref.current.scrollTo({ x: pageName, y: 0, animated: true });
    }
    useEffect(() => {
        console.log('manualScroll', scrollTo);
        if (scrollTo) {
            manualScroll(scrollTo);
        }
    }, [scrollTo]);
    console.log(typeof (backgroundColor));
    function itemstyle(item, i = 0) {
        return {
            ...styles.switchItemWrapper,
            borderBottomWidth: 0,
            borderBottomColor: index === item ? 'black' : 'transparent',
            backgroundColor: typeof (backgroundColor) === 'object' ? backgroundColor?.[i] : backgroundColor,
        };
    }
    return (React.createElement(View, null,
        React.createElement(View, { style: [styles.switchWrapper, { height: switchHeight }] },
            React.createElement(ScrollView, { horizontal: true, style: [styles.switchContainer, { height: switchHeight }] },
                pageList.map((item, i) => React.createElement(TouchableOpacity, { key: i, onPress: () => handleChangeSwitch(item), style: [
                        itemstyle(item, i),
                        sectionSwitchStyle,
                        { backgroundColor: typeof (backgroundColor) === 'object' ? backgroundColor?.[i] : backgroundColor, }
                    ] },
                    React.createElement(Text, { style: { ...styles.switchLabel, opacity: `${index}` === item ? 1 : 0.5, fontWeight: '400', ...sectionSwitchTextStyle } }, item))),
                React.createElement(Animated.View, { style: {
                        ...styles.switchLine, transform: [{ translateX: horizontalLine }], borderColor: tintColor,
                        borderWidth: tintHeight,
                        borderRadius: tintRadius
                    } }))),
        React.createElement(View, { style: [styles.contentContainer, containerStyle] },
            React.createElement(ScrollView, { horizontal: true, style: styles.scrollView, ref: ref, pagingEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: handleScroll, bounces: false, scrollEventThrottle: 200 }, children))));
};
export default CustomTopTab;
