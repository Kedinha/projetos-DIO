import React from 'react'
// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>My First App!</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center'
  }
})
