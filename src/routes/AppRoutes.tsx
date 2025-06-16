import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import OralSystemicLink from './OralSystemic/OralSystemic';

import Partners from './Partners/Partners';

import Btc from '../routes/Btc/Btc';
import BtcTech from './Btc/Tech/Tech';
import BtcPatient from './Btc/Patient/Patient';
import BtcFloss from './Btc/Floss/Floss';
import BtcFlossers from './Btc/Flossers/Flossers';
import BtcIDBrushes from './Btc/IDBrushes/IDBrushes';
import BtcSoftPicks from './Btc/SoftPicks/SoftPicks';

import Toothbrush from './Toothbrush/Toothbrush';
import ToothbrushTech from './Toothbrush/ToothbrushTech/ToothbrushTech';
import ToothbrushPatient from './Toothbrush/ToothbrushPatient/ToothbrushPatient';
import ToothbrushAdult from './Toothbrush/ToothbrushAdult/ToothbrushAdult';
import ToothbrushKids from './Toothbrush/ToothbrushKids/ToothbrushKids';
import ToothbrushSpecialty from './Toothbrush/ToothbrushSpecialty/ToothbrushSpecialty';

import Operatory from './Operatory/Operatory';
import Accessories from './Accessories/Accessories';
import Recommend from "./Recommend/Recommend";
import References from './References/References';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/oral-systemic" element={<OralSystemicLink />}>
            <Route index element={null}/>
        </Route>

        <Route path="/partners" element={<Partners />}>
            <Route index element={null} />
        </Route>

        <Route path="/btc" element={<Btc />}>
            <Route index element={null} />
            <Route path="tech" element={<BtcTech />} />
            <Route path="patient" element={<BtcPatient />} />
            <Route path="floss" element={<BtcFloss />} />
            <Route path="flossers" element={<BtcFlossers />} />
            <Route path="id-brushes" element={<BtcIDBrushes />} />
            <Route path="soft-picks" element={<BtcSoftPicks />} />
        </Route> 


        <Route path="/toothbrush" element={<Toothbrush />}>
            <Route  index element={null} />
            <Route path="tech" element={<ToothbrushTech />} />
            <Route path="patient" element={<ToothbrushPatient />} />
            <Route path="adult" element={<ToothbrushAdult />} />
            <Route path="kids" element={<ToothbrushKids />} />
            <Route path="specialty" element={<ToothbrushSpecialty />} />
        </Route>

        <Route path="/operatory" element={<Operatory />}>
            <Route index element={null} />
        </Route>
        
        <Route path="/accessories" element={<Accessories />}>
            <Route index element={null} />
        </Route>

        <Route path="/recommend" element={<Recommend />}>
            <Route index element={null} />
        </Route>
        <Route path="/references" element={<References/>}>
            <Route index element={null} />
        </Route>
    </Routes>
  );
}