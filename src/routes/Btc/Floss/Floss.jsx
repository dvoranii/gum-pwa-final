import * as S from "./Floss.styles";
import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';
import ShopifyIcon from "../components/ShopifyIcon/ShopifyIcon";
import Slide1Floss1 from "../../../assets/btc/floss/Slide1Floss1.webp";
import Slide1Floss2 from "../../../assets/btc/floss/Slide1Floss2.webp";
import Slide2Floss1 from "../../../assets/btc/floss/Slide2Floss1.webp";
import Slide2Floss2 from "../../../assets/btc/floss/Slide2Floss2.png";
import Slide3Floss from "../../../assets/btc/floss/Slide3Floss.webp";
export default function BtcFloss() {
    const flickityOptions = {
        initialIndex: 0,
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: true,
        pageDots: true,
        contain: true,
        cellAlign: 'center'
    };
    return (<S.FlossWrapperOuter>
      <S.CarouselWrapper>
        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={true} static={false}>

        {/* Slide 1 */}

          <S.CarouselSlide>
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
                            <br />
                        </S.InfoGrid>

                        </S.ListContainer>  
                </S.SlideColumn2>     
            </S.SlideWrapper>
          </S.CarouselSlide>

          {/* Slide 2 */}

          <S.CarouselSlide>
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
                            <br />
                            <br />
                            <br />
                        </S.InfoGrid>
                    </S.ListContainer>  
                </S.SlideColumn1>
                <S.SlideColumn2>
                    <S.ImgWrapper $width={"100%"}><img src={Slide2Floss2}/></S.ImgWrapper>
                    <S.ColumnTitle>Pro-Wave® Dental Floss</S.ColumnTitle>
                        <small>(formerly known as EEZ-THRU)®</small> 
                        <S.ListContainer>
                            <ul>
                                <li>Removes <span>2x more plaque</span><sup>1</sup></li>
                                <li>Unique woven design effectively removes biofil between teeth and below the gumline</li>
                                <li>The unique interlacing process poduces a strong, smooth floss engineered not to shred, break or sag<sup>3</sup></li>
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
                            
                        </S.InfoGrid>

                        </S.ListContainer>  
                </S.SlideColumn2>     
            </S.SlideWrapper>
          </S.CarouselSlide>

        {/* Slide 3 */}
          <S.CarouselSlide>
            <S.SlideWrapper>
                <S.SlideColumn1>
                    <S.ImgWrapper $width={"100%"}>
                        <img src={Slide3Floss}/>
                    </S.ImgWrapper>
                    <S.ColumnTitle>Fine Dental Floss</S.ColumnTitle> 
                        <S.ListContainer>
                            <ul>
                                <li>Thin shred-resistant floss for cleaning between<br /> tightly spaced teeth and below the gumline</li>                  
                            </ul>  

                        <S.InfoGrid>
                            <S.InfoGridRow>                            
                                <S.Column>1940 Fine Waxed Mint</S.Column>
                                <S.Column>165m</S.Column>
                                <S.Column>12/bag</S.Column>
                            </S.InfoGridRow>
                        </S.InfoGrid>

                        </S.ListContainer>  
                </S.SlideColumn1>
            </S.SlideWrapper>
          </S.CarouselSlide>

        </Flickity>
        
      </S.CarouselWrapper>
      <ShopifyIcon />
    </S.FlossWrapperOuter>);
}
