import SoftPicksSlide from '../SoftPicks';
import SideImage from '../../../../../../assets/btc/patient/recommendations/SoftPicks/650-SoftPick.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/SoftPicks/bottom-img-650.webp';

export default function AdvancedSoftPicks() {
  return (
    <SoftPicksSlide
      title="Soft-Picks®"
      subtitle="ADVANCED"
      sideImage={SideImage}
      bottomImage={BottomImage}
      gap='2.4rem'
      bullets={[
        { 
          lines: ["With a longer curved", 
            "handle for improved",
            "maneuverability and better",
            "clean in hard-to-reach areas."
          ]
        }
      ]}
    />
  );
}