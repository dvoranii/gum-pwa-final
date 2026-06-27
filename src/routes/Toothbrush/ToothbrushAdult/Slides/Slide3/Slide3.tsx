import Brush1_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/Brush-CompleteCare.webp";
import Brush1_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/Brush-DomeTrim.webp";
import Diagrams_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-completeCare.webp";
import Diagrams_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-domeTrim.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide3 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CompleteCare}
      diagramImage={Diagrams_CompleteCare}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/591-complete-care-technique-r-soft-compact",
        width: "30px",
        marginTop: "0",
      }}
      colGap="0.6rem"
      brushImgHeight="80%"
      textWrapperH2PaddingTop="1rem"
      textAndImgWrapperHeight="77%"
      title={
        <>
          COMPLETE&nbsp;CARE&nbsp;<TitleLight>TECHNIQUE®</TitleLight>
        </>
      }
      description={[
        <>
          Raised bristles at the tip provide greater
          <br /> access to posterior regions and clean hard-
          <br />
          to-reach surfaces.
        </>,
        <>
          Dome Trim® bristles are clinically designed
          <br /> to clean below the gumline.
          <sup>18, 19</sup>
        </>,
      ]}
      imprintColors={[["#fec60a"], ["#f1592a"], ["#8dc63e"], ["#00a2e4"]]}
      specs={[
        [
          { label: "Item #", value: "591" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "30" },
        ],
        [
          { value: "595" },
          { value: "Ultra Soft" },
          { value: "Compact" },
          { value: "30" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={Brush1_DomeTrim}
      diagramImage={Diagrams_DomeTrim}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/457-dome-trim-r-soft-compact",
        width: "30px",
        marginTop: "0",
      }}
      brushImgHeight="80%"
      textWrapperH2PaddingTop="1rem"
      textAndImgWrapperHeight="77%"
      colGap="0.6rem"
      title={
        <>
          <TitleLight>DOME</TitleLight> TRIM®
        </>
      }
      description={[
        <>
          Dome Trim® bristles clinically designed to
          <br /> clean below the gumline.
          <sup>18, 19</sup>
        </>,
      ]}
      imprintColors={[["#ae2181"], ["#2f3192"], ["#f79633"], ["#f15157"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Item", value: "457" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "30" },
        ],
        [{ label: "‎ ", value: "‎ " }],
      ]}
    />
  </>
);

export default Slide3;
