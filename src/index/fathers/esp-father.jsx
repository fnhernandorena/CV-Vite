import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/headers/esp-header";
import Nav from '../../components/navs/esp-nav';
import Footer from "../../components/footers/esp-foot";
import Buttons from "../../components/phone-adds";

import Info from '../../pages/generalinfo/esp-inf';
import Est from '../../pages/studies/esp-stu';
import Work from '../../pages/work/esp-work';
import Cont from '../../pages/contact/esp-cont';

import '../../styles/fathers.css'


const Esp = () => {
  return (
    <div className="father">
      <Header />
      <BrowserRouter>
        <Nav />
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

export default Esp;
