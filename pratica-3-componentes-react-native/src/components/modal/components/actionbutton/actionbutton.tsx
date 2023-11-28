import { Text, TouchableOpacity } from "react-native";
import { useModalContext } from "../../hook/UseModalContext";
import { getStyles } from "./ActionButton.style";
import { ActionButtonProps } from "./ActionButton.type";

const ActionButton = ({
    label,
    style,
    onPress,
    fill = false,
}: ActionButtonProps) => {

    const { onRequestClose } = useModalContext("Modal.ActionButton");

    const styles = getStyles({ fill, ...style })

    function onActionPress() {
        onPress(onRequestClose);
    }

    return (
        <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={onActionPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export {
    ActionButton
}