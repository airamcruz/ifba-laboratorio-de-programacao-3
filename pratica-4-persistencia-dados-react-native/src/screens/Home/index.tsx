import React, { useState, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
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
import { ActionsType } from '../../hooks/createReducerContext/actions';
import { useLivroContext } from '../../states/livro/context';

const Home: React.FC<HomeProps> = ({ navigation, route }) => {

  const {state, dispatch}= useLivroContext("Home")

  const [modalVisible, setModalVisible] = useState(false);

  const [livroId, setLivroId] = useState<number|null>(null);

  useEffect(() => {   
    dispatch({type: ActionsType.LIST_ALL})
  }, []);

  const handleEditar = (id: number) => {
    navigation.push('Form', {id: id})
  };

  const handleVisualizar = (id: number) => {
    navigation.push('Details', {id: id})
  };  

  const handleRemover = (livroId: number) => {
    setLivroId(livroId);
    setModalVisible(true);
  };

  const confirmarExclusao = () => {
    dispatch({type: ActionsType.DELETE, payload: {id: livroId!}});
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
    state && <Container>
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