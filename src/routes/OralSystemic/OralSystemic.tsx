
import * as S from "./OralSystemic.styles";
import InnerNav from "../../components/InnerNav/InnerNav";

 const oralSystemicNavItems = [
  { path: "/oral-systemic", label: "The\u00A0Oral-Systemic\u00A0Link", end: true },
  { path: "/recommend", label: "Recommend" },
];

export default function OralSystemicLink(){
    return(
        <S.OralSystemicContainer>
            <InnerNav navItems={oralSystemicNavItems} />
            <h1>Oral Systemic Home</h1>
        </S.OralSystemicContainer>
    )
}