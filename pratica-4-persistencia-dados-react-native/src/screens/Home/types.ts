import { TScreenParamNavigation } from "../../navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type THomeStackParam = NativeStackScreenProps<TScreenParamNavigation, "Form">;

interface HomeProps{
    routes: THomeStackParam
}

export {
    HomeProps
}