import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modal } from './src/components/modal';


export default function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const onSave = (onRequestClose: () => void) => {
    console.log("Salvar");
    onRequestClose()
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      
      <Button title="Abrir Modal Novo" onPress={openModal} />

      <Modal isOpen={isModalOpen} setOpen={setModalOpen} animationType='slide'>

        <Modal.Header title="Meu Modal" align='center' showCloseButton={true} />

        <Modal.Content>
          <Text>Adicionado o Conteudo do modal!</Text>

        </Modal.Content>

        <Modal.Footer align='end'>
          <Modal.ActionButton label='Salvar' onPress={onSave} fill={false} style={{backgroundColor: '#218a95', color: 'white'}} />
          <Modal.CloseButton label='Fechar' fill={false} />
        </Modal.Footer>

      </Modal>

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
