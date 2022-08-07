import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import top from "../../assets/top.png";
import logo from "../../assets/logo.png";

const screenWidth = Dimensions.get("screen").width;

export default function Basket() {
    return (
        <>
            <Image source={top} style={styles.image} />
            <Text style={styles.title}>Detalhe da cesta</Text>
            <View style={styles.basket}>
                <Text style={styles.itemTitle}>Cesta de Verduras</Text>
                <View style={styles.farm}>
                    <Image style={styles.farmLogo} source={logo} />
                    <Text style={styles.farmName}>Jenny Jack Farm</Text>
                </View>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec fringilla in neque vel efficitur. Nullam leo elit,
                    tincidunt vitae cursus nec, ornare varius nisl. Proin
                    vulputate porttitor commodo. Sed sit amet lorem id urna
                    ullamcorper consequat. Donec iaculis tellus nunc, ut
                    tincidunt mauris mattis faucibus. Aenean ornare placerat
                    facilisis.
                </Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: (578 / 768) * screenWidth,
    },
    title: {
        fontFamily: "MontserratBold",
        position: "absolute",
        fontSize: 16,
        textAlign: "center",
        lineHeight: 26,
        padding: 16,
        width: "100%",
        color: "#eee",
    },
    basket: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    itemTitle: {
        fontFamily: "MontserratBold",
        color: "#555",
        fontSize: 24,
        marginBottom: 20,
    },
    farm: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    farmLogo: {
        width: 32,
        height: 32,
        marginRight: 5,
    },
    farmName: {
        color: "#555",
        fontSize: 14,
        fontFamily: "Montserrat",
    },
    description: {
        color: "#888",
        marginBottom: 10,
        fontFamily: "Montserrat",
    },
    price: {
        color: "#3b6",
        fontFamily: "MontserratBold",
        fontSize: 24,
    },
});
