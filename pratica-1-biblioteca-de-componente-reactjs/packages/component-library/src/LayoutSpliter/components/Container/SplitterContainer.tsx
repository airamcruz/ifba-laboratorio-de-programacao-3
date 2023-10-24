import { SplitterContext } from "../../hook/SplitterContext";
import { SplitterContainerStyle } from "./SplitterContainer.style";
import { SplitterContainerProps } from "./SplitterContainer.type";


export const SplitterContainer = (props : SplitterContainerProps) =>{

    const { orientacao, children,  ...rest } = props

    return (        
        <SplitterContext.Provider value={{orientacao: orientacao}}> 
            <SplitterContainerStyle orientacao={orientacao} {...rest}>
                {children}
            </SplitterContainerStyle>
        </SplitterContext.Provider>
    )    
}