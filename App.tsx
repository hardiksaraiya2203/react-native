import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
} from 'react-native'

function App() {
  const onPressLearnMore = () => {
    console.log('Button pressed!');
    // You can put your logic here
  };
  return (
    <SafeAreaView>
      <View >
        <Text style={styling.title}>hello!</Text>
        <Text >hey</Text>
        <Text >hi</Text>
        <Button title="Press Me as of react native" onPress={() => {
          Alert.alert('Onpress is used for react native')
        }} />
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );

}
const styling = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
})

export default App;