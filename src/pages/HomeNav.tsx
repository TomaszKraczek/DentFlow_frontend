import {HomeButton1, HomeHeader, HomeLink, Links, Logo} from "./homePage/HomePage.style";
import logo from "../resources/img/logo.png";
import {Link} from "react-router-dom";
import React from "react";


export const HomeNav = () => {
    return (
        <HomeHeader>
            <a href="/"><Logo src={logo}/></a>
            <Links className='grid'>
                {/*<HomeLink>*/}
                {/*    <a href="/">Strona główna</a>*/}
                {/*</HomeLink>*/}
                <HomeLink>
                    <a href="#pricing"
                    > Cennik </a>
                </HomeLink>
                <HomeLink>
                    <a href="#AboutUs"
                    >O nas</a>
                </HomeLink>
                <HomeLink>
                    <a href="/clinic-registration">Załóż przychodnię</a>
                </HomeLink>
            </Links>
            <div id='buttons'>
                <Link to={'/user-registration'}>
                    <HomeButton1 >Załóż konto</HomeButton1>
                </Link>

                <Link to={"/login"}>
                    <HomeButton1 >Zaloguj</HomeButton1>
                </Link>
            </div>
        </HomeHeader>
    )
}