import {FC} from "react";

import {ArchNotes, Notes, Statistic} from "../../components";

const NotesPage: FC = () => {
    return (
        <div>
            <h2>Active Notes</h2>
            <Notes/>
            <h2>Statistic</h2>
            <Statistic/>
            <h2>Archived Notes</h2>
            <ArchNotes/>
        </div>
    );
};

export {NotesPage};