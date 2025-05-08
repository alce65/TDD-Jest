export type Note = {
    id: string;
    title: string;
    content: string;
    isImportant: boolean;
};

export type DTONote = Omit<Note, "id">;