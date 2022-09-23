import React, {FC, useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {noteValidator} from "../../validators";
import {INote} from "../../interfaces";
import {noteCategory, noteStatus} from "../../constants";
import style from './CreateNoteForm.module.css';
import {useNavigate} from "react-router-dom";
import {noteActions} from "../../redux";
import {helper} from "../../helpers";

const CreateNoteForm: FC = () => {

    const {register, reset, setValue, handleSubmit, formState: {errors}} = useForm<INote>({
        resolver: joiResolver(noteValidator),
        mode: "all"
    });

    const {
        formErrors,
        noteForUpdate,
    } = useAppSelector(state => state.noteReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (noteForUpdate) {
            const {
                name,
                created,
                category,
                content,
                dates,
            } = noteForUpdate;

            setValue('name', name);
            setValue('created', created);
            setValue('category', category);
            setValue('content', content);
            // oldCreateNoteDate = event.data.created;
        }
    }, [noteForUpdate])

    const submitForm = async (note: INote) => {
        try {
            if (!noteForUpdate) {

                const newNote = {
                    id: helper.guid(),
                    name: note.name,
                    created: note.created,
                    category: note.category,
                    content: note.content,
                    dates: [],
                    noteStatus: noteStatus.ACTIVE,
                }

                dispatch(noteActions.createNote({note: newNote}))
            } else {
/*                const {_id} = productForUpdate;
                await dispatch(productActions.updateById({id: _id, product: expandedProduct}));*/
            }

            navigate('/');
            reset();
        } catch (e: any) {
            console.log(e.response.data());
        }
    }

    return (
        <div>
            <h2 className={style.formTitle}>{noteForUpdate ? 'Edit Note' : 'Create New Note'}</h2>

            <form className={style.noteForm} onSubmit={handleSubmit(submitForm)}>
                <label>Note Name
                    <input type={'text'} placeholder={'Enter note title  '} {...register('name')}/>
                </label>
                <div className={style.errorBox}>{errors.name && <span>{errors.name.message}</span>}</div>
                <label>Note Content
                    <input type={'text'} placeholder={'Enter note  '} {...register('content')}/>
                </label>
                <div className={style.errorBox}>{errors.content && <span>{errors.content?.message}</span>}</div>
                <div>Note Category
                    <label>
                        <input type={'radio'} defaultChecked {...register('category')} value={noteCategory.TASK}/>
                        TASK
                    </label>
                    <label>
                        <input type={'radio'} {...register('category')} value={noteCategory.IDEA}/>
                        IDEA
                    </label>
                    <label>
                        <input type={'radio'} {...register('category')} value={noteCategory.RANDOM_THOUGHT}/>
                        RANDOM THOUGHT
                    </label>
                </div>
                <div className={style.errorBox}>{errors.category && <span>{errors.category?.message}</span>}</div>
                <label>Date
                    <input type={'date'} {...register('created')}/>
                </label>
                <div className={style.errorBox}>{errors.created && <span>{errors.created?.message}</span>}</div>
                <div className={style.formBtnContainer}>
                    <button className={style.btnSetNote}>{noteForUpdate ? 'Save Update' : 'Create'}</button>
                </div>

                <div>
                    <div>{formErrors.noteName && <div>Error note title: {formErrors.noteName[0]}</div>}</div>
                    <div>{formErrors.noteContent && <div>Error note content: {formErrors.noteContent[0]}</div>}</div>
                    <div>{formErrors.noteCreateDate && <div>Error date: {formErrors.noteCreateDate[0]}</div>}</div>
                </div>
            </form>
        </div>
    );
};

export {CreateNoteForm};