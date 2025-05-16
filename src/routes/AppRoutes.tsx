import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import OralSystemicLink from './OralSystemic/OralSystemic';
import OralSystemicHome from './OralSystemic/OralSystemicHome/OralSystemicHome';

import Partners from './Partners/Partners';
import PartnersHome from './Partners/PartnersHome/PartnersHome';
import PatientSuccess from './Partners/PatientSuccess/PatientSuccess';

import Btc from '../routes/Btc/Btc';
import BtcHome from './Btc/BtcHome/BtcHome';
import BtcTech from './Btc/Tech/Tech';
import BtcPatient from './Btc/Patient/Patient';
import BtcFloss from './Btc/Floss/Floss';
import BtcFlossers from './Btc/Flossers/Flossers';
import BtcIDBrushes from './Btc/IDBrushes/IDBrushes';
import BtcSoftPicks from './Btc/SoftPicks/SoftPicks';

import Toothbrush from './Toothbrush/Toothbrush';
import ToothbrushHome from './Toothbrush/ToothbrushHome/ToothbrushHome';
import ToothbrushTech from './Toothbrush/ToothbrushTech/ToothbrushTech';
import ToothbrushPatient from './Toothbrush/ToothbrushPatient/ToothbrushPatient';
import ToothbrushAdult from './Toothbrush/ToothbrushAdult/ToothbrushAdult';
import ToothbrushKids from './Toothbrush/ToothbrushKids/ToothbrushKids';
import ToothbrushSpecialty from './Toothbrush/ToothbrushSpecialty/ToothbrushSpecialty';

import Operatory from './Operatory/Operatory';
import OperatoryHome from './Operatory/OperatoryHome/OperatoryHome';

import Accessories from './Accessories/Accessories';
import AccessoriesHome from './Accessories/AccessoriesHome/AccessoriesHome';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/oral-systemic" element={<OralSystemicLink />}>
            <Route path="home" element={<OralSystemicHome/>}/>
        </Route>

        <Route path="/partners" element={<Partners />}>
            <Route path="home" element={<PartnersHome />} />
            <Route path="patient-success" element={<PatientSuccess />} />
        </Route>

        <Route path="/btc" element={<Btc />}>
            <Route path="home" element={<BtcHome />} />
            <Route path="tech" element={<BtcTech />} />
            <Route path="patient" element={<BtcPatient />} />
            <Route path="floss" element={<BtcFloss />} />
            <Route path="flossers" element={<BtcFlossers />} />
            <Route path="id-brushes" element={<BtcIDBrushes />} />
            <Route path="soft-picks" element={<BtcSoftPicks />} />
        </Route> 


        <Route path="/toothbrush" element={<Toothbrush />}>
            <Route  element={<ToothbrushHome />} />
            <Route path="home" element={<ToothbrushHome />} />
            <Route path="tech" element={<ToothbrushTech />} />
            <Route path="patient" element={<ToothbrushPatient />} />
            <Route path="adult" element={<ToothbrushAdult />} />
            <Route path="kids" element={<ToothbrushKids />} />
            <Route path="specialty" element={<ToothbrushSpecialty />} />
        </Route>

        <Route path="/operatory" element={<Operatory />}>
            <Route path="home" element={<OperatoryHome />} />
        </Route>
        <Route path="/accessories" element={<Accessories />}>
            <Route path="home" element={<AccessoriesHome />} />
        </Route>
    </Routes>
  );
}