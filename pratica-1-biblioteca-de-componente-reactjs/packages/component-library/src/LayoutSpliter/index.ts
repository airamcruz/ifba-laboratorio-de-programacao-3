import { LayoutSpliterRoot } from "./LayoutSpliterRoot";
import { LayoutSpliterContainer } from "./components/Container/LayoutSpliterContainer";
import { LayoutSpliterContent } from "./components/Content/LayoutSpliterContent";
import { LayoutSpliterNav } from "./components/Nav/LayoutSpliterNav";
import { LayoutSpliterNavContent } from "./components/NavContent/LayoutSpliterNavContent";
import { LayoutSpliterNavFooter } from "./components/NavFooter/LayoutSpliterNavFooter";
import { LayoutSpliterNavHeader } from "./components/NavHeader/LayoutSpliterNavHeader";
import { LayoutSpliterNavItem } from "./components/NavItem/LayoutSpliterNavItem";
import { LayoutSpliterOrientacao } from "./contexts/LayoutSpliterContext";


export const LayoutSpliter  = {
    Root: LayoutSpliterRoot,
    Container: LayoutSpliterContainer,
    Content: LayoutSpliterContent,
    Nav: {
        Container: LayoutSpliterNav,
        Header: LayoutSpliterNavHeader,
        Content: LayoutSpliterNavContent,
        Footer: LayoutSpliterNavFooter,
        Item: LayoutSpliterNavItem
    },
    Orientacao: LayoutSpliterOrientacao
}