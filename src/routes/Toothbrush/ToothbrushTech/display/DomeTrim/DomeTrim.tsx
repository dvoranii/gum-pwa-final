import * as S from "./DomeTrim.styled";
import TaperedBristlesDiagram from "../../../../../assets/toothbrush/tech/TaperedBristlesImg1.webp";
import BristlesDiagramRightCol from "../../../../../assets/toothbrush/tech/ColRightBristlesDiagram.webp";

export default function TaperedBristles(){
    return(

        <S.ContentWrapper>
            <S.ColumnLeft>
                <S.MainTitle>
                    GUM Dome Trim® Bristle Design
                </S.MainTitle>
                <S.Description>
                    <li>Designed to clean below the gumline where periodontal disease starts<sup>18,19</sup>. The dome shape bristling structure helps promote the recommended 45° angle when using the modified Bass technique.</li>
                </S.Description>
                <S.ColLeftImgWrapper>
                    <img src={TaperedBristlesDiagram}/>
                </S.ColLeftImgWrapper>
                <S.ColLeftList>
                    <li>Available on: Complete Care Technique® Sensitive Care Technique®, Technique® Classic, Super Tip®, Dome Trim®, G•U•M Bright Care™, Enamel Clean Technique®</li>
                </S.ColLeftList>
            </S.ColumnLeft>
            <S.ColumnRight>
                <S.BristlesDiagramWrapper>
                    <img src={BristlesDiagramRightCol}/>
                </S.BristlesDiagramWrapper>
            </S.ColumnRight>
        </S.ContentWrapper>
    )

}