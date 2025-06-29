import Brush1_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/Brush-CompleteCare.webp";
import Brush1_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/Brush-DomeTrim.webp";
import Diagrams_CompleteCare from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-completeCare.webp";
import Diagrams_DomeTrim from "../../../../../assets/toothbrush/Adult/Slide3/circle-diagram-domeTrim.webp";
import { ProductSlide } from "../ProductSlide";
import { DescriptionBold, TitleLight } from "../ProductSlide.styles";

const Slide3 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CompleteCare}
      diagramImage={Diagrams_CompleteCare}
      title={
        <>
        Complete Care <TitleLight>Technique®</TitleLight>
        </>
      }
      description={[
        "Raised bristles at the tip provide greater access to posterior regions and clean hard-to-reach surfaces.",
        <>
         Dome Trim® bristles are clinically designed to clean below the gumline.<sup>1,3</sup>
        </>
      ]}
      imprintColors={[["#fec60a"], ["#f1592a"], ["#8dc63e"], ["#00a2e4"]]}
      specs={[
        [
        { label: "Item #", value: "591" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "30" }
        ],
        [{value: "559"},
        {value: "Ultra Soft"},
        {value: "Compact"},
        {value: "30"}

        ]
      ]}
    />
    <ProductSlide
      brushImage={Brush1_DomeTrim}
      diagramImage={Diagrams_DomeTrim}
      title={
        <>
        <TitleLight>Dome</TitleLight> Trim®
        </>
      }
      description={[
        <>
        Dome Trim® bristles clinically designed to clean below the gumline.<sup>1,2</sup>
        </>]}
      imprintColors={[["#ae2181"], ["#2f3192"], ["#f79633"], ["#f15157"]]}
      showImprintText={false}
      specs={[
        [
        { label: "Item #", value: "457" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "30" }],
        [{value: "459"},
        {value: "Ultra Soft"},
        {value: "Compact"},
        {value: "30"}

        ]
        ]}
    />
  </>
);

export default Slide3;