import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from '~/navigation/stacknavigator';
import { AppDataSource2 } from '~/stored';

const App = () => {
  
  const [connected, setConnected] = useState(true);

  useEffect(() => {

    console.log('Entrando no metodo useEffect')
    const result = AppDataSource2.getInstance().isConnected;
    console.log('Depois de verificar se ta connectado')

    setConnected(result);
  }, [])
  
  return (
      connected 
      ? <View><Text>Error ao conectar o banco</Text> </View>     
      : <AppRoot />
  )
}

const AppRoot:React.FC = () => {
  
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>    
  )
}

export default App;
