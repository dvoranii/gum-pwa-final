import * as S from "./Flossers.styles";
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import Slide1Graphic from "../../../assets/btc/flosser/Slide1Graphic.webp";
// import ShopifyIcon from "../../../assets/btc/shopify-icon.webp";
import ShopifyIcon from "../components/ShopifyIcon/ShopifyIcon";

export default function BtcFlossers(){

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
        <S.FlossersContainer>
            <S.CarouselWrapper>
            <Flickity
                className={'carousel'} 
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={true}          
                static={false}
            >

            {/* Slide 1 */}

             <S.CarouselSlide>
                <S.SlideWrapper>
                    <S.SlideColumn1>
                        <h4><span>Eco</span> <span>Clean®</span> <span>Flossers</span> <span>Mint</span></h4>
                        <S.ListContainer>
                            <ul>
                                <li>Textured floss effectively removes 2x more plaque<sup>2</sup> and is designed to resist shredding or breaking<sup>5</sup></li>
                                <li>Lightweight handle is crafted from 70% plant-based materials</li>
                                
                            </ul>  
                        </S.ListContainer>
                        <h4><span>Twisted</span> <span>Mint™</span> <span>Flossers</span></h4>
                         <S.ListContainer>
                            <ul>
                                <li>Twisted mint floss removes 2x more plaque<sup>2</sup> and covers 30% more surface area<sup>3</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>
                                
                            </ul>  
                        </S.ListContainer>
                        <h4><span>Comfort</span> <span>Slide</span> <span>Flossers</span> <span>Mint</span></h4>
                        <S.ListContainer>
                            <ul>
                                <li>Silky, non-stick mint floss easily slides between the tightest contacts for gentle and effective flossing</li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>
                            </ul>  
                        </S.ListContainer>
                        <h4><span>Comfort</span> <span>Care</span> <span>Flossers</span> <span>Mint</span> with Vitamin E & Fluoride</h4>
                        <S.ListContainer>
                            <ul>
                                <li>Durable floss coated with Vitamin E & Fluoride is designed to resist shredding or breaking<sup>5</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>                  
                            </ul>  
                        </S.ListContainer>
                        <h4><span>Professional</span> <span>Clean®</span> <span>Flossers</span> <span>Mint</span></h4>
                        <S.ListContainer>
                            <ul>
                                <li>Textured floss effectively removes 2x more plaque<sup>2</sup> and is designed to resist shredding or breaking<sup>5</sup></li>
                                <li>Lightweight flexible grip uses 20% less plastic<sup>4</sup></li>                  
                            </ul>  
                        </S.ListContainer>
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
               </S.CarouselSlide>

            {/* Slide 2 */}

             <S.CarouselSlide>
                <S.SlideWrapper>
                    <S.SlideColumn1>
                        <h4>Hello</h4>
                    </S.SlideColumn1>
                    <S.SlideColumn2>
                        <h4>Hello</h4>
                    </S.SlideColumn2>

                    </S.SlideWrapper>
               </S.CarouselSlide>
            </Flickity>
            </S.CarouselWrapper>
            <ShopifyIcon/>
        </S.FlossersContainer>
    )
}