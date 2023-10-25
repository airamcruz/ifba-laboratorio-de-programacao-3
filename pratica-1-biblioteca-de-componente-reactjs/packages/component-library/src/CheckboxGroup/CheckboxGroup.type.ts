import { CheckboxGroupStyleProps } from "./CheckboxGroup.style";

export type CheckboxGroupElement = {
    descricao: string;
    name?: string;
}

export interface CheckboxGroupProps extends CheckboxGroupStyleProps {
    titulo: string;
    elementos: CheckboxGroupElement[];
}