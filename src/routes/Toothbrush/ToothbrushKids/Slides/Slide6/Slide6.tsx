import TechniqueKidsBrush from "../../../../../assets/toothbrush/Kids/Slide7/Brush-TechniqueKids.webp";
import BrightCareBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-GUMBrightCare.webp";
import TechniqueKidsDiagram from "../../../../../assets/toothbrush/Kids/Slide7/circle-diagram-TechniqueKids.webp";
import BrightCareDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-GUMBrightCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide6 = () => (
  <>
    <ProductSlide
      brushImage={TechniqueKidsBrush}
      diagramImage={TechniqueKidsDiagram}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/221-technique-r-kids",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={false}
      textWrapperMinHeight="168px"
      diagramWidth="80%"
      diagramMarginBottom="1.2rem"
      paddingRight="2rem"
      brushImgWidth="95%"
      colGap="1.2rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="3rem"
      title={
        <>
          TECHNIQUE<sup>®</sup> Kids
        </>
      }
      description={[
        <>
          Cushioned Quad-Grip® handle facilitates the recommended
          <br /> 45° brushing technique.
        </>,
        <>
          Dome Trim<sup>®</sup> bristles are clinically
          <br /> designed to clean below the gumline.<sup>18,&nbsp;19</sup>
        </>,
      ]}
      imprintColors={[
        ["#01b6d8", "#fff300"],
        ["#b04d9c", "#0363b0"],
        ["#f7941d", "#fff301"],
        ["#8dc63e", "#0164b2"],
      ]}
      specs={[
        [
          { label: "Item", value: "221" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "24" },
        ],
      ]}
    />
    <ProductSlide
      brushImage={BrightCareBrush}
      diagramImage={BrightCareDiagram}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/4594-gum%C2%AE-bright-care%E2%84%A2-toothbrush?_pos=1&_psq=4594&_ss=e&_v=1.0",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={true}
      textWrapperMinHeight="168px"
      diagramWidth="80%"
      diagramMarginBottom="1.2rem"
      paddingRight="2rem"
      brushImgWidth="95%"
      colGap="1.2rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="3rem"
      title={
        <>
          G•U•M&nbsp;BRIGHT&nbsp;CARE<sup>™</sup>&nbsp;Toothbrush
        </>
      }
      description={[
        <>
          Special BrightLine<sup>TM</sup> Grip bristles help remove stains for{" "}
          <strong>28% whiter teeth</strong>.<sup>3</sup>
        </>,
        <>
          Raised Super Tip<sup>®</sup> bristles at the tip provide access to
          posterior regions and clean hard-to-reach surfaces.
        </>,
        <>
          Dome Trim<sup>®</sup> bristles are clinically designed to clean below
          the gumline.<sup>18,&nbsp;19</sup>
        </>,
      ]}
      imprintColors={[["#a1227f"], ["#395fab"], ["#e71d26"], ["#43ae48"]]}
      specs={[
        [
          { label: "Item", value: "4594" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Subcompact" },
          { label: "Tufts", value: "23" },
        ],
      ]}
    />
  </>
);

export default Slide6;
