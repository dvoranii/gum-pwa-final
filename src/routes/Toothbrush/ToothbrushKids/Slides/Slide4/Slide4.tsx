import Brush1_CrayolaDeepClean from "../../../../../assets/toothbrush/Kids/Slide4/Brush-Crayola-DeepClean.webp";
import Brush1_CrayolaTimerLight from "../../../../../assets/toothbrush/Kids/Slide4/Brush-Crayola-TimerLight.webp";
import Slide4Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide4/Slide4Col2-topImg.webp";
import Slide4Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide4/Slide4Col1-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight } from "../../../components/ProductSlide/ProductSlide.styles";

const Slide4 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_CrayolaDeepClean}
      diagramImage={Slide4Col2TopImg}
      shopifyIconProps={{
        href: "https://www.sunstargum.com/ca-en/products/toothbrushes/gum-crayola-deep-clean-toothbrush.html",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="85%"
      brushImgWidth="88%"
      diagramMarginBottom="0.2rem"
      colGap="1rem"
      textWrapperMinHeight="230px"
      textWrapperPaddingRight="2.8rem"
      useBulletPoints={true}
      title={
        <>
          Crayola<TitleLight>™</TitleLight> DEEP CLEAN
        </>
      }
      description={[
        <>
          Ultra-soft Deep Clean bristles allow for better reach in between teeth
          for better cleaning.<sup>22</sup>
        </>,
        "Thumb grip and triangular-shaped handle offer control and encourage brushing at a 45° angle.",
        "Suction cup base holds the toothbrush upright which helps keep bristles clean.",
      ]}
      imprintColors={[["#0075ba"], ["#f15921"], ["#80c241"], ["#9163aa"]]}
      showImprintText={false}
      specs={[
        [
          { label: "Item", value: "234" },
          { label: "Texture", value: "Ultra Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "25" },
        ],
      ]}
    />

    <ProductSlide
      brushImage={Brush1_CrayolaTimerLight}
      diagramImage={Slide4Col1TopImg}
      shopifyIconProps={{
        href: "https://www.professionalsunstargum.com/products/crayola-timer-light",
        width: "30px",
        marginTop: "0",
      }}
      useBulletPoints={true}
      showImprintText={false}
      textWrapperMinHeight="226px"
      diagramWidth="90%"
      diagramMarginBottom="0.2rem"
      paddingRight="1.4rem"
      brushImgWidth="95%"
      colGap="0.8rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="1.2rem"
      title={
        <>
          Crayola<TitleLight>™</TitleLight> TIMER LIGHT
        </>
      }
      description={[
        "Flashing, one-minute timer light helps kids know when to switch arches and encourages longer brushing time.",
        <>
          Dome Trim® bristles are clinically designed to clean below the gumline
          <sup>1, 2</sup>
        </>,
        "Suction cup base holds the toothbrush upright which helps keep bristles clean.",
        "Non-replaceable LED battery.",
      ]}
      imprintColors={[["#c2519e"], ["#f67f1e"], ["#00aeee"], ["#39b549"]]}
      specs={[
        [
          { label: "Item #", value: "202" },
          { label: "Texture", value: "Soft" },
          { label: "Size", value: "Compact" },
          { label: "Tufts", value: "29" },
        ],
      ]}
    />
  </>
);

export default Slide4;
