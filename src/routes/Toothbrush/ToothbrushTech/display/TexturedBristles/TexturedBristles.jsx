import * as S from "./TexturedBristles.styled";
import ColRightTexturedBristles from "../../../../../assets/toothbrush/tech/ColRightTexturedBristles.webp";
import BottomRowToothBrush from "../../../../../assets/toothbrush/tech/BottomRowToothbrush.webp";
export default function TaperedBristles() {
    return (<S.ContentWrapper>
        <S.TopRow>
            <S.ColumnLeft>
                <S.MainTitle>
                    GUM Textured Bristle Tips®
                </S.MainTitle>
                <S.Description>
                    <li>Bristles are specially processed to create a surface texture that picks up the plaque for enhanced plaque removal.</li>
                </S.Description>
                <S.ColLeftList>
                    <li>Available on:<br /> All GUM® toothbrushes <br /> (excluding Technique® Deep Clean)</li>
                </S.ColLeftList>
            </S.ColumnLeft>
            <S.ColumnRight>
                <S.TexturedBristlesDiagramWrapper>
                    <img src={ColRightTexturedBristles}/>
                </S.TexturedBristlesDiagramWrapper>
            </S.ColumnRight>
        </S.TopRow>
            <S.BottomRow>
                <img src={BottomRowToothBrush}/>
            </S.BottomRow>
        </S.ContentWrapper>);
}
