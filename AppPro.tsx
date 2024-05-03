import React  from "react";
import { 
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme,
 } from "react-native";

 
 function AppPro() : JSX.Element {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.darkText : styles.darkText}>Flex in native is by default direction column</Text>
                {/* <Text style={isDarkMode ? styles.darkText : styles.darkText}>read about useColorScheme and it parent appearence from react native dev </Text> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteText :{
        color:'white'
    },
    darkText :{
        color:'black'
    },
})

export default AppPro