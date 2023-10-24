import { createContext} from "react";

export enum SplitterOrientacao {
    Vertical,
    Horizontal    
}

export interface SplitterContextProps  {
    orientacao: SplitterOrientacao 
}

export const SplitterContext = createContext<SplitterContextProps>({} as SplitterContextProps);
