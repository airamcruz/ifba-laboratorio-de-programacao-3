import { styled } from 'styled-components';

export interface LayoutSpliterNavHeaderStyleProps {
    backgroundColor?: string
}

export const LayoutSpliterNavHeaderStyle = styled.div<LayoutSpliterNavHeaderStyleProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
`;
