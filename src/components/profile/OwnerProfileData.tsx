import * as React from 'react';
import {ClinicData, ComponentWrapper, Header, TableDiv} from "./Profile.styles";
import {useState, useEffect, useCallback} from "react";
import { ClinicResponse } from '../../models/api/ClinicResponse';
import {ClinicApi} from "../../api/ClinicApi";
import {UserApi} from "../../api/UserApi";
import {LoginForm, LoginInputs, StyledTextFieldMedium, StyledTextFieldSmall} from "../login/Login.styles";

export default function DataGridDemo() {
    const [clinic, setClinic] = useState<ClinicResponse>();
    const fetchClinic = useCallback(async () => {
        try {
            const result = await ClinicApi.getMyClinic();
            setClinic(result.data);
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
        <LoginForm height={25}>
            <LoginInputs>
                <StyledTextFieldMedium
                    disabled
                    label="Nazwa Kliniki"
                    size={"medium"}
                    value={clinic?.name}
                    onChange={handleChangeFirstName}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Nazwa Kliniki"
                    size={"small"}
                    value={clinic?.name}
                    onChange={handleChangeFirstName}
                />

                <StyledTextFieldMedium
                    disabled
                    label="Tel Kliniki"
                    size={"medium"}
                    value={clinic?.phoneNumber}
                    onChange={handleChangeLastName}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Tel Kliniki"
                    size={"small"}
                    value={clinic?.phoneNumber}
                    onChange={handleChangeLastName}
                />

                <StyledTextFieldMedium
                    disabled
                    label="Miasto"
                    size={"medium"}
                    value={clinic?.city}
                    onChange={handleChangeEmail}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Miasto"
                    size={"small"}
                    value={clinic?.city}
                    onChange={handleChangeEmail}
                />
                <StyledTextFieldMedium
                    disabled
                    label="Ulica"
                    size={"medium"}
                    value={clinic?.address}
                    onChange={handleChangeEmail}
                />
                <StyledTextFieldSmall
                    disabled
                    label="Ulica"
                    size={"small"}
                    value={clinic?.address}
                    onChange={handleChangeEmail}
                />
            </LoginInputs>

        </LoginForm>
    );
}
