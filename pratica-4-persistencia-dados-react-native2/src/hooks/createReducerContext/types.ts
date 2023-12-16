import { ReactNode } from "react";

type TFunctionReducer<S, A> = (prevState: IStateProps<S>, action: A) => IStateProps<S>;

interface IStateProps<S> {
    items: S[];
    item: S | undefined;
    hasError: boolean;
    message: string;
};

interface IReducerContextProps<S, A> {
    state: IStateProps<S>;
    dispatch: React.Dispatch<A>;
};

type TReducerProviderProps = {
    children: ReactNode
}

type TReducerProps<S, A> = {    
    reducer: TFunctionReducer<S, A>,
    initialState: IStateProps<S>,
}

export {
    TFunctionReducer,
    IStateProps,
    TReducerProps,
    TReducerProviderProps,
    IReducerContextProps
}