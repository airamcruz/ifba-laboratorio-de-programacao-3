import { Genero } from "src/@types/livro";

type TPayloadCreateLivro = {
    titulo: string;
    autor: string;
    genero: Genero;
}

type TPayloadUpdateLivro = {
    id: number;
    titulo: string;
    autor: string;
    genero: Genero;
}

type TPayloadDeleteLivro = {
    id: number;
}

type TPayloadDetailsLivro = {
    id: number;
}

export {
    TPayloadCreateLivro,
    TPayloadUpdateLivro,
    TPayloadDeleteLivro,
    TPayloadDetailsLivro,
}