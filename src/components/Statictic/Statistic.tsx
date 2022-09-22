import {FC, useEffect, useState} from "react";

import {StatisticHeader} from "../StatisticHeader/StatisticHeader";
import {noteCategory} from "../../constants";
import {StatisticRecord} from "../StatisticRecord/StatisticRecord";
import style from '../Notes/Notes.module.css';

const Statistic: FC = () => {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        for (const [, value] of Object.entries(noteCategory)){
            setCategories(prevState => [...prevState, value]);
        }
    }, [])

    return (
        <div>
            <div className={style.wrap}>
                <div className={style.statisticContainer}>
                    <StatisticHeader/>
                    {
                        categories
                            .map((category, index) => <StatisticRecord key={index} category={category}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export {Statistic};