import { useLocation } from 'react-router-dom';
import React, {useContext, useEffect, useState} from "react";
import {ClinicContext} from "../../context/ClinicContext";
import {PatientApi} from "../../api/PatientApi";
import {ToothDescriptionHistory, ToothText} from "../calendar/dayCalendar/DayCalendar.styles";
import {VirtualizedList} from "../calendar/dayCalendar/ToothNoteList";
import { Description } from '../../models/Description';
import {Tooth} from "../../models/Tooth";
export type ToothNote = {description: string,
    teethNumber: number
}
function PatientDetails() {
    const location = useLocation();
    const {patient} = location.state;
    const {currentClinic} = useContext(ClinicContext);
    const [patientInfo, setPatientInfo] = useState();

    const allNotes: ToothNote[] = [];
    patient.teeth.forEach((tooth: Tooth) => {
        tooth.descriptions.forEach((note: Description) => {
            const toothNote: ToothNote = {
                description: note.description,
                teethNumber: tooth.number,
            };
            allNotes.push(toothNote);
        });
    });

    useEffect(() => {
        PatientApi.getVisitInfo({
            patientId: patient.patientId,
            clinicId: currentClinic?.id
        })
        console.log(patient)
        console.log(allNotes)
    }, [patient.patientId, currentClinic?.id])


    return (
        <div>
            <h2>Informacje o pacjencie:</h2>
            <p>Imię: {patient.firstName}</p>
            <p>Nazwisko: {patient.lastName}</p>
            <p>Email: {patient.email}</p>
            <p>Klinika: {currentClinic?.name}</p>
            <p>Klinika: {currentClinic?.id}</p>
            <p>{patient.patientId}</p>
            <ToothDescriptionHistory>
                <ToothText>Dokumentacja</ToothText>
                //TODO
                {/*<VirtualizedList toothNote={allNotes.forEach().sort((a, b) => b.id - a.id), }/>*/}
            </ToothDescriptionHistory>
        </div>

    );
}
export default PatientDetails;