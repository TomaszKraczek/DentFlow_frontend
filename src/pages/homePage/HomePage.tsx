import {
    BorderContainer,
    ContactForm,
    ContactHero,
    ContactInputs,
    HomeButton1,
    HomeContainer,
    HomeHeader,
    HomeLink,
    Links,
    Logo,
    TextArea,
    H1, H2,
    HomeButton2,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
    StyledDatePickerMedium, StyledDatePickerSmall, HomeButton3,

} from "./HomePage.style";

import logo from '../../resources/img/logo.png';
import './HomePage.css'

import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {HomeNav} from "../HomeNav";


const HomePage: React.FC = () => {

    return (
        <HomeContainer>
            <BorderContainer>
                <HomeNav/>
                <div id='homeBody'>
                    <TextArea>
                        <H1>Zaufaj nam!</H1>
                        <H2>Odkryj najlepsze oprogramowanie <br/> do zarządzania gabinetem
                            stomatologicznym</H2>

                        <HomeButton3 marginTop={0}> Dowiedz się więcej </HomeButton3>
                    </TextArea>

                    <ContactForm>
                        <ContactHero>
                            Skontaktuj się!
                        </ContactHero>

                        <ContactInputs id={"inputs"}>
                            <StyledTextFieldMedium label="Imię i nazwisko" size={"medium"}/>
                            <StyledTextFieldSmall label="Imię i nazwisko" size={"small"}/>

                            <StyledTextFieldMedium label="Email" size={"medium"}/>
                            <StyledTextFieldSmall label="Email" size={"small"}/>

                            <StyledTextFieldMedium label="Numer telefonu" size={"medium"}/>
                            <StyledTextFieldSmall label="Numer telefonu" size={"small"}/>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <StyledDatePickerMedium label={'Data'} />
                                <StyledDatePickerSmall label={'Data'} />
                            </LocalizationProvider>

                            <HomeButton2 id={'contact-form-button'}>
                                Wyślij
                            </HomeButton2>
                        </ContactInputs>
                    </ContactForm>
                </div>
            </BorderContainer>
        </HomeContainer>

    )
}

export default HomePage;