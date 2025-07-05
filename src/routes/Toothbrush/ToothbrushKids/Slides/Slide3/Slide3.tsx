import Brush1_CrayolaPipSqueaks from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Pipsqueaks.webp";
import Brush1_CrayolaMarker from "../../../../../assets/toothbrush/Kids/Slide3/Brush-Crayola-Markers.webp";
import Slide3Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col1-topImg.webp";
import Slide3Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide3/Slide3Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide3 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CrayolaPipSqueaks}
      diagramImage={Slide3Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      diagramWidth="86%"
      minHeight="246px"
      colGap="0.8rem"
      textWrapperPaddingRight="2rem"
      diagramMarginBottom="0"
      useBulletPoints={true}
      showImprintText={false}
      title={
        <>
        Crayola<TitleLight>™</TitleLight> PIP-SQUEAKS<TitleLight>™</TitleLight>
        </>
      }
      description={[
        "Soft bristles are gentle on young teeth and gums",
        "Narrow, tapered brush head makes maneuvering in small mouths easier",
        "Suction cup base holds the toothbrush upright which helps keep bristles clean",
      ]}
      imprintColors={[["#fcb041"], ["#c91690"], ["#00aeee"], ["#22b785"]]}
      specs={[
        [
        { label: "Item", value: "232" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "19" }
        ]
      ]}
    />
    <ProductSlide
      brushImage={Brush1_CrayolaMarker}
      diagramImage={Slide3Col2TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      diagramWidth="86%"
      brushImgWidth="90%"
      colGap="0.8rem"
      minHeight="246px"
      diagramMarginBottom="0"
      useBulletPoints={true}
      textWrapperPaddingRight="3.4rem"
      title={
        <>
         Crayola<TitleLight>™</TitleLight> MARKER<TitleLight>™</TitleLight>
        </>
      }
      description={[
        "Raised tip bristles clean hard-to-reach back teeth",
        "Slim handle design provides an ergonomic hold and easier grip for small hands",
        "Suction cup base holds the toothbrush upright which helps to keep bristles clean",  
     ]}
      imprintColors={[["#00ace6"], ["#8261aa"], ["#ed1b3b"], ["#f88f1f"],  ["#f6ee31"],  ["#aad04d"]]}
      showImprintText={false}
      specs={[
        [
        { label: "Item", value: "227" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "25" }]
        ]}
    />
  </>
);

export default Slide3;