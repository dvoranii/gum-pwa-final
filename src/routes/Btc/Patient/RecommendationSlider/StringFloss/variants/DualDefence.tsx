import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/2008-Floss.webp';

export default function DualDefenceFloss() {
  return (
    <StringFlossSlide
      title="Dual Defense"
      subtitle="TWISTED STRING FLOSS"
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom="1.4rem"
      contentPadding="0 0 0 4rem"
      contentMarginTop='-12px'
      containerMarginTop='-12px'
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin='8px'
      bullets={[
        { text: "Textured, twisted floss with fresh minty flavor." },
        { text: <>Removes 2x more plaque<sup>10</sup>.</> },
        { text: <>Covers 30% more surface area<sup>11</sup>.</> }
      ]}
    />
  );
}