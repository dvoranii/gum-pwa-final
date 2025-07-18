import * as S from "./TaperedBristles.styles";
import TaperedBristlesDiagram from "../../../../../assets/toothbrush/tech/ColLeftExtremeBristle.webp";
import ExtremelyTaperedColRightImg from "../../../../../assets/toothbrush/tech/ExtremelyTaperedColRight.webp";

export default function TaperedBristles(){
    return(

        <S.ContentWrapper>
            <S.ColumnLeft>
                <S.MainTitle>
                    GUM Extremely Tapered Bristles® (ETB)
                </S.MainTitle>
                <S.Description>
                    <li>Precision tapering enables the Extremely Tapered Bristles (EtB) to penetrate more deeply to clean up to 2.7 mm into the sulcus and clean up to 1.4 cm along the gingival margin and between the teeth.<sup>14</sup></li>
                </S.Description>
                <S.ColLeftImgWrapper>
                    <img src={TaperedBristlesDiagram}/>
                </S.ColLeftImgWrapper>
                <S.ColLeftList>
                    <li>Available on: Deep Clean Technique®<br/>and Sensitive Clean Technique®</li>
                </S.ColLeftList>
            </S.ColumnLeft>
            <S.ColumnRight>
                <S.BristlesDiagramWrapper>
                    <img src={ExtremelyTaperedColRightImg}/>
                </S.BristlesDiagramWrapper>
            </S.ColumnRight>
        </S.ContentWrapper>
    )

}