import { Checkbox } from "../Checkbox";
import Styled from "./CheckboxGroup.style";
import { CheckboxGroupProps } from "./CheckboxGroup.type";

export const CheckboxGroup = (props : CheckboxGroupProps) => {

    const { elementos, titulo, ...rest } = props

    return (
        <Styled.Fieldset>
            <Styled.Legend {...rest}>{titulo}</Styled.Legend>
            <Styled.Container {...rest}>
                {
                    elementos.map(item => {
                        return <Checkbox label={item.descricao} name={item.name} {...rest} />
                    })
                }
            </Styled.Container>
        </Styled.Fieldset>
    )    
}