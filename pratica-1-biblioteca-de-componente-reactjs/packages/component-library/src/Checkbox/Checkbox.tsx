import { useId } from "react";
import Styled from "./Checkbox.style";
import { CheckboxProps } from "./Checkbox.type";

export const Checkbox = (props : CheckboxProps) => {

    const { label, ...rest } = props;

    const checkboxId = useId();

    return (
        <Styled.Container>
            <Styled.Checkbox id={checkboxId} name={checkboxId} type="checkbox" {...rest} />
            <Styled.Label htmlFor={checkboxId} {...rest}>{label}</Styled.Label>
        </Styled.Container>
    )    
}