import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {NoteHeader} from "../NoteHeader/NoteHeader";
import {Note} from "../Note/Note";
import style from './Notes.module.css';
import {noteStatus} from "../../constants";
import {Link} from "react-router-dom";
import {noteActions} from "../../redux";

const Notes: FC = () => {
    const {notes} = useAppSelector(state => state.noteReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(noteActions.cleaningUpdateNote());
    }, [])

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

                <Link to={'create'}>
                    <button className={style.btnCreateNote}>Create Note</button>
                </Link>
            </div>
        </div>
    );
};

export {Notes};