import { SplitterPanelStyle } from "./SplitterPanel.style";
import { SplitterPanelProps } from "./SplitterPanel.type";

export const SplitterPanel = (props : SplitterPanelProps) => {

    const { children, ...rest } = props

    return (
        <SplitterPanelStyle {...rest}>
            {children}
        </SplitterPanelStyle>
    )    
}