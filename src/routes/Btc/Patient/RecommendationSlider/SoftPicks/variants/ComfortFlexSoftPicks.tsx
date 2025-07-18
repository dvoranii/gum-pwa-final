import SoftPicksSlide from '../SoftPicks';
import SideImage from '../../../../../../assets/btc/patient/recommendations/SoftPicks/670-SoftPick.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/SoftPicks/bottom-img-650.webp';

export default function ComfortFlexSoftPicks() {
  return (
    <SoftPicksSlide
      title="Soft-Picks®"
      subtitle="COMFORT FLEX MINT"
      subtitleSize='2.8vw'
      sideImage={SideImage}
      sideImageHeight='85%'
      bottomImage={BottomImage}
      bottomImageMargin='1.4rem'
      bullets={[
        { 
          text: "Soft flexible tapered bristles designed to fit better in interproximal spaces."
        },
        { text: "Convenient, comfortable, interdental cleaning." }
      ]}
    />
  );
}