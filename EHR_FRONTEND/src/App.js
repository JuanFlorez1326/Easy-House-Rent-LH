
import React from "react";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import { Home } from "./Components/Page/Home/Home";
import { Login } from "./Components/Page/Login/Login";
import { Register } from "./Components/Page/Register/Register";
import { AboutUs } from "./Components/Page/AboutUs/AboutUs"
import { ForgotPassword } from "./Components/Page/ForgotPassword/ForgotPassword";
import { Profile } from "./Components/Page/Profile/Profile"
import { Anouncement } from "./Components/Page/Anouncement/Anouncement";
import { PasswordResetForm } from "./Components/Layout/PasswordReset/PasswordResetForm";
import { ModifyPasswordForm } from "./Components/Layout/ConfirmModifyPassword/ModifyPasswordForm";
import { Page404 } from "./Components/Page/Page404/Page404";
import { ModalCreateAnouncement } from "./Components/Modal/ModalCreateAnouncement/ModalCreateAnouncement";
import { UserProvider } from "./UserProvider/UserProvider";
import { SearchResults } from "./Components/Page/SearchResults/SearchResults";
import { OtherUser } from "./Components/Page/OtherUser/OtherUser";
import { CategoriesResult } from "./Components/Page/CategoriesResult/CategoriesResult";
import { PrivacyPolity } from "./Components/Page/PrivacyPolity/PrivacyPolity";
import { SeeAds } from "./Components/Page/SeeAdvertisement/SeeAdvertisement";
import { Support } from "./Components/Page/Support/Support";
import { Chat } from "./Components/Page/Chat/Chat";



function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/passwordReset/" element={< PasswordResetForm />} />
          <Route exact path="/modifyPassword/" element={< ModifyPasswordForm />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/anouncement" element={<Anouncement />} />
          <Route exact path="*" element={<Page404 />} />
          <Route exact path='/createAnouncement' element={<ModalCreateAnouncement />} />
          <Route exact path='/result' element={<SearchResults />}/>
          <Route exact path='/support' element={<Support/>}/>
          <Route exact path="/user/profile" element={<OtherUser />}/>
          <Route exact path='/categories/' element={<CategoriesResult />}/> 
          <Route exact path="/privacy&polity" element={<PrivacyPolity />}/>
          <Route exact path='/ads' element={<SeeAds/>}/>
          <Route exact path="/chat" element={<Chat />}/>
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}

export default App;
