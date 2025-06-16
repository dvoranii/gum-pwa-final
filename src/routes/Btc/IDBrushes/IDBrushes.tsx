import * as S from "./IDBrushes.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import ShopifyIcon from "../components/ShopifyIcon/ShopifyIcon";

import Slide1Row1Graphic1 from "../../../assets/btc/id-brushes/Slide1Row1Graphic1.webp";
import Slide1Row1Graphic2 from "../../../assets/btc/id-brushes/Slide1Row1Graphic2.webp";
import Slide1Graphic3 from "../../../assets/btc/id-brushes/Asset8.png";

import Slide1Row1Graphic from "../../../assets/btc/id-brushes/Slide2Row1Graphic.webp";
import Slide2Row2Graphic1 from "../../../assets/btc/id-brushes/Slide2Row2Graphic1.webp";
import Slide2Row2Graphic2 from "../../../assets/btc/id-brushes/Slide1Row2Graphic2.webp";

import Slide3Graphic1 from "../../../assets/btc/id-brushes/Slide3Graphic1.webp";
import Slide3Graphic2 from "../../../assets/btc/id-brushes/Slide3Graphic2.webp";

export default function BtcIDBrushes() {

    const flickityOptions = {
        initialIndex: 0,
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        contain: true,
        cellAlign: 'center'
  };

    return(
        <S.IDBrushesContainer>
            <S.CarouselWrapper>
                <Flickity
                    className={'carousel'} 
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={true}          
                    static={false}
                >

                {/* SLIDE 1 */}
                <S.CarouselSlide>
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
                            <S.ImgWrapper>
                                <img src={Slide1Row1Graphic1}/>
                            </S.ImgWrapper>
                        </S.Row1WrapperInner>
                            <S.ImgWrapper1>
                                <img src={Slide1Row1Graphic2}/>
                            </S.ImgWrapper1>
                        </S.Row1WrapperOuter>
                        <S.ImgWrapper2>
                            <img src={Slide1Graphic3}/>
                        </S.ImgWrapper2>
                    </S.SlideWrapperInner>
                </S.CarouselSlide>

                {/* SLIDE 2 */}

                <S.CarouselSlide>
                    <S.SlideWrapperInner>
                        <S.SlideRow1>
                            <S.Row1WrapperInner2>
                                <S.TextWrapper>
                                    <h2>Proxabrush® Angle Cleaners</h2>
                                    <S.ListContainer>
                                        <ul>
                                            <li>Trianglular-shaped bristles remove 25% more plaque than conventional round bristles<sup>1</sup></li>
                                            <li>Angled neck helps patients reach hard-to-clean interdental surfaces</li>
                                            <li>Small cylindrical shape (3012) fits in spaces as small as 0.9mm, tapered shape (3014) fits in spaces as small as 1.2mm</li>
                                            <li>Comes with carrying case</li>
                                        </ul>      
                                </S.ListContainer>
                                </S.TextWrapper>
                                <S.ImgWrapper3>
                                    <img src={Slide1Row1Graphic}/>
                                </S.ImgWrapper3>
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
                        </S.InfoGrid>
                        </S.SlideRow1>
                        <br/>
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
                                    <img src={Slide2Row2Graphic1}/>
                                </S.ImgInnerWrapper>
                                </S.TextAndImgWrapper>
                                <S.ImgWrapper4>
                                    <img src={Slide2Row2Graphic2}/>
                                </S.ImgWrapper4>
                            </S.Row1WrapperInner2>
                            <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle hidden={true}>●</S.ColoredCircle>
                                    <span>3012 ProxaBrush® Angle Cleaners</span>
                                    </S.Column>
                                <S.Column>Tight Cylindrical</S.Column>
                                <S.Column>36/box</S.Column>
                            </S.InfoGridRow>
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
                                    <S.ColoredCircle color="#a91d55">●</S.ColoredCircle>
                                    <span>3014 ProxaBrush® Angle Cleaners</span>
                                </S.Column>
                                <S.Column>Tight Tapered</S.Column>
                                <S.Column>36/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>
                                    <S.ColoredCircle color="#00abd2">●</S.ColoredCircle>
                                    <span>3014 ProxaBrush® Angle Cleaners</span>
                                </S.Column>
                                <S.Column>Tight Tapered</S.Column>
                                <S.Column>36/box</S.Column>
                            </S.InfoGridRow>
                        </S.InfoGrid>
                        </S.SlideRow2>
                    </S.SlideWrapperInner>
                </S.CarouselSlide>

                {/* SLIDE 3 */}

                <S.CarouselSlide>
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
                        </S.ImgWrapper5>

                    </S.Slide3WrapperInner>
                    <S.InfoGrid2>
                            <S.InfoGridRow>                            
                                <S.Column>642</S.Column>
                                <S.Column>1 Handle (2 Refills)</S.Column>
                                <S.Column>12/box</S.Column>
                            </S.InfoGridRow>
                    </S.InfoGrid2>
                    <S.CaptionWrapper>
                        <small>1. Data on File (DOF-0001)&nbsp;&nbsp;&nbsp;2. DOF-0046</small>
                    </S.CaptionWrapper> 
                    </S.Slide3WrapperOuter>
                </S.CarouselSlide>

                </Flickity>
            </S.CarouselWrapper>    
            <ShopifyIcon />                                                    
        </S.IDBrushesContainer>
    )
}