import React, { useEffect, useState } from 'react';
import {
  BotaoSalvar,
  Container, Input, TextoBotao,
} from './styles';
import { FormProps } from './types';
import { Label } from '../../cp/label';
import { Genero } from '../../entities/Livro/type';
import { ActionsType } from '../../hooks/createReducerContext/actions';
import { Picker } from '@react-native-picker/picker';
import { useLivroContext } from '../../states/livro/context';


const Form: React.FC<FormProps> = ({ navigation, route }) => {

  const {state, dispatch}= useLivroContext("Form")

  const [livroId, setLivroId] = useState<number | null>(null);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState<Genero | null>(null);

  useEffect(() => {

    const livroId = route.params?.id as number || null;

    setLivroId(livroId);

    if (livroId) {

      navigation.setOptions({title: 'Editar'})
      
      dispatch({type: ActionsType.DETAILS, payload:{id: livroId}});

      if(state.item != null) {
        setTitulo(state.item.titulo);
        setAutor(state.item.autor);
        setGenero(state.item.genero);
      }

    }
  }, []);

  const handleSalvar = () => {
    if (!titulo || !autor || !genero) {
      alert('Preencha todos os campos!');
      return;
    }

    if(livroId) {
      dispatch({type: ActionsType.UPDATE, payload: {
        autor: autor,
        genero: genero,
        titulo: titulo,
        id: livroId
      }})
    } else {
      dispatch({type: ActionsType.CREATE, payload: {
        autor: autor,
        genero: genero,
        titulo: titulo
      }})
    }
    navigation.pop();
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

      <Picker
        selectedValue={genero}
        onValueChange={setGenero}
      >
        <Picker.Item label="Selecione" value={null} />
        {Object.values(Genero).map((opcao, index) => (
          <Picker.Item key={index} label={opcao} value={opcao} />
        ))}
      </Picker>

      <BotaoSalvar onPress={handleSalvar}>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </Container>
  );
};

export {
  Form
};