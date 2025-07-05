import * as S from "./Slide5.styles";
import Brush1_CrayolaPower from "../../../../../assets/toothbrush/Kids/Slide5/Brush-Crayola-Power.webp";
import Slide5Col1TopImg from "../../../../../assets/toothbrush/Kids/Slide5/circle-diagram-crayolaPower.webp";
import Slide5Col2TopImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Img.webp";
import Slide5Col2BottomImg from "../../../../../assets/toothbrush/Kids/Slide5/Slide5Col2Fruits.webp";
import { ProductSlide } from "../../../components/ProductSlide/ProductSlide";
import { TitleLight, Container} from "../../../components/ProductSlide/ProductSlide.styles";
import ShopifyIcon from "../../../../../components/ShopifyIcon/ShopifyIcon";

const Slide5 = () => (
  <Container>
    <ProductSlide
      brushImage={Brush1_CrayolaPower}
      diagramImage={Slide5Col1TopImg}
      shopifyIconProps={{
        href: "https://www.shopify.com/ca",
        width: "30px",
        marginTop: "0"
      }}
      useBulletPoints={true}
      showImprintText={false}
      minHeight="226px"
      diagramWidth="90%"
      diagramMarginBottom="0.2rem"
      paddingRight="1.4rem"
      brushImgWidth="95%"
      colGap="0.8rem"
      textWrapperH2MarginBottom="0.4rem"
      textWrapperPaddingRight="1.2rem"
      title={
        <>
        Crayola<TitleLight>™</TitleLight> POWER
        </>
      }
      description={[
        "Rotating action with soft bristles gently cleans teeth and massages gums",
        "Comes with a cap to keep brush head clean and is great for travel too!",
        "Suction cup base holds the toothbrush upright which helps keep bristles clean",
        "Non-replaceable battery",
      ]}
      imprintColors={[["#c2519e"], ["#f67f1e"], ["#00aeee"], ["#39b549"]]}
      specs={[
        [
        { label: "Item #", value: "2272" },
        { label: "Texture", value: "Soft" },
        { label: "Size", value: "Compact" },
        { label: "Tufts", value: "23" }
        ]
      ]}
    />

<S.SecondColumnWrapper>
    <S.TopImageWrapper>
        <img src={Slide5Col2TopImg}/>
    </S.TopImageWrapper>

    <S.ContentWrapper>
        <S.TextContent>
            <h2>Crayola<TitleLight>™</TitleLight> TWISTABLES<TitleLight>™</TitleLight> FLOSSERS</h2>
            <ul>
                <li>Extra-strong, twisted fluoride coated floss</li>
                <li>Longer handle makes it easy for parents to help kids floss</li>
                <li>3 Twisted fruit flavours to choose from, to vary the fun and keep them flossing</li>
            </ul>
        </S.TextContent>
        <S.BottomImageWrapper>
            <img src={Slide5Col2BottomImg} alt="Fruit flavors" />
        </S.BottomImageWrapper>
    </S.ContentWrapper>
    <S.SpecsSection>
        <S.SpecsGrid>
        <S.SpecItem>853 Crayola™ Twistables™ Flossers</S.SpecItem>
        <S.SpecItem>48 packs of 3</S.SpecItem>
        </S.SpecsGrid>
    </S.SpecsSection>
    <ShopifyIcon href="https://www.shopify.com/ca" width="30px" marginTop="0"/>
</S.SecondColumnWrapper>

  </Container>
);

export default Slide5;