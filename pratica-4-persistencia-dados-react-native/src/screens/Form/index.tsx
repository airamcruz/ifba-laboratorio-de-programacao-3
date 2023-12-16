import React, { useEffect, useState } from 'react';
import {
  Container,
} from './styles';
import { FormProps } from './types';
import { Label } from '../../cp/label';
import { Livro } from '../../entities/Livro';
import { Genero } from '../../entities/Livro/type';


const Form: React.FC<FormProps> = ({ routes }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [id, setId] = useState('');

  const { navigation, route} = routes

  useEffect(() => {

    const livroIdParam = route.params?.id as number || null;

    // Se um ID foi fornecido, busca o livro correspondente
    if (livroIdParam) {
      // Implemente a lógica para buscar o livro com o ID no seu sistema
      // (pode ser uma chamada à API, consulta ao banco de dados, etc.)
      const livroExistente: Livro = {
        id: livroIdParam,
        titulo: 'Título do Livro Existente',
        autor: 'Autor do Livro Existente',
        genero: Genero.Outro,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Preenche os campos com os dados do livro existente
      setTitulo(livroExistente.titulo);
      setAutor(livroExistente.autor);
      setGenero(livroExistente.genero);
    }
  }, []);

  const handleSalvar = () => {
    // Valide os campos conforme necessário
    if (!titulo || !autor || !genero) {
      alert('Preencha todos os campos!');
      return;
    }

    // Crie um objeto Livro com os dados fornecidos
    const novoLivro: Livro = {
      id: livroIdParam || new Date().getTime(), // Usa o ID fornecido ou gera um novo ID
      titulo,
      autor,
      genero,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Chame a função de callback para salvar o novo livro
    onSalvar(novoLivro);

    // Limpe os campos após salvar
    setTitulo('');
    setAutor('');
    setGenero('');
  };

  return (
    <Container>
      <Label>Titulo:</Label>
      <Input
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título do livro"
      />

      <Label>Autor:</Label>
      <Input
        value={autor}
        onChangeText={setAutor}
        placeholder="Digite o nome do autor"
      />

      <Label>Gênero:</Label>
      <Input
        value={genero}
        onChangeText={setGenero}
        placeholder="Digite o gênero do livro"
      />

      <BotaoSalvar onPress={handleSalvar}>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </Container>
  );
};

export {
  Form
};