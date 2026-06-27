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

import {
  BrushImgWrapper,
  BrushSpecsWrapper,
  SpecItem,
  SpecLabel,
  SpecValue,
} from "../components/ProductSlide/ProductSlide.styles";

export default function ToothbrushAdult() {
  return (
    <S.AdultWrapperOuter>
      <FlickityCarousel
        $customStyles={{
          dotPosition: {
            bottom: "-30px",
            right: "34px",
          },
        }}
      >
        <S.CarouselSlide>
          <S.SlideContainer>
            <S.Column>
              <BrushImgWrapper $wrapperWidth="25%" $brushImgHeight="70%">
                <img src={Slide1Brush1} alt="Orthodontic toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="70%">
                <S.TextAndImgWrapper $height="90%">
                  <S.DiagramsWrapper $width="50%">
                    <img
                      src={Slide1Col1TopImg}
                      alt="Orthodontic brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>
                      ORTHODONTIC
                      <br />
                      <TitleLight>Toothbrush</TitleLight>
                    </h2>
                    <ul>
                      <li>
                        This "V" trim brush
                        <br />
                        facilitates cleaning
                        <br />
                        around orthodontic appliances such as,
                        <br />
                        brackets, arch wires
                        <br />
                        buttons and ligatures.
                        <br /> Also available as a<br /> travel brush.
                      </li>
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
                  <ShopifyIcon
                    href="https://www.professionalsunstargum.com/products/124-orthodontic-toothbrush"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            <S.Column>
              <BrushImgWrapper $wrapperWidth="25%" $brushImgHeight="70%">
                <img src={Slide1Brush2} alt="End-tuft brush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="70%">
                <S.TextAndImgWrapper $height="90%">
                  <S.DiagramsWrapper $width="50%">
                    <img
                      src={Slide1Col2TopImg}
                      alt="End-tuft brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>
                      END-TUFT
                      <br />
                      <TitleLight>Brush</TitleLight>
                    </h2>
                    <ul>
                      <li>
                        Small brush head addresses special maintenance
                        <br /> concerns, including
                        <br /> orthodontic bands, furcations, implants,
                        <br /> distal of last molar,
                        <br /> and other hard-to-
                        <br />
                        reach areas.
                      </li>
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
                  <ShopifyIcon
                    href="https://www.professionalsunstargum.com/products/308-end-tuft-toothbrush"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            <S.Column>
              <BrushImgWrapper $wrapperWidth="25%" $brushImgHeight="70%">
                <img src={Slide1Brush3} alt="Post-operation toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="70%">
                <S.TextAndImgWrapper $height="90%">
                  <S.DiagramsWrapper $width="50%">
                    <img
                      src={Slide1Col3TopImg}
                      alt="Post-operation brush head diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper>
                    <h2>
                      POST-OPERATION
                      <br />
                      <TitleLight>Toothbrush</TitleLight>
                    </h2>
                    <ul>
                      <li>
                        Ultra-soft .004 inch
                        <br /> bristles are ideal for
                        <br /> post surgical cleaning,
                        <br /> gum disease, mouth
                        <br /> irritations, extractions,
                        <br /> implants and grafts.
                      </li>
                      <li>
                        Extremely soft and
                        <br /> gentle on gums.
                      </li>
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
                  <ShopifyIcon
                    href="https://www.professionalsunstargum.com/products/317-post-operation-toothbrush"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>
          </S.SlideContainer>
        </S.CarouselSlide>

        <S.CarouselSlide>
          <S.SlideContainer $columns={2} $width="80%" $colGap="0">
            <S.Column>
              <BrushImgWrapper $wrapperWidth="25%" $brushImgHeight="70%">
                <img src={TravelBrushImage} alt="Travel toothbrush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="65%">
                <S.TextAndImgWrapper $height="100%">
                  <S.DiagramsWrapper $marginBottom="0.4rem" $width="75%">
                    <img src={TravelBrushDiagram} alt="Travel brush diagram" />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $listFontSize="1.1rem">
                    <h2>
                      TRAVEL <TitleLight>Toothbrush</TitleLight>
                    </h2>
                    <ul>
                      <li>
                        Dual-function handle is
                        <br /> also a ventilated snap-
                        <br />
                        lock cap when not in use.
                      </li>
                      <li>
                        Multi-level trim designs
                        <br /> for enhanced subgingival
                        <br /> and interproximal
                        <br /> accesses.
                      </li>
                      <li>
                        Also available in an
                        <br /> orthodontic "V" trim.
                      </li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="65%">
                    <S.BrushSpecsGrid $gap="0">
                      <SpecItem>
                        <SpecLabel>Item</SpecLabel>
                        <SpecValue>153</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Soft</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Trim</SpecLabel>
                        <SpecValue>Multi&nbsp;level</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>32</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                    <br />
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.professionalsunstargum.com/products/153-travel-toothbrush-soft-multi-level-trim"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>

            <S.Column>
              <BrushImgWrapper $wrapperWidth="25%" $brushImgHeight="70%">
                <img src={DentureBrushImage} alt="Denture brush" />
              </BrushImgWrapper>
              <S.TextAndImgWrapperOuter $height="65%">
                <S.TextAndImgWrapper $height="95%">
                  <S.DiagramsWrapper $marginBottom="0.4rem" $width="43%">
                    <img
                      src={DentureBrushDiagram}
                      alt="Denture brush diagram"
                    />
                  </S.DiagramsWrapper>
                  <S.TextWrapper $listFontSize="1.1rem">
                    <h2>
                      DENTURE <TitleLight>Brush</TitleLight>
                    </h2>
                    <ul>
                      <li>
                        Flat trim, firm nylon
                        <br /> design effectively
                        <br /> cleans denture
                        <br /> surfaces. Tapered
                        <br /> brush cleans smaller
                        <br /> hard-to-reach areas.
                      </li>
                      <li>
                        Lever grip reduces
                        <br /> effort for patients
                        <br /> with limited dexterity.
                      </li>
                    </ul>
                  </S.TextWrapper>
                  <BrushSpecsWrapper $width="65%">
                    <S.BrushSpecsGrid $gap="0">
                      <SpecItem>
                        <SpecLabel>Item</SpecLabel>
                        <SpecValue>201</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Texture</SpecLabel>
                        <SpecValue>Firm</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Trim</SpecLabel>
                        <SpecValue>Flat</SpecValue>
                      </SpecItem>
                      <SpecItem>
                        <SpecLabel>Tufts</SpecLabel>
                        <SpecValue>33</SpecValue>
                      </SpecItem>
                    </S.BrushSpecsGrid>
                  </BrushSpecsWrapper>
                  <ShopifyIcon
                    href="https://www.professionalsunstargum.com/products/201-denture-brush"
                    width="30px"
                    marginTop="0"
                  />
                </S.TextAndImgWrapper>
              </S.TextAndImgWrapperOuter>
            </S.Column>
          </S.SlideContainer>
        </S.CarouselSlide>
      </FlickityCarousel>
    </S.AdultWrapperOuter>
  );
}
