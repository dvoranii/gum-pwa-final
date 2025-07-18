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
                <S.RefContainer>
                    <p><b>1. Sanz, Mariano, et al.</b> "Periodontitis and Cardiovascular Diseases: Consensus Report." <em>Journal of Clinical Periodontology</em>, vol. 47, no. 3, 2020, pp. 268–88, doi:10.1111/jcpe.13189.</p>
                    
                    <p><b>2. Monsarrat, Paul, et al.</b> "Clinical Research Activity in Periodontal Medicine: A Systematic Mapping of Trial Registers." <em>Journal of Clinical Periodontology</em>, vol. 43, no. 5, May 2016, pp. 390–400, doi:10.1111/jcpe.12534.</p>
                    
                    <p><b>3. Sabbah, Wael, et al.</b> "The Link between Oral and General Health." <em>International Journal of Dentistry</em>, vol. 2019, 29 May 2019, article 7862923, doi:10.1155/2019/7862923.</p>
                    
                    <p><b>4. Dawes, Joan M., et al.</b> "Periodontal Disease and Incident Dementia: The Atherosclerosis Risk in Communities Study." <em>Neurology</em>, vol. 95, no. 12, Sep. 2020, pp. e1660–e1671, doi:10.1212/WNL.0000000000010312.</p>
                    
                    <p><b>5. Bruhs, Matthias, et al.</b> "Epidemiology of Obesity and Diabetes and Their Cardiovascular Consequences." <em>PLOS ONE</em>, vol. 12, no. 5, 2017, doi:10.1371/journal.pone.0177979.</p>
                    
                    <p>6. DOF-0052</p>
                    
                    <p>7. DOF-0042</p>
                    
                    <p>8. DOF-0001</p>
                    
                    <p>9. DOF-0046</p>
                    
                    <p>10. DOF-0049</p>
                    
                    <p>11. DOF-0039</p>
                    
                    <p>12. DOF-0045</p>
                    
                    <p><b>13. Ugbolue, Samuel C.O.</b> <em>Polyolefin Fibres. Structure, Properties and Industrial Applications</em>, Second Edition, Woodhead Publishing, 2017.</p>
                    
                    <p>14. Yankell SL et al., Am J Dent 24(4), 2011, 195-199</p>
                    
                    <p>15. DOF-0055</p>
                    
                    <p>16. DOF-0047</p>
                    
                    <p>17. DOF-0024</p>
                    
                    <p>18. Microbiological and Clinical Alterations from using Butler GUM toothbrushes.<br/>
                    Reynolds,H.S.,& J.J. Zambon. J Dent Res, Vol. 76, p. 233, ID 1753 (IADR Abstracts) 1997.</p>
                    
                    <p>19. Butler "GUM" Toothbrushes -A Microbiological and Clinical Study.<br/>
                    Reynolds,H.S.,& J.J. Zambon. J Dent Res, Vol. 77, p. 287, ID 1452 (IADR Abstracts) 1998.</p>
                    
                    <p>20. DOF-0057</p>
                    
                    <p>21. DOF-0058 with the use of toothpaste</p>
                    
                    <p>22. DOF-0018</p>
                    
                    <p>23. DOF-0065</p>
                </S.RefContainer>
            ) : (
                <Outlet />
            )}
        </S.ReferencesContainer>
        </ModuleContainer>

    )
}