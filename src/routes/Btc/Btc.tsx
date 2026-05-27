import * as S from "./Btc.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from "react-router-dom";
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import PatientNeeds2 from "../../assets/btc/PatientNeeds.png";
import Technology2 from "../../assets/btc/Technology.png";
import Flossers from "../../assets/btc/column2-flossers.webp";

import PatientBG from "../../assets/btc/patient/PatientBG.webp";
import InterdentalBanner from "../../assets/btc/interdental-banner.png";

import Trademark from "../../components/Trademark/Trademark";

const btcNavItems = [
  { path: "/btc", label: "BTC\u00A0Home", end: true },
  { path: "/btc/tech", label: "Tech" },
  { path: "/btc/patient", label: "Patient" },
  { path: "/btc/floss", label: "Floss" },
  { path: "/btc/flossers", label: "Flossers" },
  { path: "/btc/id-brushes", label: "ID\u00A0Brushes" },
  { path: "/btc/soft-picks", label: "Soft\u2013Picks" },
  { path: "/recommend", label: "Recommend" },
];

export default function Toothbrush() {
  const location = useLocation();
  const isHomePage = location.pathname === "/btc";
  const isPatientRoute = location.pathname === "/btc/patient";

  const backgroundImage = isPatientRoute ? `${PatientBG}` : undefined;

  return (
    <ModuleContainer
      $isHomePage={isHomePage}
      $backgroundImage={backgroundImage}
    >
      <InnerNav navItems={btcNavItems} />
      <S.Content>
        {isHomePage ? (
          <S.FlossBG>
            <S.ContentLeft>
              <S.IntroTitleWrapper>
                <S.IntroTitle>
                  GUM
                  <Trademark $size="42px" /> <br />
                  Interproximal
                  <br /> Solutions
                </S.IntroTitle>
              </S.IntroTitleWrapper>
              <S.RecommendedWrapper>
                <S.BannerImg
                  src={InterdentalBanner}
                  alt="No. 1 Interdental Brand"
                />
              </S.RecommendedWrapper>
              <S.LinksWrapper>
                <S.StyledLink to="/btc/tech">
                  <S.LinkContent>
                    <S.ImgWrapper>
                      <S.LinkImg src={Technology2} />
                    </S.ImgWrapper>

                    <S.LinkText>Technology</S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
                <S.StyledLink to="/btc/patient">
                  <S.LinkContent>
                    <S.ImgWrapper>
                      <S.LinkImg src={PatientNeeds2} />
                    </S.ImgWrapper>
                    <S.LinkText>Patient Needs</S.LinkText>
                  </S.LinkContent>
                </S.StyledLink>
              </S.LinksWrapper>
            </S.ContentLeft>
            <S.ContentRight>
              <S.FlossersImg src={Flossers} />
            </S.ContentRight>
          </S.FlossBG>
        ) : (
          <Outlet />
        )}
      </S.Content>
    </ModuleContainer>
  );
}
