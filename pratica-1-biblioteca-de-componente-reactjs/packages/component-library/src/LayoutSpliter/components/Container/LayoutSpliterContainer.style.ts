import { styled, css } from 'styled-components';
import { LayoutSpliterContextProps, LayoutSpliterOrientacao } from '../../contexts/LayoutSpliterContext';

export interface LayoutSpliterContainerStyleProps extends LayoutSpliterContextProps {
    backgroundColor?: string
}

export const LayoutSpliterContainerStyle = styled.div<LayoutSpliterContainerStyleProps>`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: min-content auto;
    grid-template-rows: min-content auto;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};

    color: ${(props) =>  {
        console.log('LayoutSpliterContainerStyle props: ', props)
        return '';
    }};

    ${props => props.orientacao == LayoutSpliterOrientacao.Vertical  && css`
        grid-template-areas: 
        'nav nav'
        'content content';
    `}

    ${props => props.orientacao == LayoutSpliterOrientacao.Horizontal  && css`
        grid-template-areas: 
        'nav content'
        'nav content';
    `}

`;
