import React from "react";
import { AppContainer } from "./App.styles";
import { AppRouter } from "./router/App.router";
import {ToastContainer} from "react-toastify";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";
import {UserContextProvider} from "./context/UserContext";
import {NavbarContextProvider} from "./context/NavbarContext";
import {ClinicContextProvider} from "./context/ClinicContext";
import {CalendarContextProvider} from "./context/CalendarContext";
import './app.css';

function App() {
  return (
      <AppContainer>
          <UserContextProvider>
              <ClinicContextProvider>
                  <NavbarContextProvider>
                      <CalendarContextProvider>
                          <AppRouter />
                          <ToastContainer />
                      </CalendarContextProvider>
                  </NavbarContextProvider>
              </ClinicContextProvider>
          </UserContextProvider>
      </AppContainer>
  );
}

export default withAxiosIntercepted(App);
