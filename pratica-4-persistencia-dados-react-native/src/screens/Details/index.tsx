import React, { useState, useEffect } from 'react';
import {
  BotaoVoltar,
  Container, DetalheItem, Label, TextoBotao,
} from './styles';
import { Livro } from '../../entities/Livro';
import { DetailsProps } from './types';


const Details: React.FC<DetailsProps> = ({ navigation, route }) => {

  const [livro, setLivro] = useState<Livro | null>(null);

  return (
    <Container>
          <Label>Título:</Label>
          <DetalheItem>{livro?.titulo}</DetalheItem>

          <Label>Autor:</Label>
          <DetalheItem>{livro?.autor}</DetalheItem>

          <Label>Gênero:</Label>
          <DetalheItem>{livro?.genero}</DetalheItem>

          <Label>Criado em:</Label>
          <DetalheItem>{livro?.createdAt.toLocaleString()}</DetalheItem>

          <Label>Atualizado em:</Label>
          <DetalheItem>{livro?.updatedAt.toLocaleString()}</DetalheItem>

          <BotaoVoltar onPress={() => navigation.goBack()}>
            <TextoBotao>Voltar</TextoBotao>
          </BotaoVoltar>
    </Container>
  );
};

export {
  Details
};