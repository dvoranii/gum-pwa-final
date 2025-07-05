import * as S from "./ToothbrushSpecialty.styles";
import FlickityCarousel from "../../../components/FlickityCarousel/FlickityCarousel";

import Slide1Brush1 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush1.webp";
import Slide1Brush2 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush2.webp";
import Slide1Brush3 from "../../../assets/toothbrush/Specialty/Slide1/Slide1Brush3.webp";

import Slide1Col1TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col1TopImg.webp";
import Slide1Col2TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col2TopImg.webp";
import Slide1Col3TopImg from "../../../assets/toothbrush/Specialty/Slide1/Slide1Col3TopImg.webp";

import TravelBrushImage from "../../../assets/toothbrush/Specialty/Slide2/Slide2Brush1.webp";
import DentureBrushImage from "../../../assets/toothbrush/Specialty/Slide2/Slide2Brush2.webp";
import TravelBrushDiagram from "../../../assets/toothbrush/Specialty/Slide2/Slide2Col1TopImg.webp";
import DentureBrushDiagram from "../../../assets/toothbrush/Specialty/Slide2/Slide2Col2TopImg.webp";
import ShopifyIcon from "../../../components/ShopifyIcon/ShopifyIcon";
import { TitleLight } from "../components/ProductSlide/ProductSlide.styles";

import {BrushImgWrapper, BrushSpecsWrapper, SpecItem, SpecLabel, SpecValue} from "../components/ProductSlide/ProductSlide.styles";

export default function ToothbrushAdult() {
  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel 
        $customStyles={{
          dotPosition: {
            bottom: '-30px',
            right: '34px'
          }
        }}
      >
        <S.CarouselSlide>
          <S.SlideContainer>
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="56px">
                <img src={Slide1Brush1} alt="Orthodontic toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img src={Slide1Col1TopImg} alt="Orthodontic brush head diagram" />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>ORTHODONTIC<br /><TitleLight>Toothbrush</TitleLight></h2>
                    <ul>
                      <li>This "V" trim brush facilitates cleaning around orthodontic appliances such as brackets, arch wires, buttons and ligatures. Also available as a travel brush</li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Item</SpecLabel>
                        <SpecValue>124</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Soft</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Trim</SpecLabel>
                        <SpecValue>V-Trim</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>30</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            {/* End-Tuft Brush */}
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="55px">
                <img src={Slide1Brush2} alt="End-tuft brush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img src={Slide1Col2TopImg} alt="End-tuft brush head diagram" />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $paddingRight="1.2rem">
                    <h2>END-TUFT<br /><TitleLight>Brush</TitleLight></h2>
                    <ul>
                      <li>Small brush head addresses special maintenance concerns, including orthodontic bands, furcations, implants, distal of last molar, and other hard-to-reach areas</li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Item</SpecLabel>
                        <SpecValue>308</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Soft</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Trim</SpecLabel>
                        <SpecValue>Tapered</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>7</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            {/* Post-Operation Toothbrush */}
            <S.Column>
              <BrushImgWrapper $containerWidth="100%" $imgMinWidth="56px">
                <img src={Slide1Brush3} alt="Post-operation toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter>
                <S.TextAndImgWrapper>
                  <S.DiagramsWrapper>
                    <img src={Slide1Col3TopImg} alt="Post-operation brush head diagram" />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>POST-OPERATION<br /><TitleLight>Toothbrush</TitleLight></h2>
                    <ul>
                      <li>Ultra-soft .004 inch bristles are ideal for post surgical cleaning, gum disease, mouth irritations, extractions, implants and grafts</li>
                      <li>Extremely soft and gentle on gums</li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="100%">
                    <S.BrushSpecsGrid>
                      <SpecItem>
                        <SpecLabel>Item</SpecLabel>
                        <SpecValue>317</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Delicate</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Trim</SpecLabel>
                        <SpecValue>Flat</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>32</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>
          </S.SlideContainer>
        </S.CarouselSlide>

      <S.CarouselSlide>
        <S.SlideContainer $columns={2} $width="80%" $colGap="0">
          <S.Column>
            <BrushImgWrapper $containerWidth="50%" $brushImgHeight="83%">
              <img src={TravelBrushImage} alt="Travel toothbrush" />
            </BrushImgWrapper>
            <S.TextAndImgWrapperOuter $height="90%">
              <S.TextAndImgWrapper $height="85%" $padding="0">
                <S.DiagramsWrapper $marginBottom="0.4rem" $width="75%">
                  <img src={TravelBrushDiagram} alt="Travel brush diagram" />
                </S.DiagramsWrapper>
                <S.TextWrapper $paddingRight="4.7rem" $listFontSize="1.1rem">
                  <h2>TRAVEL <TitleLight>Toothbrush</TitleLight></h2>
                  <ul>
                    <li>Dual-function handle is also a ventilated snap-lock cap when not in use</li>
                    <li>Multi-level trim designs for enhanced subgingival and interproximal accesses</li>
                    <li>Also available in an orthodontic "V" trim</li>
                  </ul>
                </S.TextWrapper>
                <BrushSpecsWrapper $width="65%">
                  <S.BrushSpecsGrid $gap="0"> {/* New specialized grid */}
                    <SpecItem><SpecLabel>Item</SpecLabel><SpecValue>153</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Texture</SpecLabel><SpecValue>Soft</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Trim</SpecLabel><SpecValue>Multi&nbsp;level</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Tufts</SpecLabel><SpecValue>32</SpecValue></SpecItem>
                  </S.BrushSpecsGrid>
                  <S.BrushSpecsGrid $paddingTop="0.5rem" $gap="0">
                    <SpecItem><SpecValue>125</SpecValue></SpecItem>
                    <SpecItem><SpecValue>Soft</SpecValue></SpecItem>
                    <SpecItem><SpecValue>V-Trim</SpecValue></SpecItem>
                    <SpecItem><SpecValue>32</SpecValue></SpecItem>
                  </S.BrushSpecsGrid>
                </BrushSpecsWrapper>
                  <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
              </S.TextAndImgWrapper>
            </S.TextAndImgWrapperOuter>
          </S.Column>

          {/* Right Column - Denture Brush */}
          <S.Column>
            <BrushImgWrapper $containerWidth="50%" $brushImgHeight="83%" $imgMinWidth="101px">
              <img src={DentureBrushImage} alt="Denture brush" />
            </BrushImgWrapper>
            <S.TextAndImgWrapperOuter $height="86.5%">
              <S.TextAndImgWrapper $height="80%" $padding="0">
                <S.DiagramsWrapper $marginBottom="0.4rem" $width="43%">
                  <img src={DentureBrushDiagram} alt="Denture brush diagram" />
                </S.DiagramsWrapper>
                <S.TextWrapper $paddingRight="6.2rem" $listFontSize="1.1rem">
                  <h2>DENTURE <TitleLight>Brush</TitleLight></h2>
                  <ul>
                    <li>Flat trim, firm nylon design effectively cleans denture surfaces. Tapered brush cleans smaller hard-to-reach areas</li>
                    <li>Lever grip reduces effort for patients with limited dexterity</li>
                  </ul>
                </S.TextWrapper>
                <BrushSpecsWrapper $width="65%">
                  <S.BrushSpecsGrid $gap="0">
                    <SpecItem><SpecLabel>Item</SpecLabel><SpecValue>201</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Texture</SpecLabel><SpecValue>Firm</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Trim</SpecLabel><SpecValue>Flat</SpecValue></SpecItem>
                    <SpecItem><SpecLabel>Tufts</SpecLabel><SpecValue>33</SpecValue></SpecItem>
                  </S.BrushSpecsGrid>
                </BrushSpecsWrapper>
                  <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
              </S.TextAndImgWrapper>
            </S.TextAndImgWrapperOuter>
          </S.Column>
        </S.SlideContainer>
      </S.CarouselSlide>
      </FlickityCarousel>
    </S.AdultWrapperOuter>
  );
}