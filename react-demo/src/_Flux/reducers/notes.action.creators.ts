// Action = objeto
// Propiedad type -> obligatoria
// Propiedad payload (data) -> opcional

import { Note } from "../../types/note";
import { actionTypeNames } from "./notes.action.names";

// Sin narrowing
// type Keys = keyof typeof actionTypeNames;
// export type NoteAction = {
//   type: (typeof actionTypeNames)[Keys];
//   payload: Note[] | Note | number;
// };

export type NoteActionAll = {
    type: "notes@load";
    payload: Note[];
};

export type NoteActionOne = {
    type: "notes@create" | "notes@update";
    payload: Note;
};

export type NoteActionId = {
    type: "notes@delete";
    payload: string;
};

export type NoteAction = NoteActionAll | NoteActionOne | NoteActionId;

// CRUD

export const loadNotesActionCreator = (data: Note[]): NoteAction => {
    return {
        type: actionTypeNames.load,
        payload: data,
    };
};

export const createNoteActionCreator = (data: Note): NoteAction => {
    return {
        type: actionTypeNames.create,
        payload: data,
    };
};

export const updateNoteActionCreator = (data: Note): NoteAction => {
    return {
        type: actionTypeNames.update,
        payload: data,
    };
};

export const deleteNoteActionCreator = (data: Note["id"]): NoteAction => {
    return {
        type: actionTypeNames.delete,
        payload: data,
    };
};
