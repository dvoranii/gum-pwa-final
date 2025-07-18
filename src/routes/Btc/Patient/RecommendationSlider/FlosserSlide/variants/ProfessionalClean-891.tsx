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
      bottomImageWidth='90%'
      bullets={[
         {lines: [
            <>Textured floss effectively,
            removes 2x more plaque<sup>10</sup>.</>
        ]},
         {lines: [
            "Designed to resist shredding",
            <>or breaking<sup>12</sup>.</>
        ]},
        {
          text: <>Lightweight flexible grip uses 20% less plastic<sup>13</sup>.</>
        },
        {
          text: <>20% LESS PLASTIC<sup>13</sup> mint flavour on all flossers.</>
        }
      ]}
    />
  );
}