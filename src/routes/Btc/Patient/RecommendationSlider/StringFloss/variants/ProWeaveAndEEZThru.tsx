// StringFlossSlide/variants/ProWeaveAndEEZThru.tsx
import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/1815+840-Floss.webp';

export default function ProWeaveAndEEZThru() {
  return (
    <StringFlossSlide
      title="Pro-Weave®"
      subtitle="DENTAL FLOSS"
      secondTitle="EEZ-Thru®"
      secondSubtitle="THREADERS"
      topImage={ProductImage}
      topImageMarginBottom="1.2rem"
      isCombination={true}
      combinationTitleSize="2.5rem"
      combinationSubtitleSize="1.6rem"
      bulletMargin='40px;'
      bullets={[
        { lines: ["Woven design removes biofilm between ",
                  "teeth and below the gumline."
        ] },
        { lines: [
            "Versatile nylon loop helps thread floss",
            "through spaces where most other",
            "products cannot reach."
          ] 
        }
      ]}
    />
  );
}