import Brush1_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-DeepClean.webp";
import Brush1_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/Brush-SensitiveClean.webp";
import Diagrams_DeepClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-deepclean.webp";
import Diagrams_SensitiveClean from "../../../../../assets/toothbrush/Adult/Slide1/circle-diagrams-sensitiveclean.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { DescriptionBold, TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide1 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_DeepClean}
      diagramImage={Diagrams_DeepClean}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      imgMinWidth="54px"
      title={
        <>DEEP CLEAN <TitleLight>TECNHIQUE®</TitleLight></>
      }
      description={[
        "Extremely Tapered Bristles clean 2.7 mm below the sulcus and up to 1.4 cm along the gingival margin and between the teeth.¹",
        <>
          <DescriptionBold>10x better plaque removal</DescriptionBold> below the gumline for healthier gums.<sup>2</sup>
        </>
      ]}
      showAntibacterialBadge={true}
      
      imprintColors={[["#00773d"], ["#005eab"], ["#d8006d"], ["#f68933"]]}
        specs={[
        [
            { label: "Item #", value: "525" },
            { label: "Texture", value: "Soft" },
            { label: "Size", value: "Compact" },
            { label: "Tufts", value: "30" }
        ]
        ]}

    />
    <ProductSlide
      brushImage={Brush1_SensitiveClean}
      diagramImage={Diagrams_SensitiveClean}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      imgMinWidth="54px"
      title={
        <>SENSITIVE&nbsp;CLEAN&nbsp;<TitleLight>TECNHIQUE®</TitleLight></>
      }
      description={[<>
        For <DescriptionBold>6x better clean</DescriptionBold><sup>6</sup> with ultra-soft bristles specially designed for sensitivity.
      </>, 
      "Extremely tapered bristles are very fine in diameter to be extra gentle on sensitive teeth and gums, while effectively cleaning below the gumline."]}
      showAntibacterialBadge={true}
      imprintColors={[["#d692a9"], ["#54b6b3"], ["#5a9ac4"], ["#b3b3e0"]]}
      specs={
        [
           [{ label: "Item", value: "528" },
            { label: "Texture", value: "Ultra Soft" },
            { label: "Size", value: "Compact" },
            { label: "Tufts", value: "30" }]]}
    />
  </>
);

export default Slide1;