import ProxabrushSlide from '../ProxabrushSlide';
import Proxabrush1614Img from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1614/1614-proxabrush.webp';
import BottomImg1614 from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1614/bottom-img-1614.webp';

export default function Proxabrush1614() {
  return (
    <ProxabrushSlide
      title="Proxabrush®"
      subtitle="WIDE"
      sideImage={Proxabrush1614Img}
      bottomImage={BottomImg1614}
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