import { ReactNode } from "react";
import { SplitterPanelStyleProps } from "./SplitterPanel.style";

export interface SplitterPanelProps extends SplitterPanelStyleProps {
    children?: ReactNode
}