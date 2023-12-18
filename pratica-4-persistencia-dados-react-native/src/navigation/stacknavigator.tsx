import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { THomeStackParam, TScreenParamNavigation } from './types';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Home } from '../screens/Home';
import { Form } from '../screens/Form';


// as telas a seguir devem ser implementadas adequamente
const Register = () => <View><Text>Novo</Text></View>
const Update = () => <View><Text>Atualizar</Text></View>
const Show = () => <View><Text>Visualizar</Text></View>
const ShowAll = () => <View><Text>Visualizar todos</Text></View>
const Delete = () => <View><Text>Excluir</Text></View>

const Stack = createStackNavigator<TScreenParamNavigation>();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#BB3508",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  ...TransitionPresets.SlideFromRightIOS
};

const HeaderActions = ({ route, navigation  }: THomeStackParam) => {
  return (
    <TouchableOpacity onPress={() => navigation.push('Form')} style={{ marginRight: 10 }}>
      <Text>Adicionar</Text>
    </TouchableOpacity>
  );
}


const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}  >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }: THomeStackParam) => ({
          title: 'Lista de Livros',
          headerRight: () => HeaderActions({ route, navigation }),
        })}
      />
      <Stack.Screen name="Form" component={Form} options={{title:"Novo"}} />
      {/* 
        <Stack.Screen name="update" component={Update} options={{title:"Atualizar"}} />
        <Stack.Screen name="show" component={Show} options={{title:"Visualizar"}} />
        <Stack.Screen name="delete" component={Delete} options={{title:"Excluir"}} /> */}
    </Stack.Navigator>
  )
}

export { StackNavigator }