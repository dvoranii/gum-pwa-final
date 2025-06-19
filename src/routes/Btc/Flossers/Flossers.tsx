import * as S from "./Flossers.styles";
import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";
import Slide1Graphic from "../../../assets/btc/flosser/Slide1Graphic.webp";
import Slide2Graphic from "../../../assets/btc/flosser/Slide2Graphic.webp";
import Slide2GraphicSmall from "../../../assets/btc/flosser/Asset2.png"
import ShopifyIcon from "../components/ShopifyIcon/ShopifyIcon";

export default function BtcFlossers(){

    return(
        <S.FlossersContainer>
            <FlickityCarousel 
                $customStyles={{
                    viewportHeight: '80vh',
                    dotPosition: {
                    bottom: '-28px',
                    right: '94px'
                    }
                }}
            >

            {/* Slide 1 */}

             <BaseCarouselSlide>
                <S.SlideWrapper>
                    <S.SlideColumn1>
                        <S.TitleListWrapper>
                            <h4><span>Eco</span> <span>Clean®</span> <span>Flossers</span> <span>Mint</span></h4>
                            <S.ListContainer>
                                <ul>
                                    <li>Textured floss effectively removes 2x more plaque<sup>2</sup> and is designed to resist shredding or breaking<sup>5</sup></li>
                                    <li>Lightweight handle is crafted from 70% plant-based materials</li>
                                    
                                </ul>  
                            </S.ListContainer>
                        </S.TitleListWrapper>
                        <S.TitleListWrapper>
                        <h4><span>Twisted</span> <span>Mint™</span> <span>Flossers</span></h4>
                         <S.ListContainer>
                            <ul>
                                <li>Twisted mint floss removes 2x more plaque<sup>2</sup> and covers 30% more surface area<sup>3</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>
                                
                            </ul>  
                        </S.ListContainer>
                        </S.TitleListWrapper>
                        <S.TitleListWrapper>
                        <h4><span>Comfort</span> <span>Slide</span> <span>Flossers</span> <span>Mint</span></h4>
                        <S.ListContainer>
                            <ul>
                                <li>Silky, non-stick mint floss easily slides between the tightest contacts for gentle and effective flossing</li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>
                            </ul>  
                        </S.ListContainer>
                        </S.TitleListWrapper>
                        <S.TitleListWrapper>
                        <h4><span>Comfort</span> <span>Care</span> <span>Flossers</span> <span>Mint</span> with Vitamin E & Fluoride</h4>
                        <S.ListContainer>
                            <ul>
                                <li>Durable floss coated with Vitamin E & Fluoride is designed to resist shredding or breaking<sup>5</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>                  
                            </ul>  
                        </S.ListContainer>
                        </S.TitleListWrapper>
                         <S.TitleListWrapper>
                        <h4><span>Professional</span> <span>Clean®</span> <span>Flossers</span> <span>Mint</span></h4>
                        <S.ListContainer>
                            <ul>
                                <li>Textured floss effectively removes 2x more plaque<sup>2</sup> and is designed to resist shredding or breaking<sup>5</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>                  
                            </ul>  
                        </S.ListContainer>
                        </S.TitleListWrapper>
                    </S.SlideColumn1>
                    <S.SlideColumn2>
                        <S.ImgWrapper>
                            <img src={Slide1Graphic}/>    
                        </S.ImgWrapper>
                        
                            <S.InfoGrid>
                                <S.Row>                            
                                    <S.Column>831 Eco Clean™ Flosser Mint</S.Column>
                                    <S.Column>48 packs of 2</S.Column>
                                </S.Row>
                                <S.Row>
                                    <S.Column>828 Twisted Mint™ Flosser</S.Column>
                                    <S.Column>48 packs of 3</S.Column>
                                </S.Row>
                                <S.Row>
                                    <S.Column>887 Comfort Slide Flossers Mint</S.Column>
                                    <S.Column>48 packs of 2</S.Column>
                                </S.Row>
                                <S.Row>
                                    <S.Column>888 Advanced Care Flossers Mint + Vit E & Fluoride</S.Column>
                                    <S.Column>48 packs of 3</S.Column>
                                </S.Row>
                                <S.Row>
                                    <S.Column>891 Professional Clean Flossers Mint</S.Column>
                                    <S.Column>48 packs of 3</S.Column>
                                </S.Row>
                            </S.InfoGrid>
                    </S.SlideColumn2>

                    </S.SlideWrapper>
             </BaseCarouselSlide>

            {/* Slide 2 */}

             <BaseCarouselSlide>
                <S.SlideWrapper>
                    <S.SlideColumn1>
                        <S.TitleListWrapper $paddingTop="0">
                            <h4><span>Professional</span> <span>Clean Plus</span><br/> <span>Flosser Picks</span> <span>Mint</span></h4>
                            <S.ListContainer>
                                <ul>
                                    <li>Specialy designed rubber pick massages gums while gently removing debris</li>
                                    <li>Strong floss designed to slide easily between teeth and resist shredding or breaking</li>
                                    
                                </ul>  
                            </S.ListContainer>
                        </S.TitleListWrapper>
                     
                        <S.TitleListWrapper $paddingTop="1.2rem">
                            <h4><span>Dual</span> <span>Technique®</span><br/> <span>Flossers</span> <span>Mint</span></h4>
                            <S.ListContainer>
                                <ul>
                                    <li>Dual ends specifically designed to reach front and back teeth</li>
                                    <li>Twisted mint floss on the angled side removes 2x more plaque<sup>2</sup> and covers 30% more surface area<sup>3</sup></li>
                                    
                                </ul>  
                            </S.ListContainer>
                        </S.TitleListWrapper>

                        <S.ImgWrapper2>
                            <img src={Slide2GraphicSmall}/>
                        </S.ImgWrapper2>
                    </S.SlideColumn1>
                    <S.SlideColumn2>
                        <S.ImgWrapper>
                            <img src={Slide2Graphic}/>
                        </S.ImgWrapper>
                         <S.InfoGrid $width="90%">
                                <S.Row>                            
                                    <S.Column>885 Professional Clean PLUS Flosser Mint</S.Column>
                                    <S.Column>48 packs of 2</S.Column>
                                </S.Row>
                                <S.Row>
                                    <S.Column>821 Dual Technique® Flossers Mint</S.Column>
                                    <S.Column>48 packs of 3</S.Column>
                                </S.Row>
                        </S.InfoGrid>
                    </S.SlideColumn2>
                    </S.SlideWrapper>
             </BaseCarouselSlide>
            </FlickityCarousel>
            <ShopifyIcon/>
        </S.FlossersContainer>
    )
}