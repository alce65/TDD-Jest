export type Note = {
    id: number;
    title: string;
    description: string;
    isImportant: boolean;
};

export type DTONote = Omit<Note, 'id'>;
