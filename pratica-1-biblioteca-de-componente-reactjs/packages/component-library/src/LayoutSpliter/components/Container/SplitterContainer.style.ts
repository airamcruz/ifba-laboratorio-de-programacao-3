import { styled, css } from 'styled-components';
import { SplitterContextProps, SplitterOrientacao } from '../../hook/SplitterContext';

export interface SplitterContainerStyleProps extends SplitterContextProps {
    splitterpercent: number;
    backgroundcolor?: string;
    color?: string;
    style?: React.CSSProperties;
}

export const SplitterContainerStyle = styled.div<SplitterContainerStyleProps>`
    height: 100%;
    width: 100%;
    display: grid;
    background-color: ${({backgroundcolor}) => backgroundcolor ?? ''};
    color: ${({color}) => color ?? ''};

    ${props => props.orientacao == SplitterOrientacao.Vertical  && css`
        grid-template-rows: ${props.splitterpercent ? `minmax(max-content, ${props.splitterpercent}%)` : 'max-content' } minmax(max-content, auto);
         ;
    `}

    ${props => props.orientacao == SplitterOrientacao.Horizontal  && css`
        grid-template-columns: ${props.splitterpercent ? `minmax(max-content, ${props.splitterpercent}%)` : 'max-content' } minmax(max-content, auto);
    `}

`;
