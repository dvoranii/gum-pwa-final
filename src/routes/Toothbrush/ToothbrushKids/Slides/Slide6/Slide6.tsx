import * as S from "./Slide6.styles";
import SpongeBobBrush from "../../../../../assets/toothbrush/Kids/Slide6/Brush-SpongeBob.webp";
import SpongeBobDiagram from "../../../../../assets/toothbrush/Kids/Slide6/Slide6Col1Circle.webp";
import SpongeBobVariants from "../../../../../assets/toothbrush/Kids/Slide6/SpongeBobBrushVariants.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { Container } from "../../../components/ProductSlide/ProductSlide.styles";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide6 = () => (
  <Container>
    <ProductSlide
      brushImage={SpongeBobBrush}
      diagramImage={SpongeBobDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      useBulletPoints={true}
      showImprintText={false}
      minHeight="250px"
      diagramWidth="90%"
      diagramMarginBottom="0.8rem"
      paddingRight="0"
      textWrapperPaddingRight="4.5rem"
      brushImgWidth="90%"
      colGap="0.8rem"
      colMargLeft="39px"
      textWrapperH2MarginBottom="0.4rem"
      title={<>SpongeBob™ <TitleLight>Toothbrush</TitleLight></>}
      description={[
        <>
        Tongue cleaner helps remove<br/> bacteria from the tongue.
        </>,
        "Center bristles help emphasize a smaller amount of toothpaste.",
        "Suction cup base holds the toothbrush upright which helps keep bristles clean"
      ]}
      imprintColors={[["#ffff00"], ["#ff1493"]]}
      specs={[
        [
          { label: "Item", value: "4060" },
          { label: "Texture", value: "Ultra soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "29" }
        ]
      ]}
    />

    <S.SecondColumnWrapper>
      <S.ImageWrapper>
        <img src={SpongeBobVariants} alt="SpongeBob Toothbrush Variants" />
      </S.ImageWrapper>
    </S.SecondColumnWrapper>
  </Container>
);

export default Slide6;