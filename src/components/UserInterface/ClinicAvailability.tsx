import React, { useContext, useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import {ClinicApi} from "../../api/ClinicApi";
import {EmployeeResponse} from "../../models/api/EmployeeResponse";
import {Div, HeaderLabel, List} from "./ClinicAvailability.styles";

import {TimeRange} from './TimeRange';
import {CalendarContext} from "../../context/CalendarContext";
import {VisitResponse} from "../../models/api/VisitResponse";
import dayjs from "dayjs";
import {ClinicContext} from "../../context/ClinicContext";
import {toast} from "react-toastify";



type Props = {
    isOpen:boolean
};

export const ClinicAvailability: React.FC<Props> = (props:Props) => {
    const { clinicId } = useParams();
    const [doctors, setDoctors] = useState<EmployeeResponse[]>([]);
    const [visits, setVisits] = useState<VisitResponse[]>([]);
    const {selectedDate,currenDate} = useContext(CalendarContext)
    const {currentClinic} = useContext(ClinicContext)
    const fetchDoctors = async () => {
        try {
            const parsedClinicId = clinicId ? parseInt(clinicId) : undefined;
            const result = await ClinicApi.getDoctorsForClinic({
                clinicId: parsedClinicId,
            });
            setDoctors(result.data.sort((a,b) => a.firstName.length-b.firstName.length))
        } catch (error) {
            toast.error("Bład serwera")
        }
    };

    const fetchVisits = async () => {
        try {
            const parsedClinicId = clinicId ? parseInt(clinicId) : undefined;
            const result = await ClinicApi.getVisitsForClinic({
                clinicId: parsedClinicId,
            });
            setVisits( result.data.filter(value => dayjs(value.visitDate).format("YYYY MM dd")===selectedDate.format("YYYY MM dd")))
        } catch (error) {
            toast.error("Bład serwera")
        }
    };


    useEffect(() => {
        fetchDoctors();
        fetchVisits()
    }, [currenDate]);
    return (
        <Div isOpen={props.isOpen} >
            <div>
                <HeaderLabel>{selectedDate.format("MMM DD dddd")}</HeaderLabel>
                <HeaderLabel>Umówić się telefonicznie:<br />{currentClinic?.phoneNumber}</HeaderLabel>
                <HeaderLabel>Godziny dostępności lekarzy</HeaderLabel>
                <>
                    {doctors.map((doctor,id) => (
                        <>
                            <HeaderLabel>{doctor.firstName} {doctor.lastName}</HeaderLabel>
                            <List key={id}>
                                <TimeRange clinicId={clinicId} doctor={doctor}  visits={visits}/>
                            </List>
                        </>
                    ))}
                </>
            </div>
        </Div>
    );
};

