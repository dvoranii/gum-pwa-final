import * as S from "./Patient.styles"
import { useState } from "react";
import Embrasure1 from "../../../assets/btc/patient/embrasure-1.webp";
import Embrasure2 from "../../../assets/btc/patient/embrasure-2.webp";
import Embrasure3 from "../../../assets/btc/patient/embrasure-3.webp";
import Motivated from "../../../assets/btc/patient/motivated.webp";
import Unmotivated from "../../../assets/btc/patient/unmotivated.webp";
import Periodontal from "../../../assets/btc/patient/periodontal.webp";
import Appliance from "../../../assets/btc/patient/appliance.webp";
import Orthodontic from "../../../assets/btc/patient/orthodontic.webp";

import Embrasure1Active from "../../../assets/btc/patient/embrasure-1-active.webp";
import Embrasure2Active from "../../../assets/btc/patient/embrasure-2-active.webp";
import Embrasure3Active from "../../../assets/btc/patient/embrasure-3-active.webp";
import MotivatedActive from "../../../assets/btc/patient/motivated-active.webp";
import UnmotivatedActive from "../../../assets/btc/patient/unmotivated-active.webp";
import PeriodontalActive from "../../../assets/btc/patient/periodontal-active.webp";
import ApplianceActive from "../../../assets/btc/patient/appliance-active.webp";
import OrthodonticActive from "../../../assets/btc/patient/orthodontic-active.webp";


type ImageKey = 
  | "embrasure1" | "embrasure2" | "embrasure3" 
  | "motivated" | "unmotivated"                
  | "periodontal" | "appliance" | "orthodontic"; 

const rowGroups: Record<string, ImageKey[]> = {
  row1: ["embrasure1", "embrasure2", "embrasure3"],
  row2: ["motivated", "unmotivated"],
  row3: ["periodontal", "appliance", "orthodontic"],
};

export default function BtcPatient() {
  const [activeImages, setActiveImages] = useState<Record<ImageKey, boolean>>({
    embrasure1: false,
    embrasure2: false,
    embrasure3: false,
    motivated: false,
    unmotivated: false,
    periodontal: false,
    appliance: false,
    orthodontic: false,
  });

  const toggleImage = (imageKey: ImageKey) => {
    setActiveImages((prev) => {
      const row = Object.keys(rowGroups).find((rowKey) =>
        rowGroups[rowKey].includes(imageKey)
      );
      if (!row) return prev;

      const newState = { ...prev };
      rowGroups[row].forEach((key) => (newState[key] = false));
      newState[imageKey] = !prev[imageKey];
      return newState;
    });
  };

  return (
    <S.PatientContainer>
      <S.ChoicesContainerOuter>
        <S.ChoicesContainerInner>
          <h2>Your Patients' Unique Needs</h2>
          
          {/* Row 1 */}
          <S.Row>
            <S.ImgWrapper onClick={() => toggleImage("embrasure1")}>
              <img src={activeImages.embrasure1 ? Embrasure1Active : Embrasure1} />
            </S.ImgWrapper>
            <S.ImgWrapper onClick={() => toggleImage("embrasure2")}>
              <img src={activeImages.embrasure2 ? Embrasure2Active : Embrasure2} />
            </S.ImgWrapper>
            <S.ImgWrapper onClick={() => toggleImage("embrasure3")}>
              <img src={activeImages.embrasure3 ? Embrasure3Active : Embrasure3} />
            </S.ImgWrapper>
          </S.Row>

          {/* Row 2 */}
          <S.Row2>
            <S.ImgWrapper2 onClick={() => toggleImage("motivated")}>
              <img src={activeImages.motivated ? MotivatedActive : Motivated} />
            </S.ImgWrapper2>
            <S.ImgWrapper3 onClick={() => toggleImage("unmotivated")}>
              <img src={activeImages.unmotivated ? UnmotivatedActive : Unmotivated} />
            </S.ImgWrapper3>
          </S.Row2>

          {/* Row 3 */}
          <S.Row>
            <S.ImgWrapper onClick={() => toggleImage("periodontal")}>
              <img src={activeImages.periodontal ? PeriodontalActive : Periodontal} />
            </S.ImgWrapper>
            <S.ImgWrapper onClick={() => toggleImage("appliance")}>
              <img src={activeImages.appliance ? ApplianceActive : Appliance} />
            </S.ImgWrapper>
            <S.ImgWrapper onClick={() => toggleImage("orthodontic")}>
              <img src={activeImages.orthodontic ? OrthodonticActive : Orthodontic} />
            </S.ImgWrapper>
          </S.Row>
        </S.ChoicesContainerInner>
      </S.ChoicesContainerOuter>

      <S.ResultsContainer>
        
      </S.ResultsContainer>
    </S.PatientContainer>
  );
}