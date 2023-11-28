import { ScrollView, View } from "react-native"
import { PanelProps } from "./Panel.type";
import { useSplitLayoutContext } from "../../hook/UseSplitLayoutContext";
import { getStyles } from "./Panel.style";

const Panel = ({
    children,
    style,
    size,
    sizePercent,
}:PanelProps) => {

    const {orientation} = useSplitLayoutContext("SplitLayout.Panel");

    const styles = getStyles({
        orientation: orientation, 
        size: size,
        sizePercent: sizePercent,
        ...style
    });

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export {
    Panel,
}