import FlosserSlide from '../FlosserSlide';
import FlosserImage from '../../../../../../assets/btc/patient/recommendations/Flossers/828-FlosserImg.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/Flossers/BottomImg.webp';

export default function TwistedMintFlosser() {
  return (
    <FlosserSlide
      title="Twisted Mint®"
      subtitle="FLOSSER"
      subtitleSize='2.5rem'
      sideImage={FlosserImage}
      bottomImage={BottomImage}
      bullets={[
        { text: <>Removes 2x more plaque<sup>10</sup>.</> },
        { text: <>Covers 30% more surface<sup>11</sup>.</> },
        {lines: [
            "Lightweight flexible grip",
            <>uses 20% less plastic<sup>13</sup>.</>
        ]},
        {text: <>20% LESS PLASTIC<sup>13</sup> mint flavour on all flossers.</>}
      ]}
    />
  );
}