import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type TScreenParamNavigation = {
    Home: undefined;
    Details: { id: number };
    Form: { id: number } | undefined;
}

// export type THomeStackParam = NativeStackNavigationProp<TScreenParamNavigation,"Home2","homestack">;