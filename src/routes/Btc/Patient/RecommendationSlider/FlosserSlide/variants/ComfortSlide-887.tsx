import FlosserSlide from '../FlosserSlide';
import FlosserImage from '../../../../../../assets/btc/patient/recommendations/Flossers/887-FlosserImg.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp';

export default function ComfortSlideFlosser() {
  return (
    <FlosserSlide
      title="Comfort Slide®"
      titleSize="3rem"
      subtitle="FLOSSER MINT"
      subtitleSize='2.5rem'
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
        {
          lines: [
            "Silky, non-stick mint floss",
            "easily slides between the",
            "tightest contacts."
          ]
        },
        {
          lines: [
            "Lightweight flexible grip",
            <>uses 20% less plastic<sup>13</sup>.</>
          ]
        },
        {text: <>20% LESS PLASTIC<sup>13</sup> mint flavour on all flossers</>}
      ]}
    />
  );
}