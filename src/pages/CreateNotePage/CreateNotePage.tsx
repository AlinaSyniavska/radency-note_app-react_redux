import {FC} from "react";

import {CreateNoteForm} from "../../components";
import {Link} from "react-router-dom";

const CreateNotePage: FC = () => {

    return (
        <div>
            <Link to={'/'}>Back</Link>
            <CreateNoteForm/>
        </div>
    );
};

export {CreateNotePage};