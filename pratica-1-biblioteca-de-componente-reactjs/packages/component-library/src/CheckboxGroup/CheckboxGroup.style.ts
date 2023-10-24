import { styled } from 'styled-components';

export interface CheckboxGroupStyleProps {
    backgroundcolor?: string;
    color?: string;
    padding?: string;
}

export const CheckboxGroupStyle = styled.section<CheckboxGroupStyleProps>`
    color: ${({color}) => color ? color : ''};
    background-color: ${({backgroundcolor}) => backgroundcolor ?? ''};
    padding: ${({padding}) => padding ?? ''};
    
`;
