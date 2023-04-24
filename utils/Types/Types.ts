import React from "react"

export type TGeneral = {
    className : string,
    children? : React.ReactNode
}
export type TEventListener = {
    clickEvent? : (event : React.MouseEvent<HTMLElement>) => void,
    changeEvent? : (event : React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void,
    submitEvent? : (event : React.FormEvent<HTMLFormElement>) => void
}
export type TInput = TGeneral & TEventListener & {
    inputType : string,
    inputName : string,
    inputID : string,
}