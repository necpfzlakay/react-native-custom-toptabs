import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomToptabs } from 'react-native-custom-toptabs';
export default function App() {
    return (React.createElement(View, { style: styles.container },
        React.createElement(CustomToptabs
        // color="#32a852" style={styles.box}
        , null)));
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
