import { CheckboxStyleProps } from "./Checkbox.style";

export interface CheckboxProps extends CheckboxStyleProps {
    label: string;
    name?: string;
}