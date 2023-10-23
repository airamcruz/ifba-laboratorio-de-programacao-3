import { css, styled } from 'styled-components';
import { LayoutSpliterContextProps, LayoutSpliterOrientacao } from '../../contexts/LayoutSpliterContext';

export interface LayoutSpliterNavContentStyleProps extends LayoutSpliterContextProps {
    backgroundColor?: string
}

export const LayoutSpliterNavContentStyle = styled.div<LayoutSpliterNavContentStyleProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
    flex: 1;
    display: flex;

    ${props => props.orientacao == LayoutSpliterOrientacao.Vertical  && css`
        flex-direction: row;
    `}

    ${props => props.orientacao == LayoutSpliterOrientacao.Horizontal  && css`
        flex-direction: column;
    `}
`;
