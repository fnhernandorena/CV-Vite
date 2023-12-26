import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/headers/ing-header";
import Nav from '../../components/navs/ing-nav';
import Footer from "../../components/footers/ing-foot";
import Buttons from "../../components/phone-adds";

import Info from '../../pages/generalinfo/ing-inf';
import Est from '../../pages/studies/ing-stu';
import Work from '../../pages/work/ing-work';
import Cont from '../../pages/contact/ing-cont';

import '../../styles/fathers.css'


const Ing = ({ onLogout }) => {
  return (
    <div className="father">
      <Header onLogout={onLogout} />
      <BrowserRouter>
        <Nav navId="naveg" />
        <Nav navId="float-nav" />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/formacionAcademica" element={<Est />} />
          <Route path="/experienciaLaboral" element={<Work />} />
          <Route path="/contacto" element={<Cont />} />
        </Routes>
      </BrowserRouter>
      <Buttons />
      <Footer />
    </div>
  );
};

export default Ing;