import React, { useState, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Container,
  LivroItem,
  Titulo,
  BotoesContainer,
  BotaoEditar,
  BotaoRemover,
  BotaoVisualizar,
  MensagemVazia,
} from './styles';
import { Livro } from '../../entities/Livro';
import { ModalConfirm } from '../../cp/modal-confirm';
import { HomeProps } from './types';


const Home: React.FC<HomeProps> = ({ routes }) => {

  const [livros, setLivros] = useState<Livro[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [livroIdToDelete, setLivroIdToDelete] = useState<number | null>(null);

  useEffect(() => {
  }, []);

  const handleEditar = (id: number) => {
  };

  const handleVisualizar = (id: number) => {
  };  

  const handleRemover = (livroId: number) => {
    setLivroIdToDelete(livroId);
    setModalVisible(true);
  };

  const confirmarExclusao = () => {
    setModalVisible(false);
    setLivroIdToDelete(null);
  };

  const cancelarExclusao = () => {
    setModalVisible(false);
    setLivroIdToDelete(null);
  };

  const renderItem: ListRenderItem<Livro> = ({ item }) => (
    <LivroItem>
      <Titulo>{item.titulo}</Titulo>
      <BotoesContainer>
        <BotaoEditar onPress={() => handleEditar(item.id)}>Editar</BotaoEditar>
        <BotaoRemover onPress={() => handleRemover(item.id)}>Remover</BotaoRemover>
        <BotaoVisualizar onPress={() => handleVisualizar(item.id)}>Visualizar</BotaoVisualizar>
      </BotoesContainer>
    </LivroItem>
  );

  return (
    <Container>
      {livros.length === 0 ? (
        <MensagemVazia>Não há livros cadastrados.</MensagemVazia>
      ) : (
        <FlatList
          data={livros}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      <ModalConfirm
        visible={modalVisible}
        onConfirmar={confirmarExclusao}
        onCancelar={cancelarExclusao}
      />
    </Container>
  );
};

export {
  Home
};