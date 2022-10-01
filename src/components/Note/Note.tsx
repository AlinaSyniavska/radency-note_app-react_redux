import {FC, useEffect, useState} from "react";

import {INote} from "../../interfaces";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileZipper, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {helper} from "../../helpers";
import {useAppDispatch} from "../../hooks";
import {noteStatus} from "../../constants";
import {noteActions} from "../../redux";

import "../../index.css";
import {Link} from "react-router-dom";

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

    const archNote = () => {
        if (!isArchived) {
            dispatch(noteActions.zipNote({note}));
        } else {
            dispatch(noteActions.unZipNote({note}));
        }
    }

    const editNote = () => {
        dispatch(noteActions.setNoteForUpdate({note}));
    }

    return (
        <div>
            <div className={"note noteItem"}>
                <div className={"noteName"}>{note.name}</div>
                <div className={"noteCreated"}>{helper.formatDate(note.created)}</div>
                <div className={"noteCategory"}>{note.category}</div>
                <div className={"noteContent"}>{note.content}</div>
                <div className={"noteDates"}>{note.dates.map(i => helper.formatDate(i)).join('; ')}</div>
                <div className={"btnControl"}>
                    {
                        !isArchived &&
                        <Link to={'/create'}>
                            <div className={"btnEdit"} onClick={editNote}>
                                <FontAwesomeIcon icon={faPen} title={'Edit'}/>
                            </div>
                        </Link>
                    }
                    <div className={"btnArch"} onClick={archNote}>
                        <FontAwesomeIcon icon={faFileZipper} title={'Archive/Unzip'}/>
                    </div>
                    {
                        !isArchived &&
                        <div className={"btnTrash"} onClick={() => dispatch(noteActions.deleteNote({note}))}>
                            <FontAwesomeIcon icon={faTrash} title={'Delete'}/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export {Note};