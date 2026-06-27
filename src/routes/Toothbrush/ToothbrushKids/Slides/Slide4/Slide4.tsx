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
        href: "https://www.professionalsunstargum.com/products/crayola-deep-clean?_pos=1&_sid=e157a2889&_ss=r",
        width: "30px",
        marginTop: "0",
      }}
      diagramWidth="80%"
      brushImgHeight="70%"
      brushMarginTop="12px"
      brushImgWidth="auto"
      useBulletPoints={true}
      title={
        <>
          Crayola<TitleLight>™</TitleLight> DEEP CLEAN
        </>
      }
      description={[
        <>
          Ultra-soft Deep Clean bristles allow for
          <br /> better reach in between teeth for
          <br /> better cleaning.<sup>22</sup>
        </>,
        <>
          Thumb grip and triangular-shaped
          <br /> handle offer control and encourage
          <br /> brushing at a 45° angle.
        </>,
        <>
          Suction cup base holds the toothbrush
          <br /> upright which helps keep bristles clean.
        </>,
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
      diagramWidth="90%"
      paddingRight="1.4rem"
      brushImgHeight="70%"
      brushMarginTop="12px"
      brushImgWidth="auto"
      textWrapperH2MarginBottom="0.4rem"
      title={
        <>
          Crayola<TitleLight>™</TitleLight> TIMER LIGHT
        </>
      }
      description={[
        <>
          Flashing, one-minute timer light helps kids know when to switch arches
          and
          <br /> encourages longer brushing time.
        </>,
        <>
          Dome Trim® bristles are clinically designed
          <br /> to clean below the gumline
          <sup>1, 2</sup>
        </>,
        <>
          Suction cup base holds the toothbrush
          <br /> upright which helps keep bristles clean.
        </>,
        <>Non-replaceable LED battery.</>,
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
