import { ReactNode } from "react";
import { StylesProps } from "./LayoutModal.style";

export interface LayoutModalType {
    title: string,
    isVisible: boolean;
    animationType?: 'fade' | 'slide';
    isBackdropStatic?: boolean;
    style?: StylesProps;
    onClose: () => void;
    children?: ReactNode
}