import React, { useEffect } from 'react';
import {
  BotaoVoltar,
  Container, DetalheItem, Label, TextoBotao,
} from './styles';
import { DetailsProps } from './types';
import { ActionsType } from '../../hooks/createReducerContext/actions';
import { useLivroContext } from '../../states/livro/context';


const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
 
  const {state, dispatch}= useLivroContext("Details")

  useEffect(() => {

    console.log("Buscar Detalhe Livro")
    dispatch({type: ActionsType.LIST_ALL})

    const livroId = route.params?.id as number || null;

    if (livroId) {
      dispatch({type: ActionsType.DETAILS, payload: {id: livroId}})
    }
  }, []);

  return (
    <Container>
          <Label>Título:</Label>
          <DetalheItem>{state.item?.titulo}</DetalheItem>

          <Label>Autor:</Label>
          <DetalheItem>{state.item?.autor}</DetalheItem>

          <Label>Gênero:</Label>
          <DetalheItem>{state.item?.genero}</DetalheItem>

          <Label>Criado em:</Label>
          <DetalheItem>{state.item?.createdAt.toLocaleString()}</DetalheItem>

          <Label>Atualizado em:</Label>
          <DetalheItem>{state.item?.updatedAt.toLocaleString()}</DetalheItem>

          <BotaoVoltar onPress={() => navigation.goBack()}>
            <TextoBotao>Voltar</TextoBotao>
          </BotaoVoltar>
    </Container>
  );
};

export {
  Details
};