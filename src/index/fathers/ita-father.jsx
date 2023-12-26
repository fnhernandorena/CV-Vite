import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/headers/ita-header";
import Nav from '../../components/navs/ita-nav';
import Footer from "../../components/footers/ita-foot";
import Buttons from "../../components/phone-adds";

import Info from '../../pages/generalinfo/ita-inf';
import Est from '../../pages/studies/ita-stu';
import Work from '../../pages/work/ita-work';
import Cont from '../../pages/contact/ita-cont';

import '../../styles/fathers.css'


const Ita = ({ onLogout }) => {
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

export default Ita;
