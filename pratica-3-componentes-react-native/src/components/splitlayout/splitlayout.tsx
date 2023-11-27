import { View, useWindowDimensions } from "react-native";
import { SplitLayoutProvider } from "./hook/splitLayoutProvider";
import { getStyles } from "./splitlayout.style";
import { SplitLayoutProps } from "./splitlayout.type";
import { ReactNodeUtil } from "../../utils/ReactNodeUtil";
import { Panel } from "./components/panel/panel";

const SplitLayoutCustom = ({
    children,
    orientation,
    style,
}: SplitLayoutProps) => {    

    const { height, width, scale, fontScale } = useWindowDimensions();

    const styles = getStyles({
        orientation: orientation,
        ...(style || {}),
    });

    return (
        <SplitLayoutProvider orientation={orientation}>
            <View style={styles.container}>
                {ReactNodeUtil.mapElement(children, Panel)}
            </View>
        </SplitLayoutProvider>
    );
}

SplitLayoutCustom.Panel = Panel;

export {
    SplitLayoutCustom as SplitLayout
};