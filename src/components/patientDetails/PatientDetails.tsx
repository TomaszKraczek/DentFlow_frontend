import { useLocation } from 'react-router-dom';
import { Description } from '../../models/Description';
import DentalHistory from "./DentalHistory";
import {PatientCard, PatientData, PatientInformation} from "./PatientDetails.styles";
import './DentalHistory.css'
import {VirtualizedList} from "../calendar/dayCalendar/ToothNoteList";
import React from "react";

export type ToothNote = {
    teethNumber: number,
    description: Description
}
function PatientDetails() {
    const location = useLocation();
    const {patient} = location.state;

    return (
            <PatientData>
                <PatientInformation>
                    <p className='patientInfo'><strong>Imię:</strong> {patient.firstName}</p>
                    <p className='patientInfo'><strong>Nazwisko:</strong> {patient.lastName}</p>
                    <p className='patientInfo'><strong>PESEL: </strong>{patient.pesel}</p>
                    <p className='patientInfo'><strong>Data urodzenia: </strong>{patient.birthDate}</p>
                    <p className='patientInfo'><strong>Numer telefonu: </strong>{patient.phoneNumber}</p>

                </PatientInformation>
                <PatientCard>
                    <DentalHistory patient={patient} />
                </PatientCard>
            </PatientData>

    )
}
export default PatientDetails;