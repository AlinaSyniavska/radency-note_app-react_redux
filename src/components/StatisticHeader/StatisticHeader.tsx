import {FC} from "react";

import style from '../NoteHeader/NoteHeader.module.css';

const StatisticHeader: FC = () => {
    return (
        <div>
            <div className={`${style.note} ${style.noteHeader}`}>
                <div className={style.noteName}>Note Category</div>
                <div className={style.noteContent}>Active</div>
                <div className={style.noteContent}>Archived</div>
            </div>
        </div>
    );
};

export {StatisticHeader};