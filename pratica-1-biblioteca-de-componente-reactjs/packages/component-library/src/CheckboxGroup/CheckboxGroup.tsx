import { CheckboxGroupStyle } from "./CheckboxGroup.style";
import { CheckboxGroupProps } from "./CheckboxGroup.type";

export const CheckboxGroup = (props : CheckboxGroupProps) => {

    const { children, ...rest } = props

    return (
        <CheckboxGroupStyle {...rest}>
            {children}
        </CheckboxGroupStyle>
    )    
}