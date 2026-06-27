import * as S from "./Slide3.styles";

import Brush1_CrayolaMarker from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Markers.webp";
import Slide3Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col2-topImg.webp";

import Slide5Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Img.webp";
import Slide5Col2BottomImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Fruits.webp";

import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import {
  TitleLight,
  Container,
} from "../../../components/ProductSlide/ProductSlide.styles";
import ShopifyIcon from "../../../../../components/ShopifyIcon/ShopifyIcon";

const Slide3 = () => (
  <Container>
    <ProductSlide
      brushImage={Brush1_CrayolaMarker}
      diagramImage={Slide3Col2TopImg}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/crayola-marker",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="75%"
      brushImgHeight="78%"
      brushMarginTop="12px"
      brushImgWidth="auto"
      brushWrapperWidth="65%"
      textAndImgWrapperHeight="87.5%"
      diagramMarginBottom="0"
      useBulletPoints={true}
      title={
        <>
          Crayola<TitleLight>™</TitleLight> MARKER<TitleLight>™</TitleLight>
        </>
      }
      description={[
        <>
          Raised tip bristles clean hard-to-reach
          <br />
          back teeth.
        </>,
        <>
          Slim handle design provides an
          <br />
          ergonomic hold and easier grip for
          <br />
          small hands.
        </>,
        <>
          Suction cup base holds the
          <br />
          toothbrush upright which helps to
          <br />
          keep bristles clean.
        </>,
      ]}
      imprintColors={[
        ["#00ace6"],
        ["#8261aa"],
        ["#ed1b3b"],
        ["#f88f1f"],
        ["#f6ee31"],
        ["#aad04d"],
      ]}
      showImprintText={false}
      specs={[
        [
          { label: "Item", value: "227" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "25" },
        ],
      ]}
    />

    <S.SecondColumnWrapper>
      <S.TopImageWrapper>
        <img src={Slide5Col2TopImg} alt="Crayola Twistables Flossers" />
      </S.TopImageWrapper>

      <S.ContentWrapper>
        <S.TextContent>
          <h2>
            Crayola<TitleLight>™</TitleLight> TWISTABLES
            <TitleLight>™</TitleLight> FLOSSERS
          </h2>
          <ul>
            <li>Extra-strong, twisted fluoride coated floss.</li>
            <li>
              Longer handle makes it easy for parents to
              <br /> help kids floss.
            </li>
            <li>
              3 Twisted fruit flavours to choose from, to
              <br /> vary the fun and keep them flossing.
            </li>
          </ul>
        </S.TextContent>
        <S.BottomImageWrapper>
          <img src={Slide5Col2BottomImg} alt="Fruit flavors" />
        </S.BottomImageWrapper>
      </S.ContentWrapper>

      <S.SpecsSection>
        <S.SpecsGrid>
          <S.SpecItem>853 Crayola™ Twistables™ Flossers</S.SpecItem>
          <S.SpecItem>48 packs of 3</S.SpecItem>
        </S.SpecsGrid>
      </S.SpecsSection>

      <ShopifyIcon
        href="https://www.professionalsunstargum.com/products/crayola-twistables-flossers"
        width="30px"
        marginTop="0"
      />
    </S.SecondColumnWrapper>
  </Container>
);

export default Slide3;
