import {Tooth} from "../../models/Tooth";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {VirtualizedList} from "../calendar/dayCalendar/ToothNoteList";
import {PatientHistoryList} from "./PatientHistoryList";
import {useCallback, useContext, useEffect} from "react";
import {PatientApi} from "../../api/PatientApi";
import {toast} from "react-toastify";
import {ClinicContext} from "../../context/ClinicContext";


interface DentalHistoryProps{
    teeth: Tooth[];
}

const DentalHistory: React.FC<DentalHistoryProps> = ({ teeth }) => {
    const sortedTeeth = [...teeth].sort((a, b) => a.number - b.number);
    return (

        <div>
            {sortedTeeth.map(tooth => (
                <div style={{height:"min-content"}} key={tooth.number}>
                    {tooth.descriptions.length > 0 && <h3>Ząb {tooth.number}</h3>}
                    {tooth.descriptions.length > 0 && (
                        <PatientHistoryList descriptions={tooth.descriptions}  />
                    )}
                </div>
            ))}
        </div>
    );
};
export default DentalHistory;