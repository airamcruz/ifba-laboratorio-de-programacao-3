import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "navigation/stacknavigator";
import { useState } from 'react';

const App:React.FC = () => {
  
  const [connected] = useState(true);
  
  return (
      connected &&  <AppRoot />
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