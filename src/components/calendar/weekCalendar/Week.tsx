import React from "react"
import dayjs from "dayjs";
import { WeekDay } from "./WeekDay";
import { WeekBody } from "./Week.styles";




type Props = {
    week: dayjs.Dayjs[];
    isOpen:boolean;
    changeCalendar:() => void;
    isWeekCalendar:boolean;
};

export  const Week: React.FC<Props> = (props:Props) =>{

    return(
        <WeekBody isOpen={props.isOpen}>
            {props.week.map((day, id) => (
                <>
                    <WeekDay key={`${props.isWeekCalendar}_${Math.floor(Math.random() * (1000 - 1 + 1))}${id}`} column={id+1} isWeekCalendar={props.isWeekCalendar} changeCalendar={props.changeCalendar} day={day}  isDoctor={false} isReceptionist={false}/>
                </>
            ))}
        </WeekBody>
    )
}