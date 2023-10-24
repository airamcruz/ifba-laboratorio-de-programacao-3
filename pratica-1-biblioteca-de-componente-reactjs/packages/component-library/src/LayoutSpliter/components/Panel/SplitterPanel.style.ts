import { styled } from 'styled-components';

export interface SplitterPanelStyleProps {
    backgroundcolor?: string;
    color?: string;
    padding?: string;
}

export const SplitterPanelStyle = styled.section<SplitterPanelStyleProps>`
    color: ${({color}) => color ? color : ''};
    background-color: ${({backgroundcolor}) => backgroundcolor ?? ''};
    padding: ${({padding}) => padding ?? ''};
    
`;
