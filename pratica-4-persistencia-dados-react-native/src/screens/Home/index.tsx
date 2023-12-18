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
import { useReducerContext } from '../../hooks';
import { TActionsLivro } from '../../states/livro/reducer/actions';
import { ActionsType } from '../../hooks/createReducerContext/actions';

const Home: React.FC<HomeProps> = ({ navigation, route }) => {

  const {state, dispatch}= useReducerContext<Livro, TActionsLivro>("Home")

  const [modalVisible, setModalVisible] = useState(false);

  const [livroId, setLivroId] = useState<number | null>(null);

  useEffect(() => {
  }, []);

  const handleEditar = (id: number) => {
    dispatch({type: ActionsType.UPDATE, payload: {id, }})
  };

  const handleVisualizar = (id: number) => {
  };  

  const handleRemover = (livroId: number) => {
    setLivroId(livroId);
    setModalVisible(true);
  };

  const confirmarExclusao = () => {
    setModalVisible(false);
    setLivroId(null);
  };

  const cancelarExclusao = () => {
    setModalVisible(false);
    setLivroId(null);
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
      {state.items.length === 0 ? (
        <MensagemVazia>Não há livros cadastrados.</MensagemVazia>
      ) : (
        <FlatList
          data={state.items}
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