import FlosserSlide from '../FlosserSlide';
import FlosserImage from '../../../../../../assets/btc/patient/recommendations/Flossers/831-FlosserImg.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp';

export default function EcoCleanFlosser() {
  return (
    <FlosserSlide
      title="Eco Clean®"
      subtitle="FLOSSER MINT"
      subtitleSize='2.5rem'
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
        { text: "Textured floss effectively removes 2x more plaque¹." },
        { text: "Designed to resist shredding or breaking²." }
      ]}
    />
  );
}