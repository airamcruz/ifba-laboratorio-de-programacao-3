import { ActionsType } from "hooks/createReducerContext/actions";
import { TPayloadCreateLivro, TPayloadDeleteLivro, TPayloadDetailsLivro, TPayloadUpdateLivro } from "./types";

type TActionCreateLivro = {
    type: ActionsType.CREATE,
    payload: TPayloadCreateLivro,
}

type TActionUpdateLivro = {
    type: ActionsType.UPDATE,
    payload: TPayloadUpdateLivro,
}

type TActionDeleteLivro = {
    type: ActionsType.DELETE,
    payload: TPayloadDeleteLivro,
}

type TActionDetailsLivro = {
    type: ActionsType.DETAILS,
    payload: TPayloadDetailsLivro,
}

type TActionListLivro = {
    type: ActionsType.LIST_ALL,
}

type TActionsLivro = TActionCreateLivro | TActionUpdateLivro | TActionDeleteLivro | TActionDetailsLivro | TActionListLivro

export {
    TActionsLivro,
    TActionCreateLivro,
    TActionUpdateLivro,
    TActionDeleteLivro,
    TActionDetailsLivro,
    TActionListLivro
}