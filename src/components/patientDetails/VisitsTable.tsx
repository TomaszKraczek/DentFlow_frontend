import * as React from 'react';
import {useCallback, useContext, useEffect, useState} from "react";
import {ClinicContext} from "../../context/ClinicContext";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Box, IconButton, TableCell, TableContainer, TableFooter, TableRow, useTheme} from '@mui/material';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import {PatientApi} from "../../api/PatientApi";
import {toast} from "react-toastify";
import {VisitResponse} from "../../models/api/VisitResponse";
import dayjs from 'dayjs';
import {Container, ModalContent, PatientCard, PatientDetailsButton} from './PatientDetails.styles';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalOverlay,

} from "../profile/Profile.styles";
import {Tooth} from "../../models/Tooth";
import DentalHistory from './DentalHistory';



interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const {count, page, rowsPerPage, onPageChange} = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{flexShrink: 0, ml: 2.5}}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </Box>
    );
}
export interface Patient {
    patientId: number;
    firstName: string;
    lastName: string;
    teeth: Tooth[];
}

interface DentalHistoryProps{
    patient: Patient;
}
export const VisitsTable: React.FC<DentalHistoryProps> = ( { patient }) =>{
    const[visits , setVisits]=useState<VisitResponse[]>([])
    const[teeth , setTeeth]=useState<Tooth[]>([])
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {currentClinic} = useContext(ClinicContext)

    const getParientVisits = useCallback(async () => {
        try {
            if (currentClinic){
                const result = await PatientApi.getPatientVisits({
                    clinicId: currentClinic?.id as 0,
                    patientId: patient.patientId,
                })
                setVisits(result.data.sort((a, b) => b.id - a.id))
            }
        }catch (error){
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    },[currentClinic?.id])

    useEffect(()=>{
        getParientVisits()
    },[getParientVisits])

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - visits.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const showTeeth = (visitDate: string) => {
        setShowModal(true)
        setTeeth(filterTeethByDateTime(patient.teeth, dayjs(visitDate).format("YYYY-MM-DD")))
    }
    const filterTeethByDateTime = (teeth: Tooth[], dateTime: string): Tooth[] => {
        return teeth.filter(tooth => tooth.descriptions.some(description => dayjs(description.dateTime).format("YYYY-MM-DD") === dateTime));
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <strong>Data Wizyty</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Nazwisko Lekarza</strong>
                            </TableCell>
                            <TableCell>
                                <strong>Typ</strong>
                            </TableCell>
                            <TableCell style={{ textAlign:"center"}}>
                                <strong>Opis Lekarza</strong>
                            </TableCell>
                            <TableCell style={{ textAlign:"center"}}>
                                <strong>Opis Recepcjonistki</strong>
                            </TableCell>
                            <TableCell >
                                <strong>Podgląd Zębów</strong>
                            </TableCell>
                        </TableRow>
                        {(rowsPerPage > 0
                                ? visits.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : visits
                        ).map((visit) => (
                            <TableRow key={visit.id}>
                                <TableCell style={{ width: "10%"}}>
                                    {dayjs(visit.visitDate).format("DD MM YYYY")}
                                </TableCell>
                                <TableCell style={{ width: "10%"}} >
                                    {visit.doctor.firstName} {visit.doctor.lastName}
                                </TableCell>
                                <TableCell style={{ width: "10%" }}>
                                    {visit.type === "CONTROL" ? "Kontrolna" : visit.type === "TREATMENT" ? "Zabieg" : visit.type === "OTHER" ? "Inna" : ""}
                                </TableCell>
                                <TableCell style={{ width: "30%",marginLeft:"5%" }}>
                                    {visit.doctorDescription}
                                </TableCell>
                                <TableCell style={{ width: "25%",marginLeft:"5%" }} >
                                    {visit.receptionistDescription}
                                </TableCell>
                                <TableCell style={{ width: "5%" }}>
                                    <PatientDetailsButton onClick={()=>{showTeeth(visit.visitDate)}}>Pokaż</PatientDetailsButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={visits.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            {showModal && (
                <Modal>
                    <ModalOverlay/>
                    <ModalContent>
                        <ModalBody>
                            <PatientCard>
                                <DentalHistory teeth={teeth} />
                            </PatientCard>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={closeModal}>
                                Zamknij
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
}