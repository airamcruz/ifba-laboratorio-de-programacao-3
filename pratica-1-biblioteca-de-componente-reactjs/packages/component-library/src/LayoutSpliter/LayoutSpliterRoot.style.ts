import { styled } from 'styled-components';

export interface LayoutSpliterRootStyleProps {
    backgroundColor?: string
}

export const LayoutSpliterRootStyle = styled.div<LayoutSpliterRootStyleProps>`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
`;
