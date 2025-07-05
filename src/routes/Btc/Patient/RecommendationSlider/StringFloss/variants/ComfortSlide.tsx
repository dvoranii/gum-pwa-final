// StringFlossSlide/variants/ComfortSlide.tsx
import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/2010-Floss.webp';

export default function ComfortSlideFloss() {
  return (
    <StringFlossSlide
      title="Comfort Slide"
      subtitle="DENTAL FLOSS"
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom={true}
      contentPadding="0 0 0 5.4rem"
      containerMarginTop='-20px'
      contentMarginTop='-12px'
      bulletItemsFontSize="clamp(16px, 2vw, 1.8rem)"
      bulletMargin='2px'
      listMarginBottom='0.4rem'
      bullets={[
        { text: "Non-stick floss glides effortlessly." },
        { text: "Monofilament strong construction." },
        { text: "Satin-like finish is soft and gentle." }
      ]}
    />
  );
}