import { useContext } from "react";
import { ModalContext } from "./modalProvider";

function useModalContext(componente: string) {
    const context = useContext(ModalContext);

    if(context === undefined) {
        throw new Error(`O componente ${componente} não esta dentro do contexto.`)
    }

    return context;
}

export {
    useModalContext
}