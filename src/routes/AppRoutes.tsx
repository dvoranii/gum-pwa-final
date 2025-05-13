import { Routes, Route } from 'react-router-dom';
// import Home from './Home';
import OralSystemicLink from './OralSystemic/OralSystemic';
import OralSystemicHome from './OralSystemic/OralSystemicHome/OralSystemicHome';
// import Partners from './Partners';
import Btc from '../routes/Btc/Btc';
import BtcHome from './Btc/BtcHome/BtcHome';
import BtcTech from './Btc/Tech/Tech';
import BtcPatient from './Btc/Patient/Patient';
import BtcFloss from './Btc/Floss/Floss';
import BtcFlossers from './Btc/Flossers/Flossers';
import BtcIDBrushes from './Btc/IDBrushes/IDBrushes';
import BtcSoftPicks from './Btc/SoftPicks/SoftPicks';
// import BtcTech from './Btc/Tech';
// import BtcPatient from './Btc/Patient';
// import Brsh from './Brsh';
// import Opr from './Opr';
// import Accs from './Accs';

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* 
      <Route path="/partners" element={<Partners />} />
      <Route path="/brsh" element={<Brsh />} />
      <Route path="/opr" element={<Opr />} />
      <Route path="/accs" element={<Accs />} />
    */}
      <Route path="/oral-systemic" element={<OralSystemicLink />}>
        <Route path="home" element={<OralSystemicHome/>}/>
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
    </Routes>
  );
}