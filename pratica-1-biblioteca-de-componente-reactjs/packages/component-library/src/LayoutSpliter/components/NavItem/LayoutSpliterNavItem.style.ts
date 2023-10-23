import { styled } from 'styled-components';

export interface LayoutSpliterNavItemStyleProps {
    backgroundColor?: string
    backgroundColorHover?: string
    backgroundColorActive?: string
    color?: string
    colorHover?: string
    colorActive?: string
}

export const LayoutSpliterNavItemStyle = styled.div<LayoutSpliterNavItemStyleProps>`
    border: 0;
    cursor: pointer;
    padding: 1rem;
    transition-property: color, background-color;
    transition-duration: .2s;
    transition-timing-function: linear;
    display: flex;
    align-items: center;
    gap: .5rem;
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'unset'};
    color: ${({color}) => color ? color : ''};

    &:hover {
        background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
        color: ${({color}) => color ? color : ''};
    }

    &:active {
        background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ''};
        color: ${({color}) => color ? color : ''};
    }

`;
