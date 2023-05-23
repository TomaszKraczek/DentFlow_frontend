import React, { useCallback, useContext, useEffect, useState} from "react"
import {Informacions, RecepcionistVisitInformationContainet} from "./RecepcionistVisitInformation.styles"
import {Description, DescriptionRow} from "./DayCalendar.styles";
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
                    <Informacions>
                        Pacjent:
                        imie:{currentVisit?.patient.firstName}
                        nazwisko:{currentVisit?.patient.lastName}
                        nazwisko:{currentVisit?.patient.pesel}
                        nazwisko:{currentVisit?.patient.birthDate}
                    </Informacions>
                    <DescriptionRow>
                        <Description value={description} onChange={safeVisitDescription}/>
                        <Button onClick={handleSubmit}>Zapisz Notatke</Button>
                    </DescriptionRow>
                    <Button onClick={deleteVisit}>Usuń wizyte</Button>
                </RecepcionistVisitInformationContainet>
            ):(<></>)}
        </>
    )
}