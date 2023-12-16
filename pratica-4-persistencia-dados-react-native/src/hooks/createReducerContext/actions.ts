enum ActionsType {
    CREATE,
    UPDATE,
    DELETE,
    DETAILS,
    LIST_ALL,
    ERROR,
    INPUT_FIELD,
}

type TPayloadInputField= {
    field: string,
    value: any,
}

type TActionInputField = {
    type: ActionsType.INPUT_FIELD,
    payload: TPayloadInputField,
}

type TPayloadError = {
    message: string,
}

type TActionError = {
    type: ActionsType.INPUT_FIELD,
    payload: TPayloadError,
}

export {
    ActionsType,

    TActionInputField,
    TPayloadInputField,

    TActionError,
    TPayloadError,
}