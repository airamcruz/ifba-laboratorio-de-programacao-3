import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Modal } from './src/components/modal';
import { SplitLayout } from './src/components/splitlayout';

const CustomModal = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const onSave = (onRequestClose: () => void) => {
    console.log("Salvar");
    onRequestClose()
  };

  return (
    <>
      <Button title="Abrir Modal Novo" onPress={openModal} />

      <Modal isOpen={isModalOpen} setOpen={setModalOpen} animationType='slide'>

        <Modal.Header title="Meu Modal" align='center' showCloseButton={true} />

        <Modal.Content>
          <Text>Adicionado o Conteudo do modal!</Text>

        </Modal.Content>

        <Modal.Footer align='end'>
          <Modal.ActionButton label='Salvar' onPress={onSave} fill={false} style={{ backgroundColor: '#218a95', color: 'white' }} />
          <Modal.CloseButton label='Fechar' fill={false} />
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
      <SplitLayout orientation='vertical' style={{backgroundColor: '#f0f8ff'}}>

        <SplitLayout.Panel sizePercent={10} style={{backgroundColor: '#ff6347'}}>
          <Text>Panel 1</Text>
        </SplitLayout.Panel>

        <SplitLayout.Panel>
          <Text>Open up App.tsx to start working on your app!</Text>
          <CustomModal />
        </SplitLayout.Panel>
      </SplitLayout>

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
