import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { TScreenParamNavigation } from './types';

import { View, Text } from 'react-native';
import { Home2 } from '../screens/Home2';
import { ListLivro } from '../screens/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TLivroListStackProps } from '../screens/Home/types';


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

const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}  >
      <Stack.Screen
        name="List"
        component={ListLivro}
        options={({ route, navigation  }: TLivroListStackProps) => ({
          title: 'Lista de Livros',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push('Form')} style={{ marginRight: 10 }}>
              <Text>Adicionar</Text>
            </TouchableOpacity>
          ),
        })}
      />
      {/* <Stack.Screen name="register" component={Register} options={{title:"Novo"}} />
        <Stack.Screen name="update" component={Update} options={{title:"Atualizar"}} />
        <Stack.Screen name="show" component={Show} options={{title:"Visualizar"}} />
        <Stack.Screen name="delete" component={Delete} options={{title:"Excluir"}} /> */}
    </Stack.Navigator>
  )
}

export { StackNavigator }