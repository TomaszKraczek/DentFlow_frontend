import * as React from 'react';
import {ClinicData, ComponentWrapper, Header, TableDiv} from "./Profile.styles";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";
import {UserApi} from "../../api/UserApi";
import {LoginForm, LoginInputs, StyledTextFieldMedium, StyledTextFieldSmall} from "../login/Login.styles";

export default function DataGridDemo() {
    const [ownerEmail, setOwnerEmail] = useState<String>();
    const [clinic, setClinic] = useState<ClinicResponse>();
    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getMyClinic();
            setClinic(result.data);
            const user = await UserApi.getUser();
            setOwnerEmail(user.data.email);
        }
        finally {

        }
    },[])
    useEffect(() => {
        fetchClinic()
    },[fetchClinic]);
    const handleChangeFirstName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    };

    const handleChangeLastName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

    };
    return (
        <LoginForm height={20}>
            <LoginInputs>
                <StyledTextFieldMedium
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Nazwa Kliniki"
                    size={"medium"}
                    defaultValue={clinic?.address}
                    onChange={handleChangeFirstName}
                />
                <StyledTextFieldSmall
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Nazwa Kliniki"
                    size={"small"}
                    defaultValue={clinic?.name}
                    onChange={handleChangeFirstName}
                />

                <StyledTextFieldMedium
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Nazwisko"
                    size={"medium"}
                    defaultValue={clinic?.name}
                    onChange={handleChangeLastName}
                />
                <StyledTextFieldSmall
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Nazwisko"
                    size={"small"}
                    defaultValue={clinic?.name}
                    onChange={()=>{}}
                />

                <StyledTextFieldMedium
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Email"
                    size={"medium"}
                    type="email"
                    defaultValue={clinic?.name}
                    onChange={handleChangeEmail}
                />
                <StyledTextFieldSmall
                    InputProps={{
                        readOnly: true,
                    }}
                    label="Email"
                    size={"small"}
                    type="email"
                    defaultValue={clinic?.name}
                    onChange={handleChangeEmail}
                />
            </LoginInputs>

        </LoginForm>
    );
}
