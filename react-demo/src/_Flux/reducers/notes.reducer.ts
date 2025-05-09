/* eslint-disable no-case-declarations */
// Reducer función pura
// recibe: un estado + una action
// devuelve: el nuevo estado


import { Note } from '../../types/note';
import { NoteAction } from './notes.action.creators';
import { actionTypeNames } from './notes.action.names';

export type NotesState = Note[];

export function notesReducer(
  state: NotesState,
  action: NoteAction
): NotesState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload;

    case actionTypeNames.create:
      return [...state, action.payload];

    case actionTypeNames.update:
      return state.map((item) =>
        item.id !== action.payload.id ? item : action.payload
      );

    case actionTypeNames.delete:
      return state.filter((item) => item.id !== action.payload);

    default:
      return [...state];
  }
}
