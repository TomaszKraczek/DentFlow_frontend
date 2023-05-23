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


export const Navbar= () =>  {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser} = useContext(UserContext);
    const { currentPages} = useContext(NavbarContext);
    const navigate = useNavigate()
    const location =  useLocation()
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (

        <>
        <Wrapper>
            <LogoLink href={"/"}>
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
                        <Login   width={150}>
                            Zarejestruj
                        </Login>
                    </Link>
                    ):(
                       <Link to={"/login"}>
                            <Login   width={100}>
                                Zaloguj
                            </Login>
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

