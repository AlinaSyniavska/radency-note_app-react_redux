import {FC} from "react";

import {useAppSelector} from "../../hooks";
import {NoteHeader} from "../NoteHeader/NoteHeader";
import {Note} from "../Note/Note";
import style from './Notes.module.css';
import {noteStatus} from "../../constants";

const Notes: FC = () => {
    const {notes} = useAppSelector(state => state.noteReducer);

    return (
        <div>
            <div className={style.wrap}>
                <div className={style.notesContainer}>
                    <NoteHeader/>
                    {
                        notes
                            .filter(note => note.noteStatus === noteStatus.ACTIVE)
                            .map(note => <Note key={note.id} note={note} type={noteStatus.ACTIVE}/>)
                    }
                </div>

                <button className={style.btnCreateNote}>Create Note</button>
            </div>
        </div>
    );
};

export {Notes};