import * as S from "./DualTechnique.styled";

import FlossDiagram from "../../../../../assets/btc/tech/FlossDiagram.webp";
import MintFlavour from "../../../../../assets/btc/tech/MintFlavour.webp";


export default function DualTechnique(){
    return(

        <S.ContentWrapper>
        <S.TopRow>
            <S.ColumnLeft>
                <S.MainTitle>
                    GUM Dual<br/>
                    Technique® Flosser
                </S.MainTitle>
                <S.Description>
                    <li>Dual ends specifically designed to reach front and back teeth.</li>
                    <li>Twisted mint floss on the angled side removes 2x more plaque<sup>10</sup> and covers 30% more surface area<sup>11</sup>.</li>
                </S.Description>
                    <S.ImgWrapper>
                        <img src={MintFlavour}/>
                    </S.ImgWrapper>
            </S.ColumnLeft>
            <S.ColumnRight>
                <S.ColRightDiagramWrapper>
                    <img src={FlossDiagram}/>
                </S.ColRightDiagramWrapper>
            </S.ColumnRight>
        </S.TopRow>
        </S.ContentWrapper>
    )

}