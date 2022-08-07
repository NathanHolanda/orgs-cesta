import { Dimensions, Image, StyleSheet, Text } from "react-native";
import top from "../../assets/top.png";

const screenWidth = Dimensions.get("screen").width;

export default function Basket() {
    return (
        <>
            <Image source={top} style={styles.image} />
            <Text style={styles.title}>Detalhe da cesta</Text>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: (578 / 768) * screenWidth,
    },
    title: {
        position: "absolute",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 26,
        padding: 16,
        width: "100%",
        color: "#eee",
    },
});
