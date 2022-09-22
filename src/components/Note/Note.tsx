import {FC, useEffect, useState} from "react";

import {INote} from "../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileZipper, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {helper} from "../../helpers";
import {useAppDispatch} from "../../hooks";
import {noteStatus} from "../../constants";
import {noteActions} from "../../redux";

import style from "./Note.module.css";

interface IProps {
    note: INote,
    type: string,
}

const Note: FC<IProps> = ({note, type}) => {
    const dispatch = useAppDispatch();
    const [isArchived, setIsArchived] = useState(false);

    useEffect(() => {
        if (type === noteStatus.ARCHIVED) {
            setIsArchived(true);
        }
    }, [type])

    const editNote = () => {
        // dispatch(noteActions.updateNote({note}));
    }

    const archNote = () => {
        if (!isArchived) {
            dispatch(noteActions.zipNote({note}));
        } else {
            dispatch(noteActions.unZipNote({note}));
        }
    }

    const dropNote = () => {
        dispatch(noteActions.deleteNote({note}));
    }

    return (
        <div>
            <div className={`${style.note} ${style.noteItem}`}>
                <div className={style.noteName}>{note.name}</div>
                <div className={style.noteCreated}>{helper.formatDate(note.created)}</div>
                <div className={style.noteCategory}>{note.category}</div>
                <div className={style.noteContent}>{note.content}</div>
                <div className={style.noteDates}>{note.dates.map(i => helper.formatDate(i)).join('; ')}</div>
                <div className={style.btnControl}>
                    {
                        !isArchived &&
                        <div className={style.btnEdit} onClick={editNote}>
                            <FontAwesomeIcon icon={faPen}/>
                        </div>
                    }
                    <div className={style.btnArch} onClick={archNote}>
                        <FontAwesomeIcon icon={faFileZipper}/>
                    </div>
                    {
                        !isArchived &&
                        <div className={style.btnTrash} onClick={dropNote}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export {Note};