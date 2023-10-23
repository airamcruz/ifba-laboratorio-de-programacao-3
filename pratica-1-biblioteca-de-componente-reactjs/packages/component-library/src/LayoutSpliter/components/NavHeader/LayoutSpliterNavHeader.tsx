import { LayoutSpliterNavHeaderStyle } from "./LayoutSpliterNavHeader.style";
import { LayoutSpliterNavHeaderProps } from "./LayoutSpliterNavHeader.type";

export function LayoutSpliterNavHeader({ children, ...rest } : LayoutSpliterNavHeaderProps) {
    return (
        <LayoutSpliterNavHeaderStyle {...rest}>
            {children}
        </LayoutSpliterNavHeaderStyle>
    )    
}