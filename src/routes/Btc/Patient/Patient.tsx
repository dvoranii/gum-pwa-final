import * as S from "./Patient.styles"

import Embrasure1 from "../../../assets/btc/patient/embrasure-1.webp";
import Embrasure2 from "../../../assets/btc/patient/embrasure-2.webp";
import Embrasure3 from "../../../assets/btc/patient/embrasure-3.webp";
import Motivated from "../../../assets/btc/patient/motivated.webp";
import Unmotivated from "../../../assets/btc/patient/unmotivated.webp";
import Periodontal from "../../../assets/btc/patient/periodontal.webp";
import Appliance from "../../../assets/btc/patient/appliance.webp";
import Orthodontic from "../../../assets/btc/patient/orthodontic.webp";

export default function BtcPatient() {
  return (
    <S.PatientContainer>
      <S.ChoicesContainerOuter>
        <S.ChoicesContainerInner>
        <h2>Your Patients' Unique Needs</h2>
        <S.Row>
          <S.ImgWrapper>
            <img src={Embrasure1}/>
          </S.ImgWrapper>
          <S.ImgWrapper>
            <img src={Embrasure2}/>
          </S.ImgWrapper>
          <S.ImgWrapper>
            <img src={Embrasure3}/>
          </S.ImgWrapper>
        </S.Row>
        <S.Row2>
          <S.ImgWrapper2>
            <img src={Motivated}/>
          </S.ImgWrapper2>
          <S.ImgWrapper3>
            <img src={Unmotivated}/>
          </S.ImgWrapper3>
        </S.Row2>
          <S.Row>
          <S.ImgWrapper>
            <img src={Periodontal}/>
          </S.ImgWrapper>
          <S.ImgWrapper>
            <img src={Appliance}/>
          </S.ImgWrapper>
          <S.ImgWrapper>
            <img src={Orthodontic}/>
          </S.ImgWrapper>
        </S.Row>
        </S.ChoicesContainerInner>
        
        <S.GumInterproximalSolution>
          <p>Gum Interproximal Solutions</p>
        </S.GumInterproximalSolution>
      </S.ChoicesContainerOuter>

      <S.ResultsContainer>

      </S.ResultsContainer>
    </S.PatientContainer>
  );
}