import * as S from "./DualDefence.styled";

import ColRightFloss from "../../../../../assets/btc/tech/ColRightFloss.webp";
import TeethFlossDiagram from "../../../../../assets/btc/tech/tooth-floss-diagram.webp";
import BottomRowFloss from "../../../../../assets/btc/tech/BottomRowFloss.webp";

export default function DualDefence(){
    return(
        <S.ContentWrapper>
        <S.TopRow>
            <S.ColumnLeft>
                <S.MainTitle>
                    GUM Dual-Defence®<br/>
                    Twisted String Floss
                </S.MainTitle>
                <S.Description>
                    <li>Twisted mint floss.</li>
                    <li>Removes 2x more plaque<sup>10</sup>.</li>
                </S.Description>
                <S.ImgTextWrapper>
                    <S.ImgWrapper>
                        <img src={TeethFlossDiagram}/>
                    </S.ImgWrapper>
                    <S.TextWrapper>
                        <h2>30% more</h2>
                        <p>Covers 30% more surface area<sup>11</sup></p>
                    </S.TextWrapper>
                </S.ImgTextWrapper>
            </S.ColumnLeft>
            <S.ColumnRight>
                <S.ColRightDiagramWrapper>
                    <img src={ColRightFloss}/>
                </S.ColRightDiagramWrapper>
            </S.ColumnRight>
        </S.TopRow>
            <S.BottomRow>
                <img src={BottomRowFloss}/>
            </S.BottomRow>
        </S.ContentWrapper>
    )

}