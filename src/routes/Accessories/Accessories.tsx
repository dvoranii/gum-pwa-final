
import * as S from "./Accessories.styles";
import InnerNav from "../../components/InnerNav/InnerNav";
import { Outlet, useLocation } from 'react-router-dom';
import ModuleContainer from "../../components/ModuleContainer/ModuleContainer";

import Flickity from 'react-flickity-component';
import 'flickity/dist/flickity.min.css';

import Slide1Row1Img from "../../assets/accessories/Slide1Row1Img.webp";
import Slide1Row2Img from "../../assets/accessories/Slide1Row2Img.webp";
import Slide2Row1Img from "../../assets/accessories/Slide2Row1Img.webp";
import Slide2Row2Img from "../../assets/accessories/Slide2Row2Img.webp";

import ShopifyIcon from "../../components/ShopifyIcon/ShopifyIcon";
import FlickityCarousel from "../../components/FlickityCarousel/FlickityCarousel";


const accessoriesNavItems = [
  { path: "/accessories", label: "Accessories", end: true },
  { path: "/recommend", label: "Recommend" }
];

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  prevNextButtons: true,
  pageDots: true,
  contain: true,
  cellAlign: 'center'
};


export default function Accessories() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/accessories";

  return (
    <ModuleContainer>
      <InnerNav navItems={accessoriesNavItems} />
      
      <S.Content>
      {isHomeRoute ? (
        <S.AccessoriesWrapperOuter>
                <FlickityCarousel
                  $customStyles={{
                  viewportHeight: '68vh',   
                  dotPosition: {
                    bottom: '-6vw', 
                    right: '24px',
                  }
                }}
                >

                  <S.Slide>
                    <S.Row>
                      <S.RowWrapperInner $gap={"1.2rem"}>
                      <S.TextWrapper>
                        <h2>Orthodontic <span>Wax</span></h2>
                        <S.ListContainer>
                          <ul>
                            <li>Clear wax adheres to orthodontic appliances</li>
                            <li>Available in unflavoured (723) and mint (724)<br/> in a portable container</li>
                          </ul>
                        </S.ListContainer>
                      </S.TextWrapper>
                      <S.ImgWrapper>
                        <img src={Slide1Row1Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"45%"}>
                        <p>723 Orthodontic Wax w/Vitamin E</p>
                        <p>24/box</p>
                      </S.MetaDataWrapper>
                      <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="6px"/>
                    </S.Row>
                    <S.Row>
                      <S.RowWrapperInner $gap={"1.2rem"}>
                      <S.TextWrapper>
                        <h2>Travel Caps</h2>
                        <S.ListContainer>
                          <ul>
                            <li>Help make your patients' away-from-home<br/> oral care more portable and convenient</li>
                            <li>Antibacterial coating keeps toothbrush<br/> cleaner between uses</li>
                            <li>Fit most toothbrush styles</li>
                          </ul>
                        </S.ListContainer>
                      </S.TextWrapper>
                      <S.ImgWrapper>
                        <img src={Slide1Row2Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"30%"}>
                        <p>152 Travel Caps</p>
                        <p>12/box</p>
                      </S.MetaDataWrapper>
                      <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="6px"/>
                    </S.Row>
                  </S.Slide>
                  <S.Slide>
                    <S.Row>
                      <S.RowWrapperInner $gap="2.4rem">
                      <S.TextWrapper>
                        <h2>Simulator<br/>
                        <span>Handle & Refills</span></h2>
                        <S.ListContainer>
                          <ul>
                            <li>Rubber tip stimulator for gingival massage and interproximal cleaning</li>
                            <li>Slender angled neck for easy maneuverability around arches</li>
                          </ul>
                        </S.ListContainer>
                      </S.TextWrapper>
                      <S.ImgWrapper $width={"100%"} $flex={"1.3"}>
                        <img src={Slide2Row1Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"386px"}>
                        <p>600 Handle</p>
                        <p>12/bag</p>
                      </S.MetaDataWrapper>
                      <S.MetaDataWrapper $width={"546px"}>
                        <p>601 Refills</p>
                        <p>12 Packs with 3 Refills each</p>
                      </S.MetaDataWrapper>
                      <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="6px"/>
                    </S.Row>
                    <S.Row>
                      <S.RowWrapperInner $gap="1.2rem">
                      <S.TextWrapper>
                        <h2><span>2-in-1</span> Tongue Cleaner</h2>
                        <S.ListContainer>
                          <ul>
                            <li>Two rows of bristles reach into tiny grooves on the tongue's surface to dislodge bacteria and food particles</li>
                            <li>Two rows of serrated scrapers gently remove bacteria and food particles while cleaning the tongue's surface</li>
                            <li>Narrow head reduces gag reflex</li>
                          </ul>
                        </S.ListContainer>
                      </S.TextWrapper>
                      <S.ImgWrapper $width={"100%"} $flex={"1.3"}>
                        <img src={Slide2Row2Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"45%"}>
                        <p>760 2-in-1 Tongue Cleaner</p>
                        <p>12/box</p>
                      </S.MetaDataWrapper>
                      <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="6px"/>
                    </S.Row>
                  </S.Slide>
                </FlickityCarousel>
          </S.AccessoriesWrapperOuter>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}