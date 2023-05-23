import { useLocation } from 'react-router-dom';
import { Description } from '../../models/Description';
import DentalHistory from "./DentalHistory";
import {PatientData, PatientInformation} from "./PatientDetails.styles";
import './DentalHistory.css'

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
                    <p className='patientInfo'>Imię: {patient.firstName}</p>
                    <p className='patientInfo'>Nazwisko: {patient.lastName}</p>
                    <p className='patientInfo'>PESEL: {patient.pesel}</p>
                    <p className='patientInfo'>Data urodzenia: {patient.birthDate}</p>
                    <p className='patientInfo'>Numer telefonu: {patient.phoneNumber}</p>

                </PatientInformation>

                <DentalHistory patient={patient} />
            </PatientData>

    )
}
export default PatientDetails;