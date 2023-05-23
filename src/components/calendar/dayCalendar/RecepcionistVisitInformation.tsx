import React, { useCallback, useContext, useEffect, useState} from "react"
import {Informations, RecepcionistVisitInformationContainet, DescriptionRowRecepcionist, Description, LabelInfo, ButtonContainer, DeleteButton} from "./RecepcionistVisitInformation.styles"
import {DescriptionRow} from "./DayCalendar.styles";
import {CalendarContext} from "../../../context/CalendarContext";
import {Button} from "../../profile/Profile.styles";
import {VisitApi} from "../../../api/VisitApi";
import {ClinicContext} from "../../../context/ClinicContext";
import {toast} from "react-toastify";




export  const  RecepcionistVisitInformation= () =>{
    const{currentClinic} = useContext(ClinicContext)
    const{currentVisit,fetchVisits} = useContext(CalendarContext)
    const[description,setDescription] = useState<string|undefined>("")
    useEffect(()=>{
        setDescription(currentVisit?.receptionistDescription)
    },[currentVisit])

    function safeVisitDescription(event:React.ChangeEvent<HTMLTextAreaElement>){
       setDescription(event.target.value)
    }
    const handleSubmit = useCallback(async () => {
        try {
            await VisitApi.safeReceptionistDescriptionDescription({
                clinicId:currentClinic?.id,
                visitId:currentVisit?.id,
                receptionistDescription:description
            })
        } catch (error: any) {
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        },[currentClinic?.id,currentVisit?.id,description]);
    const deleteVisit = useCallback(async () => {
        try {
            await VisitApi.deleteVisit({
                clinicId:currentClinic?.id,
                visitId:currentVisit?.id,
            })
            toast.success("Usunieto wizyte");
            fetchVisits()
        } catch (error: any) {
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    },[currentClinic?.id,currentVisit?.id]);
    return(
        <>
        {currentVisit ?(
                <RecepcionistVisitInformationContainet  >
                    <Informations>
                        <LabelInfo>Dane Pacjenta: </LabelInfo>
                        Pacjent: {currentVisit.patient.lastName}   {currentVisit.patient.firstName}<br/>
                        Pesel:{currentVisit.patient.pesel}<br/>
                        Data urodzenia:{currentVisit.patient.birthDate}
                    </Informations>
                    <DescriptionRowRecepcionist>
                        <LabelInfo>Notatka do Wizyty: </LabelInfo>
                        <Description value={description} onChange={safeVisitDescription}/>
                    </DescriptionRowRecepcionist>
                    <ButtonContainer>
                        <Button onClick={handleSubmit}>Zapisz Notatke</Button>
                        <DeleteButton onClick={deleteVisit}>Usuń wizyte</DeleteButton>
                    </ButtonContainer>

                </RecepcionistVisitInformationContainet>
            ):(<></>)}
        </>
    )
}