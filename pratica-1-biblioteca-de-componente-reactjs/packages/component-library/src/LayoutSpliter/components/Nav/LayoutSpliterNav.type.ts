import { ReactNode } from "react";
import { LayoutSpliterNavStyleProps } from "./LayoutSpliterNav.style";

export interface LayoutSpliterNavProps extends Omit<LayoutSpliterNavStyleProps, 'orientacao'> {
    children: ReactNode
}