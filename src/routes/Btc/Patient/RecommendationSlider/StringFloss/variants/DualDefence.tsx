import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/2008-Floss.webp';

export default function DualDefenceFloss() {
  return (
    <StringFlossSlide
      title="Dual Defense"
      subtitle="TWISTED STRING FLOSS"
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom={true}
      contentPadding="0 0 0 4rem"
      contentMarginTop='-12px'
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin='8px'
      listMarginBottom='0.4rem'
      bullets={[
        { text: "Textured, twisted floss with fresh minty flavor." },
        { text: "Removes 2x more plaque¹." },
        { text: "Covers 30% more surface area²." }
      ]}
    />
  );
}