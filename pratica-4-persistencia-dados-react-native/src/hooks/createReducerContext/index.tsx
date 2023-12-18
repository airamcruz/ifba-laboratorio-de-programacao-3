import { ReactNode, createContext, useContext, useReducer } from "react";
import { IReducerContextProps, TReducerProps, TReducerProviderProps } from "./types";

// export function createReducerContext<S, A>(props: TReducerProps<S, A>)
//     : [(props: TReducerProviderProps) => ReactNode, (componente: string) => IReducerContextProps<S, A>] {

//     const { reducer, initialState } = props;

//     const ReducerContext = createContext<IReducerContextProps<S, A>>({} as IReducerContextProps<S, A>);

//     const UseContext = (componente: string) => {
//         const context = useContext(ReducerContext);

//         if (context === undefined) {
//             throw new Error(`O componente ${componente} não esta dentro do contexto.`)
//         }

//         return context;
//     }

//     const ReducerProvider = (props: TReducerProviderProps) => {

//         const [state, dispatch] = useReducer(reducer, initialState);

//         const contextValue = { state, dispatch };

//         return (
//             <ReducerContext.Provider value={contextValue}>
//                 {props.children}
//             </ReducerContext.Provider>
//         );
//     }

//     return [ReducerProvider, UseContext]
// }

const Contexto = <S, A>() => createContext<IReducerContextProps<S, A>>({} as IReducerContextProps<S, A>); 

const useReducerContext = <S, A>(componente: string) => {
    
    const context = useContext(Contexto<S,A>());

    if (context === undefined) {
        throw new Error(`O componente ${componente} não esta dentro do contexto.`)
    }

    return {state: context.state, dispatch:context.dispatch};
}

const createReducerContext =  <S, A>(props: TReducerProps<S, A>) => { 

     const { reducer, initialState } = props;  

    const ReducerProvider = (props: TReducerProviderProps) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        const contextValue = { state, dispatch };

        const ContextoAtual = Contexto<S, A>();

        return (
            <ContextoAtual.Provider value={contextValue}>
                {props.children}
            </ContextoAtual.Provider>
        );
    }

    return [ReducerProvider]
}

export {
    useReducerContext,
    createReducerContext
}