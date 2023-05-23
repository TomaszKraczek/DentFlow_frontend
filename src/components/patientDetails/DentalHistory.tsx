import {Tooth} from "../../models/Tooth";

interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    teeth: Tooth[];
}


interface DentalHistoryProps{
    patient: Patient;
}

const DentalHistory: React.FC<DentalHistoryProps> = ({ patient }) => {
    const sortedTeeth = [...patient.teeth].sort((a, b) => a.number - b.number);

    return (
        <div>
            {sortedTeeth.map(tooth => (
                <div key={tooth.number}>
                    {tooth.descriptions.length > 0 && <h3>Ząb {tooth.number}</h3>}
                    {tooth.descriptions.length > 0 && (
                        <ul>
                            {tooth.descriptions
                                .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime())
                                .map(record => (
                                    <li key={record.id}>
                                        <p>Data wpisu: {record.dateTime}</p>
                                        <p>Treść: <br/>{record.description}</p>
                                        <p>Lekarz: {record.doctorName}</p>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};
export default DentalHistory;