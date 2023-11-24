import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LayoutModal } from './src/components/LayoutModal/LayoutModal';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      
      <Button title="Abrir Modal" onPress={openModal} />

      <LayoutModal 
        title='Meu Modal'
        isVisible={modalVisible} 
        onClose={closeModal} 
        animationType='slide'
        style={{
          color: '#333',
          backgroundColor: '#f9f8ff',
          heightPercentage: .5,
          minHeightPercentage: .15,
          maxHeightPercentage: .25,
        }}
      >
        <Text>Adicionado o Conteudo do modal!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus unde aperiam debitis cum dolore minima harum modi doloribus. Consequatur, eum aliquid dolor veniam recusandae rem nobis sunt earum? Aspernatur!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus unde aperiam debitis cum dolore minima harum modi doloribus. Consequatur, eum aliquid dolor veniam recusandae rem nobis sunt earum? Aspernatur!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repellendus unde aperiam debitis cum dolore minima harum modi doloribus. Consequatur, eum aliquid dolor veniam recusandae rem nobis sunt earum? Aspernatur!</Text>

      </LayoutModal>

      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
