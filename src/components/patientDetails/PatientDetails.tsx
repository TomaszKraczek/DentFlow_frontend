import { useLocation } from 'react-router-dom';
import { Description } from '../../models/Description';
import DentalHistory from "./DentalHistory";
import {PatientCard, PatientData, PatientInformation} from "./PatientDetails.styles";
import './DentalHistory.css'
import React, {useCallback, useContext, useState} from "react";
import {Button} from "../profile/Profile.styles";
import {toast} from "react-toastify";
import {Input} from "@mui/material";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {PatientApi} from "../../api/PatientApi";
import {ClinicContext} from "../../context/ClinicContext";

export type ToothNote = {
    teethNumber: number,
    description: Description
}
function PatientDetails() {
    const location = useLocation();
    const {patient} = location.state;
    const [edit,setEdit] = useState<boolean>(false);
    const [firstName,setFirstName] = useState<string>(patient.firstName);
    const [lastName,setLastName] = useState<string>(patient.lastName);
    const [pesel,setPesel] = useState<string>(patient.pesel);
    const [birthDate,setBirthDate] = useState<dayjs.Dayjs>(dayjs(patient.birthDate));
    const [phoneNumber,setPhoneNumber] = useState<string>(patient.phoneNumber);
    const [email,setEmail] = useState<string>(patient.email);
    const {currentClinic} = useContext(ClinicContext)
    const ariaLabel = { 'aria-label': 'description' };

    const editPatientData = useCallback(async () => {
        setEdit(!edit)
        if (edit){
            try {
                await PatientApi.updatePatientData({
                    clinicId: currentClinic?.id as 0,
                    patientId: patient.patientId,
                    firstName: firstName,
                    lastName: lastName,
                    pesel: pesel,
                    birthDate: birthDate?.format("DD-MM-YYYY"),
                    email: email,
                    phoneNumber: phoneNumber
                })
                toast.success("Zaktualizowano Dane Pacjenta");
            }catch (error){
                toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        }
    },[patient.patientId,birthDate, edit, firstName, lastName, patient, pesel, ,phoneNumber,email])
    const handleBirthdayChange = (date: dayjs.Dayjs | any) => {
        setBirthDate(date)
    }
    return (
            <PatientData>
                <PatientInformation>
                    <p className='patientInfo'><strong>Imię:</strong>{edit ? (<Input defaultValue={firstName} sx={{width:"100px"}} inputProps={ariaLabel} onChange={(event)=>{setFirstName(event.target.value)}} />):(<>{firstName}</>)}</p>
                    <p className='patientInfo'><strong>Nazwisko:</strong> {edit ? (<Input defaultValue={lastName} sx={{width:"100px"}} inputProps={ariaLabel} onChange={(event)=>{setLastName(event.target.value)}} />):(<>{lastName}</>)}</p>
                    <p className='patientInfo'><strong>PESEL: </strong>{edit ? (<Input defaultValue={pesel} sx={{width:"100px"}} inputProps={ariaLabel} onChange={(event)=>{setPesel(event.target.value)}} />):(<>{pesel}</>)}</p>
                    <p className='patientInfo'><strong>Data urodzenia: </strong>{edit ? (<LocalizationProvider dateAdapter={AdapterDayjs}><DatePicker sx={{width:"40%"}}  slotProps={{textField:{size:"small"}}} value={birthDate} format={"DD-MM-YYYY"} onChange={(date) => handleBirthdayChange(date)}/> </LocalizationProvider>):(<>{birthDate?.format("DD-MM-YYYY")}</>)}</p>
                    <p className='patientInfo'><strong>Numer telefonu: </strong>{edit ? (<Input defaultValue={phoneNumber} sx={{width:"100px"}} inputProps={ariaLabel} onChange={(event)=>{setPhoneNumber(event.target.value)}} />):(<>{phoneNumber}</>)}</p>
                    <p className='patientInfo'><strong>email: </strong>{edit ? (<Input defaultValue={email} sx={{width:"150px"}} inputProps={ariaLabel} onChange={(event)=>{setEmail(event.target.value)}} />):(<>{email}</>)}</p>
                    <Button onClick={editPatientData}>
                        {edit ? (<>Zapisz</>):(<>Edytuj Dane</>)}
                    </Button>
                </PatientInformation>
                <PatientCard>
                    <DentalHistory patient={patient} />
                </PatientCard>
            </PatientData>

    )
}
export default PatientDetails;