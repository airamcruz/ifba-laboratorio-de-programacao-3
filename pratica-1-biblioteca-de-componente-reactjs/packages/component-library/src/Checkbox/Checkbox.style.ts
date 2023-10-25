import { styled } from 'styled-components';

export interface CheckboxStyleProps {
    fontsize?: string;
}

const ContainerStyle = styled.div<CheckboxStyleProps>`
    display: flex;
    width: max-content;
    align-items: baseline;
    cursor: pointer;
    gap: calc(${({fontsize}) => fontsize ?? '1rem'} * 0.3);

    &:hover > input:not(:checked)::before {
        background-color: #e5f1ff;
        border-color: #037ee2;
    }

    &:hover > input:checked::before {
        background-color: #0967d3;
        border-color: #07467a;
    }
`;

const CheckboxStyle = styled.input<CheckboxStyleProps>`

    --checkbox-size: ${({fontsize}) => fontsize ?? '1rem'};

    cursor: pointer;
    width: calc(var(--checkbox-size) * 0.8);
    height: calc(var(--checkbox-size) * 0.8);
    visibility: hidden;
    display: grid;
    grid-template: 'content';
    overflow: hidden;
    margin: unset;

    &::before {
        content: '';
        visibility: visible;
        grid-area: content;
        box-sizing: border-box;
        border: 1px solid #737373;
        background-color: #FFFFFF;
        border-radius: calc(var(--checkbox-size) * 0.15);
        transition: all linear .15s;
    }

    &::after {
        content: '✔';
        opacity: 0;
        box-sizing: border-box;
        visibility: visible;
        grid-area: content;
        display: flex;
        align-items: center;
        justify-content: center;
        color: whitesmoke;
        transform: rotate(12deg);
        line-height: 0px;
        font-size: calc(var(--checkbox-size) * 0.6);
        transition: all linear .15s;
        font-weight: bold;
    }

    &:checked::before {
        background-color: #0075FF;
        border-color: #024d89;
    }

    &:checked::after {
        opacity: 1;
    }
`;


const LabelStyle = styled.label<CheckboxStyleProps>`
    cursor: pointer;
    font-size: ${({fontsize}) => fontsize ?? '1rem'};
`;


export default  {
    Container: ContainerStyle,
    Checkbox: CheckboxStyle,
    Label: LabelStyle,
}