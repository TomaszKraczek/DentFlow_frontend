import * as React from 'react';
import {
    ProfileDiv,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    ProfilePicture, UserName, Button, TextFieldModal, ChangeButton
} from "./Profile.styles";
import img from "../../resources/img/profile.png";
import {useCallback, useContext, useEffect, useState} from "react";
import {UserApi} from "../../api/UserApi";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";
import {toast} from "react-toastify";
import { CardActions } from '@mui/material';
import {AuthApi} from "../../api/AuthApi";
import {
    Loader
} from "../login/Login.styles";
import {UserContext} from "../../context/UserContext";
import {ClinicApi} from "../../api/ClinicApi";

export default function MultiActionAreaCard() {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState<ProfileUserResponse>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const {currentUser} = useContext(UserContext);
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false);
    };

    const fetchProfileUser = useCallback(async () => {
        try {
            const result = await UserApi.getProfileUser();
            setUser(result.data)
            setFirstName(result.data.firstName)
            setLastName(result.data.lastName)
            setEmail(result.data.email)
        } catch(error) {
            console.error(error);
        }
    }, [])

    useEffect(() => {
        if (!user) {
            fetchProfileUser()
        }
    }, [fetchProfileUser,user]);

    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getMyClinic();
            setAddress(result.data.address);
            setPhoneNumber(result.data.phoneNumber);

        }
        finally {
        }
    },[])
    useEffect(() => {
        fetchClinic()
    },[fetchClinic]);
    const changeLastname = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const changeFirstname = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const changePhoneNumber = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setPhoneNumber(event.target.value)
    }
    const changeClinicAddress = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setAddress(event.target.value)
    }
    const onResetClicked = useCallback(async () => {
        try {
            setIsLoading(true);
            await AuthApi.SendResetEmailEmail();
            toast.success("Wysłano wiadomośc do zmiany maila Sprawdz skrzynke pocztową");
        } catch (error: any) {
            toast.error("Wystąpił błąd podczas połączenia z serwerem.", {
                position: toast.POSITION.TOP_RIGHT,
            })
        } finally {
            setIsLoading(false);
        }

    }, []);

    const handleUserModalSubmit = async () => {
            try {
                const updatedUser = await UserApi.updateUser({
                    firstName: firstName,
                    lastName: lastName
                });
                setUser(updatedUser.data);
                toast.success("Zaktualizowano profil");
                closeModal();
            } catch (error) {
                toast.error("Nie udało się zaktualizować profilu");
            }

    };
    const handleClinicModalSubmit = async () => {
        try {
            await ClinicApi.updateClinic({
                address: address,
                phoneNumber: phoneNumber
            });
            const updatedUser = await UserApi.updateUser({
                firstName: firstName,
                lastName: lastName
            });
            setUser(updatedUser.data);
            toast.success("Zaktualizowano profil");
            closeModal();
        } catch (error) {
            toast.error("Nie udało się zaktualizować profilu");
        }

    };

        return (
            <>
                {isLoading ? (
                    <Loader ></Loader>
                ):(
                    <ProfileDiv>
                        <ProfilePicture src={img} />
                        <UserName>{firstName} {lastName}</UserName>
                        <Button onClick={openModal}>
                            Edytuj Profil
                        </Button>
                        {currentUser?.roles.includes("OWNER")&&<CardActions>
                            {showModal && (
                                <Modal>
                                    <ModalOverlay/>
                                    <ModalContent>
                                        <UserName>Edytuj Profil</UserName>
                                        <ModalBody>
                                            <TextFieldModal
                                                required
                                                id="firstName"
                                                label="Imię"
                                                defaultValue={firstName}
                                                onChange={changeFirstname}/>
                                            <TextFieldModal
                                                required
                                                id="lastName"
                                                label="Nazwisko"
                                                defaultValue={lastName}
                                                onChange={changeLastname}/>
                                            <TextFieldModal
                                                required
                                                id="phoneNumber"
                                                label="Numer Telefonu"
                                                defaultValue={phoneNumber}
                                                onChange={changePhoneNumber}/>
                                            <TextFieldModal
                                                required
                                                id="address"
                                                label="Adres"
                                                defaultValue={address}
                                                onChange={changeClinicAddress}/>
                                            <TextFieldModal
                                                defaultValue={email}
                                                type='email' disabled/>
                                            <ChangeButton onClick={onResetClicked}>zmień maila</ChangeButton>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={closeModal}>
                                                Anuluj
                                            </Button>
                                            <Button onClick={handleClinicModalSubmit}>
                                                Zapisz
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            )}
                        </CardActions>}

                        {!currentUser?.roles.includes("OWNER") && <CardActions>
                            {showModal && (
                                <Modal>
                                    <ModalOverlay/>
                                    <ModalContent>
                                        <UserName>Edytuj Profil</UserName>
                                        <ModalBody>
                                            <TextFieldModal
                                                required
                                                id="firstName"
                                                label="Imię"
                                                defaultValue={firstName}
                                                onChange={changeFirstname}/>
                                            <TextFieldModal
                                                required
                                                id="lastName"
                                                label="Nazwisko"
                                                defaultValue={lastName}
                                                onChange={changeLastname}/>
                                            <TextFieldModal
                                                defaultValue={email}
                                                type='email' disabled/>
                                            <ChangeButton onClick={onResetClicked}>zmień maila</ChangeButton>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={closeModal}>
                                                Anuluj
                                            </Button>
                                            <Button onClick={handleUserModalSubmit}>
                                                Zapisz
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            )}
                        </CardActions>}

                    </ProfileDiv>
                )}
            </>
        );
    }

