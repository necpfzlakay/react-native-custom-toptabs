//Font and icon sizes here
import { StyleSheet } from 'react-native';
import { width as w } from './Dimensions';
const fonts_family = StyleSheet.create({
    large: { fontFamily: 'System', fontWeight: '800' },
    bold: { fontFamily: 'System', fontWeight: '700' },
    semibold: { fontFamily: 'System', fontWeight: '600' },
    medium: { fontFamily: 'System', fontWeight: '500' },
    regular: { fontFamily: 'System', fontWeight: '400' },
    light: { fontFamily: 'System', fontWeight: '300' },
    thin: { fontFamily: 'System', fontWeight: '200' },
});
const font_size = StyleSheet.create({
    xxxxxl: { fontSize: 0.1 * w },
    xxxxl: { fontSize: 0.09 * w },
    xxxl: { fontSize: 0.08 * w },
    xxl: { fontSize: 0.07 * w },
    xl: { fontSize: 0.06 * w },
    l: { fontSize: 0.05 * w },
    dd: { fontSize: 0.045 * w },
    d: { fontSize: 0.04 * w },
    mm: { fontSize: 0.035 * w },
    m: { fontSize: 0.03 * w },
    s: { fontSize: 0.02 * w },
    xs: { fontSize: 0.01 * w },
});
export { font_size, fonts_family };
