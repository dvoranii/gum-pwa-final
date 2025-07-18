import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/2030-Floss.webp';

export default function DeepCleanFloss() {
  return (
    <StringFlossSlide
      title="Deep Clean Expanding"
      titleSize="clamp(24px, 6vw, 2.8rem)"
      subtitle="DENTAL FLOSS"
      topImage={ProductImage}
      topImageWidth="90%"
      containerMarginTop='-12px'
      topImageMarginBottom="1.2rem"
      contentPadding="0 0 0 3rem"
      contentMarginTop='-12px'
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin='8px'
      bullets={[
        { text: "Thin and easy to insert between tight contacts." },
        { text: <>Floss expands to remove 2X more plaque<sup>10</sup>.</> },
        { text: "Multiple filaments and texturized fibers." }
      ]}
    />
  );
}