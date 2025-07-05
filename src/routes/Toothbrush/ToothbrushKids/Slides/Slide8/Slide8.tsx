import SuperTipBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-SuperTip.webp";
import BrightCareBrush from "../../../../../assets/toothbrush/Kids/Slide8/Brush-GUMBrightCare.webp";
import SuperTipDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-SuperTip.webp";
import BrightCareDiagram from "../../../../../assets/toothbrush/Kids/Slide8/circle-diagram-GUMBrightCare.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide8 = () => (
  <>
    <ProductSlide
      brushImage={SuperTipBrush}
      diagramImage={SuperTipDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      useBulletPoints={true}
      showImprintText={true}
      minHeight="168px"
      diagramWidth="80%"
      diagramMarginBottom="1.2rem"
      paddingRight="2rem"
      brushImgWidth="95%"
      colGap="1.2rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="3rem"
      title={
        <>
        SUPER TIP<sup>®</sup>
        </>
      }
      description={[
        <>Raised Super Tip<sup>®</sup> bristles at the tip provide access to posterior regions and clean hard-to-reach surfaces</>,
        <>
        Dome Trim<sup>®</sup> bristles are clinically designed to clean below the gumline<sup>1,2</sup>
        </>
      ]}
      imprintColors={[["#784097"], ["#f26a2b"], ["#008ed0"], ["#00af86"]]}
      specs={[
        [
          { label: "Item", value: "468" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Subcompact" },
          { label: "Tufts", value: "24" }
        ]
      ]}
    />
    <ProductSlide
      brushImage={BrightCareBrush}
      diagramImage={BrightCareDiagram}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      useBulletPoints={true}
      showImprintText={true}
      minHeight="168px"
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
        <>Special BrightLine<sup>®</sup> Grip bristles help remove stains for <strong>28% whiter teeth</strong><sup>3</sup></>,
        <>Raised Super Tip<sup>®</sup> bristles at the tip provide access to posterior regions and clean hard-to-reach surfaces</>,
        <>
        Dome Trim<sup>®</sup> bristles are clinically designed to clean below the gumline<sup>1,2</sup>
        </>
      ]}
      imprintColors={[["#a1227f"], ["#395fab"], ["#e71d26"], ["#43ae48"]]}
      specs={[
        [
          { label: "Item", value: "4594" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Subcompact" },
          { label: "Tufts", value: "23" }
        ]
      ]}
    />
  </>
);

export default Slide8;