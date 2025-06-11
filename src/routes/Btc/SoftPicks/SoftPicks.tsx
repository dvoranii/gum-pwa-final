import * as S from "./SoftPicks.styles";
import ThreeSoftPicks from "../../../assets/btc/soft-picks/3-soft-picks.webp";
import ThreeTeethGraphic from "../../../assets/btc/soft-picks/3-teeth-graphic.webp";
import CaptionGraphic1 from "../../../assets/btc/soft-picks/CaptionGraphic1.webp";
import CaptionGraphic2 from "../../../assets/btc/soft-picks/CaptionGraphic2.webp";

export default function BtcSoftPicks() {

    return(
        <S.SoftPicksContainer>
            <S.Row1>
            <S.Column1>
            <S.TextContainer>
                <h2>Soft<span>-Picks®</span> Advanced</h2>
                <p>With a more comfortable rubber grip and longer curved handle for improved maneuverability.</p>
            </S.TextContainer>
            <S.TextContainer>
                <h2>Soft<span>-Picks®</span> Comfort Flex <span>Mint</span></h2>
                <p>Refreshing mint, flexible rubber bristles slide between teeth for gentle, safe and effective food and biofilm removal.</p>
            </S.TextContainer>
            <S.ImgWrapper1>
                <img src={ThreeTeethGraphic}/>
            </S.ImgWrapper1>
            </S.Column1>
            <S.Column2>
                <S.ImgWrapper>
                    <img src={ThreeSoftPicks}/>
                </S.ImgWrapper>
            </S.Column2>
            </S.Row1>

            <S.Row2>
                <S.Column1And2Wrapper>           
                    <S.Column1>
                        <S.ImgAndTextWrapper>
                            <S.ImgWrapper2>
                                <img src={CaptionGraphic1}/>
                            </S.ImgWrapper2>
                            <S.TextWrapper>
                                <p><b>Gentle on gums</b></p>
                                <p>Our soft rubber picks massage gums and clean between teeth without abrasion. They are latex-free and safe even for sensitive and/allergic patients</p>
                            </S.TextWrapper>
                        </S.ImgAndTextWrapper>
                    </S.Column1>
                    <S.Column2> 
                        <S.ImgAndTextWrapper>
                        <S.ImgWrapper2>
                            <img src={CaptionGraphic2}/>
                        </S.ImgWrapper2>
                        <S.TextWrapper>
                            <p><b>More motivation</b></p>
                            <p>Less demanding methods of interdental cleaning increase patient motivation, compliance and outcomes.</p> 
                            <small>(Needleman, 2005; Wilder, 2016)</small>
                        </S.TextWrapper>
                    </S.ImgAndTextWrapper>
                    </S.Column2>
                </S.Column1And2Wrapper>
                <S.Column3>
                    <S.Column3TextWrapper>
                        <p>650 Soft-Picks® Advanced</p>
                        <p>72 Packs of 3</p>
                    </S.Column3TextWrapper>
                    <S.Column3TextWrapper>
                        <p>670 Soft-Picks® Comfort Flex Mint</p>
                        <p>72 Packs of 4</p>
                    </S.Column3TextWrapper>
                </S.Column3>
            </S.Row2>
        </S.SoftPicksContainer>
    )
}