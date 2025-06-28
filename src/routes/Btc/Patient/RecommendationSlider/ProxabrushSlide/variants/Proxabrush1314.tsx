import ProxabrushSlide from '../ProxabrushSlide';
import ProxabrushImg1314 from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1314/1314-proxabrush.webp';
import BottomImg from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1314/bottom-img.webp';

export default function Proxabrush1314() {
  return (
    <ProxabrushSlide
      title="Proxabrush®"
      subtitle="ULTRA TIGHT"
      sideImage={ProxabrushImg1314}
      bottomImage={BottomImg}
      bullets={[
        {
          lines: [
            "Triangular-shaped bristles",
            "remove 25% more plaque",
            "than conventional round bristles¹."
          ]
        },
        { text: "Bendable neck." },
        { text: "Flexible rubberized handle." },
        { text: "Antibacterial bristles²." }
      ]}
    />
  );
}