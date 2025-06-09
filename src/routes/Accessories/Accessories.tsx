
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

import ShopifyIcon from "../Btc/components/ShopifyIcon/ShopifyIcon";


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
          <S.CarouselWrapper>
                <Flickity
                    className={'carousel'}
                    elementType={'div'}
                    options={flickityOptions}
                    disableImagesLoaded={false}
                    static={false}
                >

                  <S.Slide>
                    <S.Row>
                      <S.RowWrapperInner>
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

                    </S.Row>
                    <S.Row>
                      <S.RowWrapperInner>
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
                    </S.Row>
                  </S.Slide>
                  <S.Slide>
                    <S.Row>
                      <S.RowWrapperInner>
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
                        <img src={Slide2Row1Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"45%"}>
                        <p>723 Orthodontic Wax w/Vitamin E</p>
                        <p>24/box</p>
                      </S.MetaDataWrapper>

                    </S.Row>
                    <S.Row>
                      <S.RowWrapperInner>
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
                        <img src={Slide2Row2Img}/>
                      </S.ImgWrapper>
                      </S.RowWrapperInner>
                      <S.MetaDataWrapper $width={"30%"}>
                        <p>152 Travel Caps</p>
                        <p>12/box</p>
                      </S.MetaDataWrapper>
                    </S.Row>
                  </S.Slide>

                </Flickity>
          </S.CarouselWrapper>
          <ShopifyIcon/>
          </S.AccessoriesWrapperOuter>
          ) : (
            <Outlet />
          )}
      </S.Content>
    </ModuleContainer>
  );
}