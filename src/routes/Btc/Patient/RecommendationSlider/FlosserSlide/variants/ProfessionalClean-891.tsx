import FlosserSlide from '../FlosserSlide';
import FlosserImage from '../../../../../../assets/btc/patient/recommendations/Flossers/891-FlosserImg.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp';

export default function ProfessionalCleanFlosser() {
  return (
    <FlosserSlide
      title="Professional Clean®"
      subtitle="FLOSSER MINT"
      subtitleSize='2.5rem'
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
         {lines: [
            "Textured floss effectively",
            "removes 2x more plaque¹."
        ]},
         {lines: [
            "Designed to resist shredding",
            "or breaking²."
        ]},
        {lines: [
            "Lightweight flexible grip",
            "uses 20% less plastic³."
        ]}
      ]}
    />
  );
}