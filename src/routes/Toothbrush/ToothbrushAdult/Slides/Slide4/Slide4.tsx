import Brush1_ToothAndTongue from "../../../../../assets/toothbrush/Adult/Slide4/Brush-toothAndTongue.webp";
import Diagrams_ToothAndTongue from "../../../../../assets/toothbrush/Adult/Slide4/bottom-img-tooth&tongue.webp";
import { ProductSlide } from "../ProductSlide";
import { DescriptionBold, TitleLight } from "../ProductSlide.styles";

const Slide4 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_ToothAndTongue}
      diagramImage={Diagrams_ToothAndTongue}
      title={
        <>
        Tooth & Tongue <TitleLight>Toothbrush</TitleLight>
        </>
      }
      description={[
        <>
            Designed with <DescriptionBold>40% more bristles</DescriptionBold><sup>3</sup> to gently and effectively clean between teeth without irritating gums.
        </>,
        "Tongue cleaner with ridged scrapers improves cleaning and helps reduce bad breath."
      ]}
      imprintColors={[["#02adee", "#007bc5"], ["#f9ae68","#f1592a"], ["#a8cf87","#6c8d42"], ["#f295be", "#ec4699"]]}
      specs={[
        [
        { label: "Item #", value: "394" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Full" },
        { label: "Tufts", value: "46" }
        ]
      ]}
      isSingleColumn={true}
    />
  </>
);

export default Slide4;