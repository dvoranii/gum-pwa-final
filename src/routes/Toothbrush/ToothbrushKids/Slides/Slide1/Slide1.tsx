import Brush1_Monsterz from "../../../../../assets/toothbrush/Kids/Slide1/Brush-Monsterz.webp";
import Brush1_MonsterzKids from "../../../../../assets/toothbrush/Kids/Slide1/Brush-MonsterzKids.webp";
import Slide1Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide1/Slide1Col1-topImg.webp";
import Slide1Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide1/Slide1Col2-topImg.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";

const Slide1 = () => (
  <>
    <ProductSlide
      brushImage={Brush1_Monsterz}
      diagramImage={Slide1Col1TopImg}
      diagramWidth="80%"
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      textWrapperMarginTop="-24px"
      textWrapperPaddingRight="3.8rem"
      minHeight="190px"
      colGap="0.8rem"
      useBulletPoints={true}
      showImprintText={false}
      description={[
        "Extra-small head designed for baby's mouth",
        "Ultra-soft feathered bristles are very gentle for baby gums around erupting primary teeth",
        "Effective access to pits and fissures where first cavities may start",
        "The longer handle and steady grip facilitates parent's hold of the toothbrush",
      ]}
      imprintColors={[["#f37c8e"], ["#ffd703"], ["#42bfa4"], ["#1b97d4"]]}
      specs={[
        [
        { label: "Item", value: "213" },
        { label: "Texture", value: "Ultra Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "11" }
        ]
      ]}
    />
    <ProductSlide
      brushImage={Brush1_MonsterzKids}
      diagramImage={Slide1Col2TopImg}
      diagramWidth="80%"
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      textWrapperMarginTop="-24px"
      useBulletPoints={true}
      minHeight="190px"
      description={[
        "Soft bristles gently remove plaque",
        "Center bristles help emphasize a smaller amount of toothpaste for kids",
        "Ergonomic handle with thumb pad for stable, comfortable grip",
        "Suction cup base holds the toothbrush upright which helps to keep bristles clean",  
     ]}
      imprintColors={[["#8d75b4"], ["#eb5d8d"], ["#8fca6b"], ["#36c1cd"]]}
      showImprintText={false}
      specs={[
        [
        { label: "Item", value: "901" },
        { label: "Texture", value: "Ultra Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "19" }]
        ]}
    />
  </>
);

export default Slide1;