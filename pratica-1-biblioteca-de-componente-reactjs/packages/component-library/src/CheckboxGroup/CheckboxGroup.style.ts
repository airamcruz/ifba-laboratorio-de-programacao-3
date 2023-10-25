import { styled } from 'styled-components';

export interface CheckboxGroupStyleProps {
    fontsize?: string;
}

const FieldsetStyle = styled.fieldset`
    padding: 0.5rem;
    width: 100%;
`;

const LegendStyle = styled.legend<CheckboxGroupStyleProps>`
    margin: 0px .5rem;
    padding: 0px .5rem;
    font-size: ${({fontsize}) => fontsize ?? '1rem'};
`;

const ContainerStyle = styled.div<CheckboxGroupStyleProps>`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(${({fontsize}) => fontsize ?? '1rem'} * 4));
    gap: 0.5rem;
    justify-items: center;
    justify-content: space-evenly;
    padding: 0 .5rem;
`;


export default  {
    Fieldset: FieldsetStyle,
    Legend: LegendStyle,
    Container: ContainerStyle,
}