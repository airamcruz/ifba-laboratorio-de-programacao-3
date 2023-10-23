import { LayoutSpliterNavItemStyle } from "./LayoutSpliterNavItem.style";
import { LayoutSpliterNavItemProps } from "./LayoutSpliterNavItem.type";

export function LayoutSpliterNavItem({ children, ...rest } : LayoutSpliterNavItemProps) {
    return (
        <LayoutSpliterNavItemStyle {...rest}>
            {children}
        </LayoutSpliterNavItemStyle>
    )    
}