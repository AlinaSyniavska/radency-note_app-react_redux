import {FC} from "react";

import {CreateNoteForm} from "../../components";
import {Link} from "react-router-dom";

const CreateNotePage: FC = () => {
    return (
        <div>
            <Link to={'/'}>To Main</Link>
            <CreateNoteForm/>
        </div>
    );
};

export {CreateNotePage};