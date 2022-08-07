import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import Basket from "./src/screens/Basket";

export default function App() {
    const [loaded] = useFonts({
        Montserrat: Montserrat_400Regular,
        MontserratBold: Montserrat_700Bold,
    });

    if (!loaded) return null;

    return (
        <SafeAreaView>
            <StatusBar />
            <Basket />
        </SafeAreaView>
    );
}
