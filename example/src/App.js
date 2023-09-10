import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomTopSectionItem, CustomTopTab } from 'react-native-custom-toptabs';
export default function App() {
    const [result, setResult] = React.useState('page1');
    React.useEffect(() => {
        setTimeout(() => {
            setResult('page2');
        }, 300);
    }, []);
    return (React.createElement(View, { style: styles.container },
        React.createElement(CustomTopTab, { pages: ['page1', 'page2'], scrollTo: result, backgroundColor: ['lightyellow', 'lightblue'], 
            // tintColor={'red'}
            tintHeight: 2, switchHeight: 55, tintRadius: 15, containerStyle: {}, sectionSwitchStyle: {
                backgroundColor: 'green',
            } },
            React.createElement(CustomTopSectionItem, { style: {
                    backgroundColor: 'lightblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                React.createElement(Text, null, "CustomTopSectionItem")),
            React.createElement(CustomTopSectionItem, { style: {
                    backgroundColor: 'lightyellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                } },
                React.createElement(Text, null, "CustomTopSectionItem")))));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 50,
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
});
