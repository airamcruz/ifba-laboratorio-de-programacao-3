import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TScreenParamNavigation } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type TFormStackProps = NativeStackScreenProps<TScreenParamNavigation, "Form">;

// interface TFormStackProps {
//     navigation: TFormStackParam;
//     route: TFormouteProp;
// }

interface FormProps {
    routes: TFormStackProps;
}

export {
    FormProps,
    TFormStackProps,
}