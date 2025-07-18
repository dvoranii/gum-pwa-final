import * as S from "./Floss.styles";

import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";
import { BaseCarouselSlide } from "../../../styles/shared-styles";

import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";
import ShopifyIconLocal from "../../../assets/shopify-icon.webp";

import Slide1Floss1 from "../../../assets/btc/floss/Slide1Floss1.webp";
import Slide1Floss2 from "../../../assets/btc/floss/Slide1Floss2.webp";

import Slide2Floss1 from "../../../assets/btc/floss/Slide2Floss1.webp";
import Slide2Floss2 from "../../../assets/btc/floss/Slide2Floss2.png";

import Slide3Floss1 from "../../../assets/btc/floss/Slide3Floss.webp";
import Slide3Floss2 from "../../../assets/btc/floss/Slide3Floss2.webp";

import Slide4Floss from "../../../assets/btc/floss/Slide4Floss.webp";

export default function BtcFloss() {

  return (  
    <S.FlossWrapperOuter>
        <FlickityCarousel 
        $customStyles={{
            viewportHeight: '80vh',
            dotPosition: {
            bottom: '-28px',
            right: '44px'
            }
        }}
        >
        {/* Slide 1 */}

          <BaseCarouselSlide>
            <S.SlideWrapper>
                <S.SlideColumn1>
                    <S.ImgWrapper $width={"85%"}>
                        <img src={Slide1Floss1}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Comfort Slide Dental Floss</S.ColumnTitle> 
                    <small>(formerly known as EEZ-THRU)®</small> 
                    <S.ListContainer>
                        <ul>
                            <li>Non-stick floss glides effortlessly between even the tightest contacts and below the gumline</li>
                            <li>Monofilament constructions is exceptionally strong</li>
                            <li>Satin-like finish is soft and gentle on gums</li>
                        </ul>  

                        <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>2010 Comfort Slide</S.Column>
                                <S.Column>3.6m</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>
                                <S.Column>2014 Comfort Slide Mint</S.Column>
                                <S.Column>3.6m</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>
                                <S.Column>2006 Comfort Slide Mint</S.Column>
                                <S.Column>2x40m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                        </S.InfoGrid>
                    </S.ListContainer>  
                </S.SlideColumn1>
                <S.SlideColumn2>
                    <S.ImgWrapper $width={"85%"}><img src={Slide1Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle>Dual-Defence® Twisted String Floss</S.ColumnTitle>
                        <S.ListContainer>
                            <ul>
                                <li>Textured, twisted floss with fresh minty flavour</li>
                                <li>Removes <span>2x more plaque</span><sup>1</sup></li>
                                <li>Covers <span>30% more</span> surface area<sup>2</sup></li>
                            </ul>  

                        <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>2008 Dual-Defence Waxed Mint</S.Column>
                                <S.Column>3.6mm</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                                <S.Column>2x35m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                        </S.InfoGrid>
                        <br/>
                        </S.ListContainer>  
                </S.SlideColumn2>     
            </S.SlideWrapper>
          </BaseCarouselSlide>

          {/* Slide 2 */}

          <BaseCarouselSlide>
            <S.SlideWrapper>
                <S.SlideColumn1>
                    <S.ImgWrapper $width={"85%"}>
                        <img src={Slide2Floss1}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Deep Clean Expanding Dental Floss</S.ColumnTitle> 
                    <S.ListContainer>
                        <ul>
                            <li>Thin and easy to insert, even between tight contacts</li>
                            <li>Floss expands during use to remove <span>2X more plaque</span><sup>1</sup></li>
                            <li>Multiple filaments and texturized fibers for exceptional cleaning</li>
                        </ul>  

                        <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>2010 Comfort Slide</S.Column>
                                <S.Column>3.6m</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>
                                <S.Column>2014 Comfort Slide Mint</S.Column>
                                <S.Column>3.6m</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                        </S.InfoGrid>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                    </S.ListContainer> 
                </S.SlideColumn1>
                <S.SlideColumn2>
                    <S.ImgWrapper $width={"100%"}><img src={Slide2Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle>Pro-Weave® Dental Floss</S.ColumnTitle>
                        <small>(formerly known as BUTLERWEAVE)®</small> 
                        <S.ListContainer>
                            <ul>
                                <li>Removes <span>2x more plaque</span><sup>1</sup></li>
                                <li>Unique woven design effectively removes biofilm between teeth and below the gumline</li>
                                <li>The unique interlacing process produces a strong, smooth floss engineered not to shred, break or sag<sup>3</sup></li>
                            </ul>  

                        <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>2008 Dual-Defence Waxed Mint</S.Column>
                                <S.Column>3.6mm</S.Column>
                                <S.Column>144/box</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                                <S.Column>2x35m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                                <S.Column>2x35m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                                <S.Column>2x35m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column>2008C Dual-Defence Waxed Mint</S.Column>
                                <S.Column>2x35m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                        </S.InfoGrid>

                        </S.ListContainer>  
                </S.SlideColumn2>     
            </S.SlideWrapper>
          </BaseCarouselSlide>

        {/* Slide 3 */}
          <BaseCarouselSlide>
            <S.SlideWrapper>
                <S.SlideColumn1>
                    <S.ImgWrapper $width={"85%"}>
                        <img src={Slide3Floss1}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Fine Dental Floss</S.ColumnTitle> 
                        <S.ListContainer $flexGrow="0">
                            <ul>
                                <li>Thin shred-resistant floss for cleaning between<br/> tightly spaced teeth and below the gumline<sup>13</sup>.</li>                  
                            </ul>  

                        <S.InfoGrid $marginTop="0" $paddingTop="0.4rem">
                            <S.InfoGridRow>                            
                                <S.Column2>1940 Fine Waxed Mint</S.Column2>
                                <S.Column2>165m</S.Column2>
                                <S.Column2>12/bag</S.Column2>
                            </S.InfoGridRow>
                            <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                        </S.InfoGrid>
                        </S.ListContainer> 
                </S.SlideColumn1>
                <S.SlideColumn2>
                    <S.ImgWrapper $width={"80%"}><img src={Slide3Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle><span>Easy</span>Thread® Floss</S.ColumnTitle>
                        <small>(formerly known as EEZ-THRU)®</small> 
                        <p>GUM® EasyThread® Floss is designed to make flossing around braces, bridges, and implants easy.</p>
                        <S.ListContainer>
                            <ul>
                                <li>Stiff threader sections provide easy access to hard-to-clean spaces without irritating the gums</li>
                                <li>Double-ended threader sections to maximize cleaning with each strand</li>
                                <li>Features "puffy" floss designed for enhanced plaque removal</li>
                                <li>Innovative, hygienic packaging reduces tangles and waste</li>
                                <li>Office dispenser is rewindable to ensure just the right amount of floss is dispensed</li>
                            </ul>  

                        <S.InfoGrid $gridCols="1.65fr 1fr" $paddingTop="0.4rem">
                            <S.InfoGridRow>                            
                                <S.Column2>3200 EasyThread® Floss Patient Packs</S.Column2>
                                <S.Column2>1 pkg. / 100 env of 5</S.Column2>
                            </S.InfoGridRow>
                            <S.InfoGridRow>                            
                                <S.Column2>3210 EasyThread® Floss Office Dispensers</S.Column2>
                                <S.Column2>1 pkg. / 6 dispensers of 50</S.Column2>
                            </S.InfoGridRow>
                            
                        </S.InfoGrid>
                        </S.ListContainer> 
                       <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                </S.SlideColumn2>
            </S.SlideWrapper>
          </BaseCarouselSlide>

          {/* Slide 4 */}
          
            <BaseCarouselSlide>
                    <S.SlideWrapper $width="80%">
                    <S.SlideColumn1>
                    <S.ImgWrapper $width={"50%"} $marginLeft="-36px;">
                        <img src={Slide4Floss}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle><span>EEZ-</span>Thru® Floss Threaders</S.ColumnTitle> 
                        <S.ListContainer $flexGrow="0" $width="50%"  $listFontSize="16px" $listPaddingBottom="0.8rem">
                            <ul>
                                <li>Versatile nylon loop helps patients thread floss through spaces where most other products cannot reach: under bridges, between connected crowns, around orthodontic appliances, lingual wires and implants</li>                  
                            </ul>  
                        </S.ListContainer> 
                        <S.InfoGrid $marginTop="0" $paddingTop="0.4rem" $gridCols="2fr 1fr" $width="60%">
                            <S.InfoGridRow>                            
                                <S.Column2>840 Eez-Thru® Floss Threaders</S.Column2>
                                <S.Column2>1 box/ 100 env. of 5</S.Column2>
                            </S.InfoGridRow>
                        </S.InfoGrid>
                        <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="4px"/>
                    </S.SlideColumn1>
                    </S.SlideWrapper>
                </BaseCarouselSlide>
        </FlickityCarousel >       
      {/* <ShopifyIcon /> */}
    </S.FlossWrapperOuter>
  );
}