import * as S from "./IDBrushes.styles";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import ShopifyIcon from "../components/ShopifyIcon/ShopifyIcon";

import Slide1Row1Graphic from "../../../assets/btc/id-brushes/Slide1-Row1-Graphic.webp";
import Slide1Row2Graphic1 from "../../../assets/btc/id-brushes/Slide1Row2Graphic1.webp";

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

                <S.CarouselSlide>
                    <S.SlideWrapperInner>
                        <S.SlideRow1>
                            <S.Row1WrapperInner>
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
                                <S.ImgWrapper>
                                    <img src={Slide1Row1Graphic}/>
                                </S.ImgWrapper>
                            </S.Row1WrapperInner>
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
                            <S.Row1WrapperInner>
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
                                    <img src={Slide1Row2Graphic1}/>
                                </S.ImgInnerWrapper>
                                </S.TextAndImgWrapper>
                                <S.ImgWrapper2>
                                    {/* <img src={Slide1Row1Graphic}/> */}
                                </S.ImgWrapper2>
                            </S.Row1WrapperInner>
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
                <S.CarouselSlide></S.CarouselSlide>
                <S.CarouselSlide></S.CarouselSlide>
                </Flickity>
            </S.CarouselWrapper>    
            <ShopifyIcon />                                                    
        </S.IDBrushesContainer>
    )
}