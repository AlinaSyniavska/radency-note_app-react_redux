import {FC} from "react";
import {useAppSelector} from "../../hooks";
import style from "../Notes/Notes.module.css";
import {Note} from "../Note/Note";
import {noteStatus} from "../../constants";

const ArchNotes: FC = () => {
    const {notes} = useAppSelector(state => state.noteReducer);

    return (
        <div>
            <div className={style.wrap}>
                <div className={style.archNotesContainer}>
                    {
                        notes
                            .filter(note => note.noteStatus === noteStatus.ARCHIVED)
                            .map(note => <Note key={note.id} note={note} type={noteStatus.ARCHIVED}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {ArchNotes};