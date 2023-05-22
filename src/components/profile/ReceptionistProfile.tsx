import * as React from 'react';
import {useState, useEffect, useCallback} from "react";
import {UserApi} from "../../api/UserApi";
import {
    LoginForm,
    LoginInputs,
    StyledTextFieldMedium,
    StyledTextFieldSmall,
} from "../login/Login.styles";
import {ProfileUserResponse} from "../../models/api/ProfileUserResponse";
export default function ReceptionistProfile() {
    const [user, setUser] = useState<ProfileUserResponse>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const fetchProfile = useCallback(async () => {
        try {
            const result = await UserApi.getProfileUser();
            const userData = result.data;
            setUser(userData);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setEmail(userData.email);
        } finally {
            // ...
        }
    }, []);

    useEffect(() => {
            fetchProfile();
    }, [fetchProfile, user]);

    const handleChangeFirstName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    return (
        <LoginForm height={20}>
            <LoginInputs>
                <StyledTextFieldMedium
                    disabled
                    label="Imię"
                    size={"medium"}
                    value={firstName}
                    onChange={handleChangeFirstName}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Imię"
                    size={"small"}
                    value={firstName}
                    onChange={handleChangeFirstName}
                />

                <StyledTextFieldMedium
                    disabled
                    label="Nazwisko"
                    size={"medium"}
                    value={lastName}
                    onChange={handleChangeLastName}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Nazwisko"
                    size={"small"}
                    value={lastName}
                    onChange={handleChangeLastName}
                />

                <StyledTextFieldMedium
                    disabled
                    label="Email"
                    size={"medium"}
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Email"
                    size={"small"}
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                />
            </LoginInputs>

        </LoginForm>
    );
}