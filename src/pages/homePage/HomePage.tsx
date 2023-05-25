import emailjs from 'emailjs-com';

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
import React, {useEffect, useState, useRef, forwardRef} from "react";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {HomeNav} from "../HomeNav";
import {toast} from "react-toastify";


const HomePage: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(form.current) {
            console.log(form)
            emailjs.sendForm(
                'service_ov5ok5n',
                'template_h0n2kvd',
                form.current,
                'llomuTlqWtnrTfYaL')
                .then((result) => {
                    console.log(result.text);
                    toast.success('Wiadomość wysłana. Dziękujemy', {position: toast.POSITION.TOP_RIGHT})
                    if(form.current) {
                        form.current.reset();
                    }
                }, (error) => {
                    console.log(error.text);
                    toast.error('Błąd podczas wysłania formularza.',{position: toast.POSITION.TOP_RIGHT})
                });

        }
    };

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
                    <ContactForm ref={form} onSubmit={sendEmail}>
                        <ContactHero>
                            Skontaktuj się!
                        </ContactHero>

                        <ContactInputs id={"inputs"}>
                            <StyledTextFieldMedium name="name" label="Imię i Nazwisko" size={"medium"}/>
                            <StyledTextFieldSmall name="name" label="Nazwa" size={"small"}/>

                            <StyledTextFieldMedium name="email" label="Email" size={"medium"}/>
                            <StyledTextFieldSmall name="email" label="Email" size={"small"}/>

                            <StyledTextFieldMedium name="phone" label="Telefon" size={"medium"}/>
                            <StyledTextFieldSmall name="phone" label="Telefon" size={"small"}/>

                            <StyledTextFieldMedium name="date" label="DD/MM/YYYY" size={"medium"}/>
                            <StyledTextFieldSmall name="date" label="DD/MM/YYYY" size={"small"}/>

                            {/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
                            {/*    <StyledDatePickerMedium className='data' label={'Data'} />*/}
                            {/*    <StyledDatePickerSmall className='data' label={'Data'} />*/}
                            {/*</LocalizationProvider>*/}

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
