import { createContext } from "react";
import { useNotes } from "../hooks/use.notes";


export type AppContextStructure = {
    notesContext: ReturnType<typeof useNotes>;
};

export const AppContext = createContext<AppContextStructure>(
    {} as AppContextStructure
);
