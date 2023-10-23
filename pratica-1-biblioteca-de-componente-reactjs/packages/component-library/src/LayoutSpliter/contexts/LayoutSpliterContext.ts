import { createContext} from "react";

export enum LayoutSpliterOrientacao {
    Vertical,
    Horizontal
    
}

export interface LayoutSpliterContextProps  {
    orientacao: LayoutSpliterOrientacao 
}

export const LayoutSpliterContext = createContext<LayoutSpliterContextProps>({} as LayoutSpliterContextProps);
