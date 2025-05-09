import { Note } from "../../types/note";
import * as ac from "./notes.action.creators";
import { NotesState, notesReducer } from "./notes.reducer";

describe("Given the function notesReducer", () => {
    describe("When it receives the action load ", () => {
        test("The state should be the action payload", () => {
            // Arrange
            const payloadMock = [{ id: "1" } as Note];
            const action = ac.loadNotesActionCreator(payloadMock);
            // {
            //   type: actionTypeNames.load,
            //   payload: payloadMock,
            // }
            // Act
            const result = notesReducer([], action);
            // Assert
            expect(result).toEqual(payloadMock);
        });
    });

    describe("When it receives the action create ", () => {
        test("The state should be the action payload added to the previous state", () => {
            // Arrange
            const payloadMock = { id: "1" } as Note;
            const action = ac.createNoteActionCreator(payloadMock);
            const initialState = [{ id: "2" } as Note];
            // Act
            const result = notesReducer(initialState, action);
            // Assert
            expect(result).toEqual([...initialState, payloadMock]);
        });
    });

    describe("When it receives an INVALID action ", () => {
        test("The state should be the initial state", () => {
            // Arrange
            const initialState = [] as NotesState;
            const action = {
                type: "Invalid action" as "notes@delete",
                payload: "0",
            };
            // Act
            const result = notesReducer(initialState, action);
            //Assert
            expect(result).toEqual(initialState);
        });
    });

    describe("When it receives the action update ", () => {
        test("The state should be the action payload updated in the previous state", () => {
            // Arrange
            const payloadMock = { id: "1", title: "Note" } as Note;
            const action = ac.updateNoteActionCreator(payloadMock);
            const initialState = [
                { id: "1", title: "Updated Note" } as Note,
                { id: "2" } as Note,
            ];
            // Act
            const result = notesReducer(initialState, action);
            // Assert
            expect(result[0]).toEqual(payloadMock);
        });
    });

    describe("When it receives the action delete ", () => {
        test("The state should be the previous state without the action payload", () => {
            // Arrange
            const payloadMock = "1";
            const action = ac.deleteNoteActionCreator(payloadMock);
            const initialState = [{ id: "1" } as Note, { id: "2" } as Note];
            // Act
            const result = notesReducer(initialState, action);
            // Assert
            expect(result).toEqual([initialState[1]]);
        });
    });
});
