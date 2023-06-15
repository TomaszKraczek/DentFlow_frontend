import React, {useContext, useEffect, useState} from 'react';
import { getWeek} from "../../utils/utils";
import {Slidebar} from "./slider/Slidebar";
import { Week } from './weekCalendar/Week';
import {Arrow, CalendarBody, CalendarHeaderBody, BackButton,BackVisitButton, HeaderLabel, HScreen, Toggle} from "./Calendar.styles";
import {CalendarContext} from "../../context/CalendarContext";
import { DayCalendar } from './dayCalendar/DayCalendar';
import {AddVisitModal} from "./addVisit/AddVisitModal";
import {UserContext} from "../../context/UserContext";
import {ClinicAvailability} from "../UserInterface/ClinicAvailability";
import {useParams} from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';


export const Calendar = () => {
    const { clinicId } = useParams();
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // Importuj lokalizację językową
    dayjs.locale('pl'); // Ustawienie języka na polski
    const {currenDate,selectedDate,selectedDateModifier,weekDays,dateModifier,fetchVisits} = useContext(CalendarContext)
    const {currentUser} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    const [isWeekCalendar, setIsWeekCalendar] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const handleModalOpen = () => {
        setShowModal(true);
    };
    const handleModalClose = () => {
        setShowModal(false);
    };
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    function changeCalendar(){
        setIsWeekCalendar(!isWeekCalendar);
    }
    const goToday =() => {
        dateModifier(dayjs(new Date()));
        selectedDateModifier(dayjs(new Date()))
    }
    const nextWeek =() => {
        if(isWeekCalendar){
            dateModifier(currenDate.add(1, 'week'));
        }else {
            dateModifier(selectedDate.add(1, 'days'));
            selectedDateModifier(selectedDate.add(1, 'days'));
        }
    }
    useEffect(()=>{
        fetchVisits();
    },[])
    const prevWeek =() => {
        if(isWeekCalendar) {
            dateModifier(currenDate.subtract(1, 'week'));
        }else {
            dateModifier(selectedDate.subtract(1, 'days'));
            selectedDateModifier(selectedDate.subtract(1, 'days'));
        }
    }
    return (
        <>
           <HScreen>
               <CalendarHeaderBody>
                   <Toggle onClick={toggle}>
                       <DehazeIcon sx={{ fontSize: 50, marginLeft: "50px" }} ></DehazeIcon>
                   </Toggle>
                   {(currentUser?.roles.includes("DOCTOR") ||
                       currentUser?.roles.includes("RECEPTIONIST")) &&
                       <BackVisitButton onClick={handleModalOpen}>Dodaj wizyte</BackVisitButton>}
                   <BackButton onClick={goToday}>
                       Dzisiaj
                   </BackButton>
                   {(currentUser?.roles.includes("DOCTOR") ||
                           currentUser?.roles.includes("RECEPTIONIST")) &&
                       <BackButton onClick={changeCalendar}>{isWeekCalendar ?(<>Dzień</>):(<>Tydzień</>)}</BackButton>}
                   <HeaderLabel>{getWeek(currenDate)[0].format("MMMM YYYY")}</HeaderLabel>
                   <Arrow onClick={prevWeek}>
                       &lt;
                   </Arrow>
                   <Arrow onClick={nextWeek}>
                       &gt;
                   </Arrow>


               </CalendarHeaderBody>
               <CalendarBody >
                   {isOpen &&(
                       <Slidebar />
                   )}
                   {(currentUser?.roles.includes("DOCTOR") || currentUser?.roles.includes("RECEPTIONIST") || !clinicId )?
                       (<>{isWeekCalendar ?(<Week changeCalendar={changeCalendar} isWeekCalendar={isWeekCalendar} isOpen = {isOpen} week = {weekDays}/>)
                           :(<DayCalendar isOpen = {isOpen}/>)
                       }</>):(<ClinicAvailability isOpen = {isOpen}/>)}
               </CalendarBody>
           </HScreen>
            {showModal && (
                <AddVisitModal  handleModalClose={handleModalClose}/>
            )}
    </>
    );
};

