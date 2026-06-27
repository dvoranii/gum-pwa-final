import Brush1_EnamelClean from "../../../../../assets/toothbrush/Adult/Slide2/Brush-Enamel.webp";
import Brush1_SensitiveCare from "../../../../../assets/toothbrush/Adult/Slide2/Brush-SensitiveCare.webp";
import Diagrams_EnamelClean from "../../../../../assets/toothbrush/Adult/Slide2/circle-diagrams-enamelClean.webp";
import Diagrams_SensitiveCare from "../../../../../assets/toothbrush/Adult/Slide2/circle-diagrams-sensitiveCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import {
  DescriptionBold,
  TitleLight,
} from "../../../components/ProductSlide/ProductSlide.styles";

const Slide2 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_EnamelClean}
      diagramImage={Diagrams_EnamelClean}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/4471-enamel-clean-technique%C2%AE-dozen",
        width: "30px",
        marginTop: "0",
      }}
      brushImgHeight="83%"
      brushImgWidth="auto"
      colGap="0.6rem"
      textWrapperH2PaddingTop="0.8rem"
      textAndImgWrapperHeight="75%"
      title={
        <>
          ENAMEL CLEAN <TitleLight>TECHNIQUE®</TitleLight>
        </>
      }
      description={[
        <>
          Micro-feathering splits each bristle into
          <br /> several fine tips for{" "}
          <DescriptionBold>70% more enamel clean</DescriptionBold> compared to
          an end rounded bristle.<sup>17</sup>
        </>,
      ]}
      imprintColors={[["#cb0a3d"], ["#c369c2"], ["#38b5e6"], ["#34c0ae"]]}
      specs={[
        [
          { label: "Item #", value: "4471" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "31" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_SensitiveCare}
      diagramImage={Diagrams_SensitiveCare}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/517-sensitive-care-technique-r",
        width: "30px",
        marginTop: "0",
      }}
      brushImgHeight="83%"
      brushImgWidth="auto"
      colGap="0.6rem"
      textWrapperH2PaddingTop="0.8rem"
      textAndImgWrapperHeight="75%"
      title={
        <>
          ULTRA SENSITIVE CLEAN <TitleLight>TECHNIQUE®</TitleLight>
        </>
      }
      description={[
        <>
          The unique Quad-Grip® handle and Dome
          <br /> Trim® bristles, combined with ultra-delicate
          <br /> bristles, offer a gentle yet effective solution
          <br /> for plaque removal and gum care.
        </>,
      ]}
      imprintColors={[["#86ca94"], ["#2ac2f0"], ["#f8acbd"], ["#cda9ce"]]}
      specs={[
        [
          { label: "Item", value: "517" },
          { label: "Texture", value: "Sensitive" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "46" },
        ],
      ]}
    />
  </>
);

export default Slide2;
