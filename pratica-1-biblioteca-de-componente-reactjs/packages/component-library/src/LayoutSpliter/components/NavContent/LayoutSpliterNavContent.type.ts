import { ReactNode } from "react";
import { LayoutSpliterNavContentStyleProps } from "./LayoutSpliterNavContent.style";

export interface LayoutSpliterNavContentProps extends Omit<LayoutSpliterNavContentStyleProps, 'orientacao'> {
    children: ReactNode
}