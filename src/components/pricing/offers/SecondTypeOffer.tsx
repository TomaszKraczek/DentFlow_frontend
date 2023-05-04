import {
    SecondOfferContainer,
    Header,
    PriceArea,
    OfferParam,
    OfferIcon,
    H1, H2, H3,
    CurrencyTextArea
} from "./SecondTypeOffer.style";
import {HomeButton1} from "../../../pages/homePage/HomePage.style";
import React from "react";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {CheckCircle} from "react-bootstrap-icons";


interface OfferProps {
    header: string;
    price: number;
    currency: string;
}

export const SecondTypeOffer: React.FC<OfferProps> = ({ currency, price, header }) => {
    return (
        <SecondOfferContainer>
            <Header>
                <H1>1-4 foteli</H1>
            </Header>
            <PriceArea>
                <H2>899.99</H2>
                <H3>zł/msc</H3>
            </PriceArea>
            <OfferParam>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA",
                        }}>
                        pełna wersja programu
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat od liczby użytkowników
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat od liczby komputerów
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat za stanowisko recepcji
                    </Typography>
                </OfferIcon>
                <OfferIcon>
                    <CheckCircle
                        color={"white"}
                        size={30}/>
                    <Typography
                        variant={"h6"}
                        sx={{
                            fontFamily: "Montserrat",
                            marginLeft: "1rem",
                            color: "#FAFAFA"
                        }}>
                        brak opłat za aktualizację programu i pomoc
                    </Typography>
                </OfferIcon>
            </OfferParam>
            <HomeButton1
                marginTop={2}
                id={'contact-form-button'}
                >
                Kup
            </HomeButton1>
        </SecondOfferContainer>


    )
}