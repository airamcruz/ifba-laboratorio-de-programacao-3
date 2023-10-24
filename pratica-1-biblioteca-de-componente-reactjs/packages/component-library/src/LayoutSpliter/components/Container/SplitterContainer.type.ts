import { ReactNode } from "react";
import { SplitterContainerStyleProps } from "./SplitterContainer.style";

export interface SplitterContainerProps extends SplitterContainerStyleProps {
    children: [ReactNode, ReactNode];
}