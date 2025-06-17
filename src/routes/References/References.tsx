import * as S from "./References.styles";
import { Outlet, useLocation } from 'react-router-dom';
import InnerNav from "../../components/InnerNav/InnerNav";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";


const referencesNavItems = [
      {path: "/references", label: "References", end: true},
      { path: "/recommend", label: "Recommend" }
]

export default function References(){
    const location = useLocation();
    const isHomePage = location.pathname === "/references";

    return(
        <ModuleContainer>
        <InnerNav navItems={referencesNavItems}/>
        <S.ReferencesContainer>
            {isHomePage ? (
                <>
                    <p><sup>⬧</sup> Data on File (DOF-0042)</p>
                    <p>1. Yankell SL et al., Am J Dent 24(4), 2011, 195-199</p>
                    <p>2. Microbiological and Clinical Alterations from using Butler GUM toothbrushes.<br/>
                    Reynolds,H.S.,& J.J. Zambon. J Dent Res, Vol. 76, p.233, ID 1753 (IADR Abstracts) 1997.
                    </p>
                    <p>3. Butler "GUM" Toothbrushes -A Microbiological and Clinical Study. Reynolds,H.S.,& J.J. Zambon.<br/>
                    J Dent Res, Vol. 77, p.287, ID 1452 (IADR Abstracts) 1998.
                    </p>
                    <p><sup>⬧⬧</sup>  Interproximal measures from distal to mesial sides of a tooth</p>
                    <p><sup>⬧</sup> Data on File (DOF-0042) <sup>⬧⬧</sup> Illustration of micro-feathered filament tip does not represent actual number of individual tips. 1. Yankell SL et al., Am J Dent 24(4), 2011, 195-199 2. DOF-0055 3. DOF-0024</p>
                    <p>4. Microbiological and Clinical Alterations from using Butler GUM toothbrushes. Reynolds,H.S.,& J.J. Zambon. J Dent Res, Vol. 76, p. 233, ID 1753 (IADR Abstracts) 1997.</p>
                    <p>5. Butler "GUM" Toothbrushes -A Microbiological and Clinical Study. Reynolds,H.S.,& J.J. Zambon.<br/>
                    J Dent Res, Vol. 77, p.287, ID 1452 (IADR Abstracts) 1998.</p>
                    <p>6. DOF-0057 7. DOF-0047</p>
                </>
            ) : (
                <Outlet />
            )}
        </S.ReferencesContainer>
        </ModuleContainer>

    )
}