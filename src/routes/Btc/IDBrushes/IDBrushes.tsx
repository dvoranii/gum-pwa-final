import * as S from "./IDBrushes.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";
import ProxabrushSizingChart from "./ProxabrushSizingChart/ProxabrushSizingChart";

import TriangularBristlesImg from "../../../assets/btc/id-brushes/triangular-bristles-circle-img.webp";
import ConventionalBristlesImg from "../../../assets/btc/id-brushes/conventional-bristles-circle-img.webp";

import Slide1Row1Graphic2 from "../../../assets/btc/id-brushes/Slide1Row1Graphic2.webp";
// import Slide1Graphic3 from "../../../assets/btc/id-brushes/Asset8.png";
import Slide1Graphic3 from "../../../assets/btc/id-brushes/ProxabrushSizingDiagram.webp";

import Slide2Row2Graphic1 from "../../../assets/btc/id-brushes/Slide2Row2Graphic1.webp";
import AngleCleaners from "../../../assets/btc/id-brushes/angle-cleaners.webp";

import Slide3Graphic1 from "../../../assets/btc/id-brushes/Slide3Graphic1.webp";
import Slide3Graphic2 from "../../../assets/btc/id-brushes/Slide3Graphic2.webp";

export default function BtcIDBrushes() {

    return(
        <S.IDBrushesContainer>
            <FlickityCarousel 
            $customStyles={{
                viewportHeight: '80vh',
                dotPosition: {
                bottom: '-28px',
                right: '44px'
                }
            }}
            >

                {/* SLIDE 1 */}
                <BaseCarouselSlide>
                    <S.SlideWrapperInner>
                        <S.Row1WrapperOuter>
                        <S.Row1WrapperInner>
                            <S.TextWrapperOuter>
                            <S.TextWrapper>
                                <h2>Proxabrush® Interdental Cleaners</h2>
                                <p>Available in a range of sizes</p>

                                <S.ListContainer>
                                    <ul>
                                        <li>Trianglular-shaped bristles remove 25% more plaque than conventional round bristles<sup>1</sup></li>
                                        <li>Cleans posterior teeth easily with bendable neck</li>
                                        <li>Better comfort, control and grip with flexible rubberized handle</li>
                                        <li>Stays clean between uses with antibacterial bristles<sup>2</sup></li>
                                    </ul>      
                                </S.ListContainer>
                            </S.TextWrapper>
                            </S.TextWrapperOuter>

                            <S.DiagramSection>
                                <S.BristlesWrapper>
                                    <S.BristlesTextWrapper>
                                        <p>Triangular-shaped bristles remove up to 25% more plaque than conventional round bristles<sup>1</sup></p>
                                    </S.BristlesTextWrapper>
                                    <S.BristlesImagesContainer>
                                        <S.BristlesImgWrapper>
                                            <img src={TriangularBristlesImg} alt="Triangular Bristles" />
                                            <S.BristleLabel>Triangular<br/> Bristles</S.BristleLabel>
                                        </S.BristlesImgWrapper>
                                        <S.BristlesImgWrapper>
                                            <img src={ConventionalBristlesImg} alt="Conventional Round Bristles" />
                                            <S.BristleLabel>Conventional<br/> Round Bristles</S.BristleLabel>
                                        </S.BristlesImgWrapper>
                                    </S.BristlesImagesContainer>
                                </S.BristlesWrapper>
                                
                                <S.FeatureCallouts>
                                    <S.NylonCallout $marginTop="12px">
                                        <p>Nylon coated wire helps<br/> prevent galvanic shock</p>
                                    </S.NylonCallout>
                                    <S.AntibacterialCallout>
                                        <S.AntibacterialBadge>
                                            <span>Antibacterial</span>
                                            <span>Bristles<sup>9</sup></span>
                                        </S.AntibacterialBadge>
                                    </S.AntibacterialCallout>
                                </S.FeatureCallouts>
                            </S.DiagramSection>

                        </S.Row1WrapperInner>
                            <S.ImgWrapper1>
                                <img src={Slide1Row1Graphic2}/>
                            </S.ImgWrapper1>
                        </S.Row1WrapperOuter>
                          <S.SizingDiagramContainer>
                            <ProxabrushSizingChart />
                        </S.SizingDiagramContainer>
                    </S.SlideWrapperInner>
                </BaseCarouselSlide>

                {/* SLIDE 2 */}

                <BaseCarouselSlide>
                    <S.SlideWrapperInner>
                        <S.SlideRow1>
                            <S.Row1WrapperInner2 $paddingBottom="0.4rem">
                                <S.TextWrapper>
                                    <h2>Proxabrush® Angle Cleaners</h2>
                                    <S.ListContainer $paddingBottom="0">
                                        <ul>
                                            <li>Trianglular-shaped bristles remove 25% more plaque than conventional round bristles<sup>1</sup></li>
                                            <li>Angled neck helps patients reach hard-to-clean interdental surfaces</li>
                                            <li>Small cylindrical shape (3012) fits in spaces as small as 0.9mm, tapered shape (3014) fits in spaces as small as 1.2mm</li>
                                            <li>Comes with carrying case</li>
                                        </ul>      
                                    </S.ListContainer>
                                </S.TextWrapper>
                                <S.BristlesAndNylonWrapper $flex="0.9">
                                    <S.NylonCallout $padding="10px" $fontSize="13px" $marginRight="36px" $width="84%">
                                        <p>Nylon coated wire helps prevent galvanic shock</p>
                                    </S.NylonCallout>
                                    <S.BristlesAndAntiBacterialWrapper>
                                            <img src={AngleCleaners}/>
                                    <S.AntibacterialCallout>
                                        <S.AntibacterialBadge>
                                            <span>Antibacterial</span>
                                            <span>Bristles<sup>9</sup></span>
                                        </S.AntibacterialBadge>
                                    </S.AntibacterialCallout>
                                    </S.BristlesAndAntiBacterialWrapper>
                                    
                                </S.BristlesAndNylonWrapper>
                            </S.Row1WrapperInner2>
                            <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#ffde00">●</S.ColoredCircle>
                                    <span>3012 ProxaBrush® Angle Cleaners</span>
                                    </S.Column>
                                <S.Column>Tight Cylindrical</S.Column>
                                <S.Column>36/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#68bd45">●</S.ColoredCircle>
                                    <span>3014 ProxaBrush® Angle Cleaners</span>
                                </S.Column>
                                <S.Column>Tight Tapered</S.Column>
                                <S.Column>36/box</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0px"/>
                        </S.InfoGrid>
                        </S.SlideRow1>
                        <S.SlideRow2>                          
                            <S.Row1WrapperInner2>
                                <S.TextAndImgWrapper>
                                <S.TextWrapper2>
                                    <h2>Proxabrush® Original Handle & Refills</h2> 
                                    <p>Ideal for patients who require additional assistance to clean posterior interproximal spaces.</p>
                                    <S.ListContainer>
                                        <ul>                             
                                            <li>Handle allows patients to use different sized tips to clean unique interproximal spaces</li>
                                            <li>Ergonomic handle for easy maneuverability and better control</li>
                                            <li>Triangular-shaped bristles remove 25% more plaque than conventional round bristles<sup>1</sup></li>
                                        </ul>                   
                                </S.ListContainer>
                                </S.TextWrapper2>
                                <S.ImgInnerWrapper>
                                    <S.NylonCallout $padding="12px 18px" $fontSize="14px" $width="60%">
                                        <p>Nylon coated wire helps prevent galvanic shock</p>
                                    </S.NylonCallout>
                                    <img src={Slide2Row2Graphic1}/>
                                </S.ImgInnerWrapper>
                                </S.TextAndImgWrapper>
                                <S.BristleAndAntibacterialWrapper>
                                    <S.BristlesImgWrapper2>
                                            <img src={TriangularBristlesImg} alt="Triangular Bristles" />
                                        </S.BristlesImgWrapper2>
                                     <S.AntibacterialCallout>
                                        <S.AntibacterialBadge>
                                            <span>Antibacterial</span>
                                            <span>Bristles<sup>9</sup></span>
                                        </S.AntibacterialBadge>
                                    </S.AntibacterialCallout>
                                </S.BristleAndAntibacterialWrapper>
                            </S.Row1WrapperInner2>
                            <S.InfoGrid $gridColumns="2fr 1fr">
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle hidden={true}>●</S.ColoredCircle>
                                    <span>611 Original Handle</span>
                                    </S.Column>
                                <S.Column>12/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#6dcd47">●</S.ColoredCircle>
                                    <span>414 Tight Refills</span>
                                    </S.Column>
                                <S.Column>18 packs of 2</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#a00e58">●</S.ColoredCircle>
                                    <span>612 Moderate Reflls</span>
                                </S.Column>
                                <S.Column>18 packs of 2</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#12b7cc">●</S.ColoredCircle>
                                    <span>614 Wide Refills</span>
                                </S.Column>
                                <S.Column>18 packs of 2</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0px"/>
                        </S.InfoGrid>
                        </S.SlideRow2>
                    </S.SlideWrapperInner>
                </BaseCarouselSlide>

                {/* SLIDE 3 */}

                <BaseCarouselSlide>
                    <S.Slide3WrapperOuter>
                    <S.Slide3WrapperInner>   
                        <S.Slide3ImgAndTextWrapper>
                            <h2>Sulcus Brush</h2>
                                <S.ListContainer>
                                    <ul>
                                        <li>Single tuft brush removes plaque along the gumline to help maintain healthy gums</li>
                                        <li>Soft antibacterial bristles provide effective and gentle cleaning<sup>2</sup></li>
                                        <li>Two angles allow for easy access to all areas of the mouth, including the lingual (A) and buccal (B) gumlines</li>
                                        <li>Easy to use Snap&gt;Ons Dual-Ended handle</li>
                                    </ul>      
                                </S.ListContainer>
                        <S.ImgWrapper>
                            <img src={Slide3Graphic1}/>
                        </S.ImgWrapper>  
                        </S.Slide3ImgAndTextWrapper>
                        <S.ImgWrapper5>
                            <img src={Slide3Graphic2}/>
                             <S.AntibacterialCallout>
                                <S.AntibacterialBadge $width="110px" $fontSize="14px">
                                    <span>Antibacterial</span>
                                    <span>Bristles<sup>9</sup></span>
                                </S.AntibacterialBadge>
                            </S.AntibacterialCallout>
                        </S.ImgWrapper5>

                    </S.Slide3WrapperInner>
                    <S.InfoGrid2>
                            <S.InfoGridRow>                            
                                <S.Column>642</S.Column>
                                <S.Column>1 Handle (2 Refills)</S.Column>
                                <S.Column>12/box</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="8px"/>
                    </S.InfoGrid2>
                    <S.CaptionWrapper>
                        <small>1. Data on File (DOF-0001)&nbsp;&nbsp;&nbsp;2. DOF-0046</small>
                    </S.CaptionWrapper> 
                    </S.Slide3WrapperOuter>
                </BaseCarouselSlide>
                </FlickityCarousel>   
            {/* <ShopifyIcon />                                                     */}
        </S.IDBrushesContainer>
    )
}