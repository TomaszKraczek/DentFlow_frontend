import {
    Cart,
    Container,
    Desc,
    DescriptionCard,
    Down,
    DownCard, DownCardDescription,
    IconCard,
    Section,
    Title,
    Up,
    UpCard
} from "./AboutUs.styles";
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const AboutUs = () => {
    return (
        <Section>
            <Container>
                <Up>
                    <Title>DentFlow</Title>
                    <Desc>
                        Nowoczesne oprogramowanie służące do kompleksowej obsługi gabinetów
                        stomatologicznych. Z naszą pomocą łatwo poprowadzisz dokumentacje medyczną
                        pacjentów oraz rozplanujesz pracę swojego gabinetu.
                    </Desc>
                </Up>
                <Down>
                    <Cart>
                        <UpCard><IconCard><AccessTimeOutlinedIcon sx={{ fontSize: 50,color: "#1784B3",marginTop:"10px" }} /></IconCard><DescriptionCard> Nowoczesne rozwiązania</DescriptionCard></UpCard>
                        <DownCard>
                            <DownCardDescription>
                                DentFlow jest stale na bieżąco
                                z najnowszymi trendami
                                związanymi z technologiami
                                informatycznymi oraz
                                zarządzaniem gabinetami
                                stomatologicznymi.
                                Polegamy na najnowszych
                                rozwiązaniach dostarczanych
                                przezfirmy takie jak
                                Amazon,Google.
                            </DownCardDescription>
                        </DownCard>
                    </Cart>
                    <Cart>
                        <UpCard><IconCard><BuildOutlinedIcon sx={{ fontSize: 50,color: "#1784B3",marginTop:"10px" }} /></IconCard><DescriptionCard> Efektywana praca</DescriptionCard></UpCard>
                        <DownCard>
                            <DownCardDescription>
                                Wykorzystanie elektronicznej
                                dokumentacji medycznej pozwala
                                zaoszczędzić czas, podnieść
                                jakość świadczonych usług
                                oraz zwiększyć efektywność
                                pracy gabinetu stomatologicznego,
                                co prowadzi do zwiększenia jego
                                rentowności.

                            </DownCardDescription>
                        </DownCard>
                    </Cart>
                    <Cart>
                        <UpCard><IconCard><GppGoodOutlinedIcon sx={{ fontSize: 50,color: "#1784B3",marginTop:"10px" }} /></IconCard><DescriptionCard>Bezpieczeństwo <br/>danych </DescriptionCard></UpCard>
                        <DownCard>
                              <DownCardDescription>
                                  DentFlow spełnia obecnie
                                  obowiązujące wymagania
                                  ustawowe odnośnie prowadzenia
                                  elektronicznej dokumentacji
                                  medycznej (EDM) oraz dokłada
                                  wszelkich starań w celu
                                  zapewnienia prywatności i
                                  bezpieczeństwa
                                  przechowywanych danych.
                              </DownCardDescription>
                        </DownCard>
                    </Cart>

                </Down>
            </Container>
        </Section>
    );
};

