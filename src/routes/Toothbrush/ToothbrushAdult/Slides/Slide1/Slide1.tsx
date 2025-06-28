import * as S from "./Slide1.styles";
import Brush1_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp";
import Brush1_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-SensitiveClean.webp";
import Diagrams_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-deepclean.webp";
import Diagrams_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-sensitiveclean.webp";

export default function Slide1() {
    return(<S.Container>
            <S.Column1>
                <S.BrushImgWrapper>
                    <img src={Brush1_DeepClean}/>
                </S.BrushImgWrapper>
                <S.TextAndImgWrapper>
                    <S.DiagramsWrapper>
                    <img src={Diagrams_DeepClean}/>          
                    </S.DiagramsWrapper>
                    <S.TextWrapper>
                        <h2>Deep Clean <span>Technique®</span></h2>
                        <p>Extremely Tapered Bristles clean 2.7mm below the sulcus and up to 1.4cm along the gingival margin and between the teeth.¹</p>
                        <p><span>10x better plaque removal</span> below the gumline for healthier gums.²</p>
                    </S.TextWrapper>
                    <S.ImprintSection>
                        <S.ImprintAndBadgeWrapper>
                            <S.ImprintLeftColumn>
                                <S.ImprintTextWrapper>
                                    <S.ImprintText>AVAILABLE for IMPRINT</S.ImprintText>
                                    <S.ImprintLine />
                                </S.ImprintTextWrapper>
                                <S.ColorCircles>
                                    <S.ColorCircle color="#00773d" />
                                    <S.ColorCircle color="#005eab" />
                                    <S.ColorCircle color="#d8006d" />
                                    <S.ColorCircle color="#f68933" />
                                </S.ColorCircles>
                            </S.ImprintLeftColumn>
                            
                            <S.AntibacterialBadge>
                                <span>Now with</span>
                                <span>Antibacterial</span>
                                <span>Bristles<sup>7</sup></span>
                            </S.AntibacterialBadge>
                        </S.ImprintAndBadgeWrapper>
                    </S.ImprintSection>

                    <S.BrushSpecsWrapper>
                    <S.BrushSpecsGrid>
                        <S.SpecItem>
                            <S.SpecLabel>Item #</S.SpecLabel>
                            <S.SpecValue>525</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Texture</S.SpecLabel>
                            <S.SpecValue>Soft</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Size</S.SpecLabel>
                            <S.SpecValue>Compact</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Tufts</S.SpecLabel>
                            <S.SpecValue>30</S.SpecValue>
                        </S.SpecItem>
                    </S.BrushSpecsGrid>
                </S.BrushSpecsWrapper>
                    
                </S.TextAndImgWrapper>
            </S.Column1>
            <S.Column2>

            <S.BrushImgWrapper>
                <img src={Brush1_SensitiveClean}/>
                </S.BrushImgWrapper>
                <S.TextAndImgWrapper>
                    <S.DiagramsWrapper>
                    <img src={Diagrams_SensitiveClean}/>          
                    </S.DiagramsWrapper>
                    <S.TextWrapper>
                        <h2>Sensitive Clean <span>Technique®</span></h2>
                        <p>For <span>6x better clean</span><sup>6</sup> with ultra-soft bristles specially designed for sensitivity.</p>
                        <p>Extremely tapered bristles are very fine in diameter to be extra gentle on sensitive teeth and gums, while effectively cleaning below the gumline.</p>
                    </S.TextWrapper>
                    <S.ImprintSection>
                        <S.ImprintAndBadgeWrapper>
                            <S.ImprintLeftColumn>
                                <S.ImprintTextWrapper>
                                    <S.ImprintText>AVAILABLE for IMPRINT</S.ImprintText>
                                    <S.ImprintLine />
                                </S.ImprintTextWrapper>
                                <S.ColorCircles>
                                    <S.ColorCircle color="#d692a9" />
                                    <S.ColorCircle color="#54b6b3" />
                                    <S.ColorCircle color="#5a9ac4" />
                                    <S.ColorCircle color="#b3b3e0" />
                                </S.ColorCircles>
                            </S.ImprintLeftColumn>
                            
                            <S.AntibacterialBadge>
                                <span>Now with</span>
                                <span>Antibacterial</span>
                                <span>Bristles<sup>7</sup></span>
                            </S.AntibacterialBadge>
                        </S.ImprintAndBadgeWrapper>
                    </S.ImprintSection>

                    <S.BrushSpecsWrapper>
                    <S.BrushSpecsGrid>
                        <S.SpecItem>
                            <S.SpecLabel>Item #</S.SpecLabel>
                            <S.SpecValue>528</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Texture</S.SpecLabel>
                            <S.SpecValue>Ultra Soft</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Size</S.SpecLabel>
                            <S.SpecValue>Compact</S.SpecValue>
                        </S.SpecItem>
                        <S.SpecItem>
                            <S.SpecLabel>Tufts</S.SpecLabel>
                            <S.SpecValue>30</S.SpecValue>
                        </S.SpecItem>
                    </S.BrushSpecsGrid>
                </S.BrushSpecsWrapper>
                    
                </S.TextAndImgWrapper>
            </S.Column2>
        </S.Container>)
}