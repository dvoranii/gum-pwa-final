import StringFlossSlide from '../StringFloss';
import ProductImage from '../../../../../../assets/btc/patient/recommendations/StringFloss/3210-Floss.webp';

export default function EasyThreadFloss() {
  return (
    <StringFlossSlide
      title="EasyThread®"
      subtitle="FLOSS"
      topImage={ProductImage}
      topImageMarginBottom="0"
      contentPadding='0 0 0 4.2rem'
      bulletItemsFontSize='clamp(16px, 1.9vw, 1.8rem)'
      contentMarginTop='-20px'
      bullets={[
        { lines: ["Stiff threader sections provide easy",
                  "access to hard-to-clean spaces",
                  "without irritating the gums."
        ]},
        { lines: ["Double-ended threader sections to", 
                  "maximize cleaning with each strand."] }
      ]}
    />
  );
}