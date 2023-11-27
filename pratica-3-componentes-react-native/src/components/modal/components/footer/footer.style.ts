import { StyleSheet } from "react-native";
import { _FooterStylesProps } from "./footer.type";

const getStyles = (props: _FooterStylesProps) => {

    return StyleSheet.create({
        container: {
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            borderTopWidth: 1,
            borderTopColor: 'rgba(24, 24, 24, 0.1)',
            backgroundColor: props.backgroundColor ?? 'white',

            flexDirection: 'row',
            gap: 8,

            justifyContent: (() => {
                switch (props.align) {
                    case 'center': {
                        return 'center';
                    }
                    case 'end': {
                        return 'flex-end'
                    }
                    default: {
                        return 'flex-start'
                    }
                }
            })()

        },
    });
};

export {
    getStyles,
}