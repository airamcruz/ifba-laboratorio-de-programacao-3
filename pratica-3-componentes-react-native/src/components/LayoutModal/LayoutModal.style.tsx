import { Dimensions, StyleSheet } from 'react-native';


interface StylesProps {
  backgroundColor?: string;
  color?: string;
  widthPercentage?: number;
  heightPercentage?: number;
  maxHeightPercentage?: number;
  minHeightPercentage?: number;
  borderRadius?: number;
  elevation?: number;
}

interface ModalStylesProps extends StylesProps {
  widthScreen: number;
  heightScreen: number;
}

const getStyles = (props: ModalStylesProps) => {
  
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContainer: {
      backgroundColor: props.backgroundColor ?? 'white',
      borderRadius: props.borderRadius ?? 10,
      elevation: props.elevation ?? 5,
      overflow: 'hidden',
      width: props.widthScreen * (props.widthPercentage ?? .6),
      height: props.heightPercentage == undefined ? undefined : props.heightScreen * props.heightPercentage,
      minHeight: props.minHeightPercentage == undefined ? 'auto' : props.heightScreen * props.minHeightPercentage,
      maxHeight: props.heightScreen * (props.maxHeightPercentage ?? .8),
    },

    modalHeader: {
      paddingTop: 10,
      paddingBottom: 5,
      paddingLeft: 20,
      paddingRight: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(24, 24, 24, 0.1)',
    },

    modalHeaderTitle: {
      color: props.color ?? '#333',
      fontWeight: 'bold',
    },

    modalContent: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 5,
      paddingTop: 5, 

      flex: 1,    
    },

    modalFooter: {
      paddingTop: 5,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'flex-end',
      borderTopWidth: 1,
      borderTopColor: 'rgba(24, 24, 24, 0.1)',
    },

    modalBackdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(24, 24, 24, 0.5)',
      blur: 10,
      backdropFilter: 'blur(10px)',
    },
  });
};

export { StylesProps, ModalStylesProps, getStyles}