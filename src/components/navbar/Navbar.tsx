import React, {useContext, useState} from "react";
import {
    Logo,
    Menu,
    Toggle,
    Wrapper,
    MenuItems,
    MenuItem,
    Login,
    MidLogo, LogoLink
} from "./Navbar.styles";
import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from "../../resources/img/logo.png"
import {ProfileButton} from "./ProfileButton";
import {UserContext} from "../../context/UserContext";
import {NavbarContext} from "../../context/NavbarContext";
import {HomeButton1, HomeHeader, HomeLink, Links} from "../../pages/homePage/HomePage.style";


export const Navbar= () =>  {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser} = useContext(UserContext);
    const { currentPages} = useContext(NavbarContext);
    const navigate = useNavigate()
    const location =  useLocation()
    console.log(location)
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>

        <Wrapper>
            <LogoLink onClick={()=>{navigate('/')}}>
                <Logo src={logo} alt="Logo"></Logo>
            </LogoLink>
            <Toggle onClick={toggle}>
                <span />
                <span />
                <span />
            </Toggle>
            <Link to={"/"}>
                <MidLogo src={logo} alt="Logo"></MidLogo>
            </Link>
            <Menu isOpen={isOpen}>
                <MenuItems>
                    {currentPages.map((page) => (
                        <MenuItem key={page.label} onClick={()=>{navigate(page.link)}} >
                            {page.label}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
            {!currentUser ? (
                <> {location.pathname === "/login" ?
                    (<Link to={"/user-registration"}>
                        <HomeButton1>
                            Załóż konto
                        </HomeButton1>

                    </Link>
                    ):(
                       <Link to={"/login"}>
                           <HomeButton1>
                               Zaloguj
                           </HomeButton1>
                        </Link>
                    )}

                </>

            ):(
                <ProfileButton/>
            )}
        </Wrapper>
        </>
    );
};

