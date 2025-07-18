import ProxabrushSlide from '../ProxabrushSlide';
import Proxabrush1414Img from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1414/1414-proxabrush.webp';
import BottomImg1414 from '../../../../../../assets/btc/patient/recommendations/Proxabrush/1414/bottom-img-1414.webp';

export default function Proxabrush1414() {
  return (
    <ProxabrushSlide
      title="Proxabrush®"
      subtitle="TIGHT"
      sideImage={Proxabrush1414Img}
      bottomImage={BottomImg1414}
      bullets={[
        {
          lines: [
            "Triangular-shaped bristles",
            "remove 25% more plaque",
            <>than conventional round bristles<sup>8</sup>.</>
          ]
        },
        { text: "Bendable neck." },
        { text: "Flexible rubberized handle." },
        { text: <>Antibacterial bristles<sup>9</sup>.</> }
      ]}
    />
  );
}