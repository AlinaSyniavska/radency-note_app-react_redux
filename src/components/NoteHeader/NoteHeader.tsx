import {FC} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileZipper, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

import style from './NoteHeader.module.css';

const NoteHeader: FC = () => {
    return (
        <div>
            <div className={`${style.note} ${style.noteHeader}`}>
                <div className={style.noteName}>Name</div>
                <div className={style.noteCreated}>Created</div>
                <div className={style.noteCategory}>Category</div>
                <div className={style.noteContent}>Content</div>
                <div className={style.noteDates}>Dates</div>
                <div className={style.btnControl}>
                    <div className={style.btnEdit}>
                        {/*<i className="fa-solid fa-pen"></i>*/}
                        <FontAwesomeIcon icon={faPen}  color={'dark'} />
                    </div>
                    <div className={style.btnArch}>
                        {/*<i className="fa-solid fa-file-zipper"></i>*/}
                        <FontAwesomeIcon icon={faFileZipper}  color={'dark'} />
                    </div>
                    <div className={style.btnTrash}>
                        {/*<i className="fa-solid fa-trash"></i>*/}
                        <FontAwesomeIcon icon={faTrash}  color={'dark'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export {NoteHeader};