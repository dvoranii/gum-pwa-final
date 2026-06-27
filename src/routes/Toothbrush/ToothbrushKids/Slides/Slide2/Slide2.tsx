import Brush1_CrayolaPipSqueaks from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Pipsqueaks.webp";
import Brush1_MonsterzJunior from "../../../../../assets/toothbrush/Kids/Slide2/Brush-Monsterz-Junior.webp";
import Slide3Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col1-topImg.webp";
import Slide1Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide2/Slide2Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide2 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_MonsterzJunior}
      diagramImage={Slide1Col2TopImg}
      diagramMarginBottom="0.4rem"
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/902-monsterz-junior-ages-5",
        width: "30px",
        marginTop: "0",
      }}
      brushImgHeight="72%"
      textAndImgWrapperHeight="82%"
      brushImgWidth="auto"
      diagramWidth="75%"
      brushWrapperWidth="65%"
      brushMarginTop="28px"
      useBulletPoints={true}
      listPaddingLeft="1.8rem"
      description={[
        <>
          Center bristles help emphasize a<br />
          smaller amount of toothpaste for kids.
        </>,
        <>
          Ergonomic handle with thumb pad for
          <br />
          stable, comfortable grip.
        </>,
        <>
          Suction cup base holds
          <br />
          the toothbrush upright which helps to
          <br />
          keep bristles clean.
        </>,
      ]}
      imprintColors={[["#3b7dc2"], ["#84d2da"], ["#ef55a0"], ["#f6ee08"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Item", value: "902" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "29" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_CrayolaPipSqueaks}
      diagramImage={Slide3Col1TopImg}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/crayola-pip-squeaks",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="80%"
      textAndImgWrapperHeight="82%"
      brushImgHeight="72%"
      brushImgWidth="auto"
      brushMarginTop="28px"
      diagramMarginBottom="0"
      useBulletPoints={true}
      showImprintText={false}
      title={
        <>
          Crayola<TitleLight>™</TitleLight> PIP-SQUEAKS
          <TitleLight>™</TitleLight>
        </>
      }
      description={[
        <>
          Soft bristles are gentle on young teeth
          <br /> and gums.
        </>,
        "Narrow, tapered brush head makes maneuvering in small mouths easier.",
        <>
          Suction cup base holds the toothbrush
          <br /> upright which helps keep bristles clean.
        </>,
      ]}
      imprintColors={[["#fcb041"], ["#c91690"], ["#00aeee"], ["#22b785"]]}
      specs={[
        [
          { label: "Item", value: "232" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "19" },
        ],
      ]}
    />
  </>
);

export default Slide2;
