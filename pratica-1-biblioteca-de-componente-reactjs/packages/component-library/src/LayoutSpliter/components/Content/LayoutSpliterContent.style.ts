import { styled } from 'styled-components';

export interface LayoutSpliterContentStyleProps {
    backgroundColor?: string
}

export const LayoutSpliterContentStyle = styled.section<LayoutSpliterContentStyleProps>`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
    grid-area: content;
`;
