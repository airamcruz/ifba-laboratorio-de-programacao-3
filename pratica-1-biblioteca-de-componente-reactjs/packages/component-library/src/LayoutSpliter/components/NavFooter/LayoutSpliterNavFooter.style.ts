import { styled } from 'styled-components';

export interface LayoutSpliterNavFooterStyleProps {
    backgroundColor?: string
}

export const LayoutSpliterNavFooterStyle = styled.div<LayoutSpliterNavFooterStyleProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
    
`;
