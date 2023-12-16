import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from './navigation/stacknavigator';
import { useDatabaseInitialize } from './hooks';

const AppRoot = () => {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer> 
  )
}

const ErrorConnection = () => {  

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Error ao conectar o banco!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer> 
  )
}

export default function App() {

  const [connected] = useDatabaseInitialize();

  return (
      connected ? <AppRoot /> : <ErrorConnection />
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
