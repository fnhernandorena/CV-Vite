import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../../components/headers/esp-header";
import Nav from '../../components/navs/esp-nav';
import Footer from "../../components/footers/esp-foot";
import Buttons from "../../components/phone-adds";

import Info from '../../pages/generalinfo/esp-inf';
import Est from '../../pages/studies/esp-stu';
import Work from '../../pages/work/esp-work';
import Cont from '../../pages/contact/esp-cont';

import '../../styles/fathers.css'


const Esp = ({ onLogout }) => {
  return (
    <Router basename="/">
      <div className="father">
        <Header onLogout={onLogout} />
        <Nav navId="naveg" />
        <Nav navId="float-nav" />
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/formacionAcademica" element={<Est />} />
          <Route path="/experienciaLaboral" element={<Work />} />
          <Route path="/contacto" element={<Cont />} />
        </Routes>
        <Buttons />
        <Footer />
      </div>
    </Router>
  );
};

export default Esp;
