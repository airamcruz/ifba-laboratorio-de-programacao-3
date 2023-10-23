import { ReactNode } from "react";
import { LayoutSpliterContainerStyleProps } from "./LayoutSpliterContainer.style";

export interface LayoutSpliterContainerProps extends LayoutSpliterContainerStyleProps {
    children: ReactNode;
}