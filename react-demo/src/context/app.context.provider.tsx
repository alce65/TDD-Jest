import { ReactNode } from "react";
import { AppContext, AppContextStructure } from "./app.context";
import { useNotes } from "../hooks/use.notes";

type Props = {
    children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
    const context: AppContextStructure = {
        notesContext: useNotes(),
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}
