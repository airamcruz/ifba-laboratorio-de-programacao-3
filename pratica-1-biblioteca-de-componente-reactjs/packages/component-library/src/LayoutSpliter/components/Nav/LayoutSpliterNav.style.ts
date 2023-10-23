import { styled, css } from 'styled-components';
import { LayoutSpliterContextProps, LayoutSpliterOrientacao } from '../../contexts/LayoutSpliterContext';

export interface LayoutSpliterNavStyleProps extends LayoutSpliterContextProps {
    backgroundColor?: string
    padding?: string
    width?: string
    height?: string
}

export const LayoutSpliterNavStyle = styled.section<LayoutSpliterNavStyleProps>`
    grid-area: nav;
    display: flex;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
    padding: ${({padding}) => padding ? padding : ''};
    width: ${({width}) => width ? width : ''};
    height: ${({height}) => height ? height : ''};

    ${props => props.orientacao == LayoutSpliterOrientacao.Vertical  && css`
        flex-direction: row;
    `}

    ${props => props.orientacao == LayoutSpliterOrientacao.Horizontal  && css`
        flex-direction: column;
    `}

`;
