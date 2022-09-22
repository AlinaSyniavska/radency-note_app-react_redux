import {createSlice} from "@reduxjs/toolkit";

import {INote} from "../../interfaces";
import {helper} from "../../helpers";
import {noteCategory, noteStatus} from "../../constants";

interface IState {
    notes: INote[],
    noteForUpdate: null,
}

const initialState: IState = {
    notes: [
        {
            id: helper.guid(),
            name: 'Shopping List',
            created: '2022, 9, 25',
            category: noteCategory.TASK,
            content: 'Milk, cheese, cakes',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Health Hackathon',
            created: '2022, 9, 29',
            category: noteCategory.RANDOM_THOUGHT,
            content: 'Health Hackathon is an event where you will solve challenges and create new innovative products for health and healthcare!',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'New Travel',
            created: '2022, 10, 1',
            category: noteCategory.IDEA,
            content: 'New Travel',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Dynamic Talks',
            created: '2022, 9, 23',
            category: noteCategory.IDEA,
            content: 'The event will be held in English',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'Books',
            created: '2022, 9, 25',
            category: noteCategory.TASK,
            content: 'JavaScript for impatient programmers',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: ' Webinar “Devops — More than the tools and tech”',
            created: '2022, 10, 10',
            category: noteCategory.TASK,
            content: 'Developers Shore are announcing a webinar — “Devops — More than the tools and tech” with Martin Comstedt',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
        {
            id: helper.guid(),
            name: 'NASA Open APIs',
            created: '2022, 9, 25',
            category: noteCategory.TASK,
            content: 'View NASA Open APIs',
            dates: [],
            noteStatus: noteStatus.ACTIVE,
        },
    ],
    noteForUpdate: null,
};

const noteSlice = createSlice({
    name: 'noteSlice',
    initialState,
    reducers: {
        deleteNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            // state.notes[index].noteStatus = noteStatus.DELETED;
            state.notes.splice(index, 1);
        },

        zipNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            state.notes[index].noteStatus = noteStatus.ARCHIVED;
        },

        unZipNote: (state, action) => {
            const note = action.payload.note;
            const index = state.notes.findIndex(item => item.id === note.id);
            state.notes[index].noteStatus = noteStatus.ACTIVE;
        },
    },

});

const {reducer: noteReducer, actions: {deleteNote, zipNote, unZipNote}} = noteSlice;

const noteActions = {
    deleteNote,
    zipNote,
    unZipNote,
};

export {
    noteActions,
    noteReducer,
}
