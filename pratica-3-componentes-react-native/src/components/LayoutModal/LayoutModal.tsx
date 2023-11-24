// ModalView.tsx
import React, { FC, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, Dimensions, Animated, ScrollView } from 'react-native';
import { LayoutModalType } from './LayoutModal.types';
import { getStyles } from './LayoutModal.style';

export const LayoutModal: FC<LayoutModalType> = ({ title, isVisible, onClose, style, children, animationType = 'fade', isBackdropStatic = true }) => {

    const { height, width, scale, fontScale } = useWindowDimensions();

    const styles = getStyles({
        widthScreen: width,
        heightScreen: height,
        ...(style || {}),
    });

    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const slideAnimation = useRef(new Animated.Value(0)).current;

    const onShowModal = () => {
        const animations = [Animated.timing(fadeAnimation, { toValue: 1, duration: 200, useNativeDriver: true })];

        if (animationType === 'slide') {
            animations.push(Animated.timing(slideAnimation, { toValue: 1, duration: 200, useNativeDriver: true }));
        }

        Animated.parallel(animations).start();
    };

    const onRequestCloseModal = () => {

        const animations = [Animated.timing(fadeAnimation, { toValue: 0, duration: 200, useNativeDriver: true })];

        if (animationType === 'slide') {
            animations.push(Animated.timing(slideAnimation, { toValue: 0, duration: 200, useNativeDriver: true }));
        }

        Animated.parallel(animations).start(() => onClose());
    };

    return (
        <Modal
            transparent
            animationType="none"
            visible={isVisible}
            onRequestClose={onRequestCloseModal}
            onShow={onShowModal}
        >
            <View style={styles.container}>

                {/* Fundo com opacidade */}
                <TouchableWithoutFeedback onPress={() => !isBackdropStatic ? onRequestCloseModal() : null}>
                    <Animated.View style={[
                        styles.modalBackdrop,
                        { opacity: fadeAnimation }
                    ]} />
                </TouchableWithoutFeedback>

                {/* Conteúdo do modal */}
                <Animated.View style={[
                    styles.modalContainer,
                    {
                        opacity: fadeAnimation,
                        transform: [
                            {
                                translateY: animationType === 'slide' ?
                                    slideAnimation.interpolate({ inputRange: [0, 1], outputRange: [width, 0] }) :
                                    0
                            },
                            {
                                scale: fadeAnimation.interpolate({ inputRange: [0, 1], outputRange: [.8, 1] })
                            }
                        ],
                    },
                ]}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderTitle}>{title}</Text>
                    </View>

                    <ScrollView>
                        <View style={styles.modalContent}>
                            {children}
                        </View>
                    </ScrollView>

                    <View style={styles.modalFooter}>
                        <TouchableOpacity onPress={onRequestCloseModal}>
                            <Text>Fechar Modal</Text>
                        </TouchableOpacity>
                    </View>

                </Animated.View>
            </View>
        </Modal>
    );
};
