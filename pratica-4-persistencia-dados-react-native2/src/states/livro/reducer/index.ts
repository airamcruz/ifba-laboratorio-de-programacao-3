import { Livro } from "src/entities/livro.model";
import { TPayloadCreateLivro, TPayloadDeleteLivro, TPayloadDetailsLivro, TPayloadUpdateLivro } from "./types";
import { TFunctionReducer, IStateProps } from "hooks/createReducerContext/types";
import { ActionsType } from "hooks/createReducerContext/actions";
import { TActionsLivro } from "./actions";

const initialState: IStateProps<Livro> = {
    items: [],
    item: undefined,
    hasError: false,
    message: ''
}

const reducer: TFunctionReducer<Livro, TActionsLivro> = (prevState, action) => {

    switch (action.type) {

        case ActionsType.CREATE:
            const newItem = create(action.payload);
            return { ...prevState, items: [...prevState.items, newItem] };

        case ActionsType.UPDATE:
            const updatedItem = update(action.payload);
            return { ...prevState, items: [...prevState.items, updatedItem] };

        case ActionsType.DELETE:
            remove(action.payload);
            const itemsWithoutRemoved = prevState.items.filter((value) => value.id != action.payload.id);
            return { ...prevState, items: itemsWithoutRemoved };

        case ActionsType.DETAILS:
            const detailedItem = detail(action.payload);
            return { ...prevState, item: detailedItem };

        case ActionsType.LIST_ALL:
            const allItems = getAll();
            return { ...prevState, items: allItems };

        default:
            return prevState;
    }
}

function create(item : TPayloadCreateLivro): Livro {
    return {} as Livro;
}

function update(item : TPayloadUpdateLivro): Livro {
    return {} as Livro;
}

function remove(item : TPayloadDeleteLivro) {
}

function detail(item : TPayloadDetailsLivro): Livro {
    return {} as Livro;
}

function getAll(): Livro[] {
    return [];
}

export {
    initialState,
    reducer,
}