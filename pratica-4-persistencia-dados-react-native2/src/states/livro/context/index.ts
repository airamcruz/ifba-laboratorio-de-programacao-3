import { Livro } from "src/entities/livro.model"
import { createReducerContext } from "../../../hooks/createReducerContext";
import { reducer, initialState } from "../reducer";
import { TActionsLivro } from "../reducer/actions";

const [LivroProvider, useLivroContext] = createReducerContext<Livro, TActionsLivro>({
    reducer,
    initialState
});

export {
    LivroProvider,
    useLivroContext
}