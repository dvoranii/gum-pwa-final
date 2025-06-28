import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/1815-Floss.webp';

export default function ProWeaveFloss() {
  return (
    <StringFlossSlide
      title="Pro-Weave®"
      subtitle="DENTAL FLOSS"
      topImage={ProductImage}
      topImageWidth="90%"
      topImageMarginBottom={true}
      contentPadding="0 0 0 3rem"
      contentMarginTop='-12px'
      bulletItemsFontSize="clamp(16px, 1.8vw, 1.8rem)"
      bulletMargin='8px'
      listMarginBottom='0.4rem'
      bullets={[
        { lines: [
            "Woven design removes biofilm between",
            "teeth and below the gumline."
          ] 
        },
        { lines: [
            "Interlacing process produces strong, smooth",
            "floss engineered not to shred, break or sag²."
          ] 
        }
      ]}
    />
  );
}