import React, {useEffect, useState} from 'react';
import {Line} from "../calendar/weekCalendar/Week.styles";
import {getTimeRemaining} from "../../utils/utils";

export const Timer: React.FC = () => {
    const [time,setTime]=useState<number>(-getTimeRemaining());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(-getTimeRemaining())
        }, 60000);

        return () => {
            clearInterval(interval); // Zatrzymaj interwał przy oczyszczaniu komponentu
        };
    }, []);

    return (<Line time={time}></Line>);
};