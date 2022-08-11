import { Text as ReactText, StyleSheet } from "react-native";

export default function Text({ children, style, bold = false }) {
    const fontFamily = bold ? defaultStyles.bold : defaultStyles.regular;

    return <ReactText style={[style, fontFamily]}>{children}</ReactText>;
}

const defaultStyles = StyleSheet.create({
    regular: {
        fontFamily: "Montserrat",
    },
    bold: {
        fontFamily: "MontserratBold",
    },
});
