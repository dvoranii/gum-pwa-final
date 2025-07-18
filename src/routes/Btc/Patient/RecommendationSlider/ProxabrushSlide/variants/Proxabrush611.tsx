import ProxabrushSlide from '../ProxabrushSlide';
import Proxabrush611Img from '../../../../../../assets/btc/patient/recommendations/Proxabrush/611/611-proxabrush.webp';
import BottomImg611 from '../../../../../../assets/btc/patient/recommendations/Proxabrush/611/bottom-img-611.webp';

export default function Proxabrush611() {
  return (
    <ProxabrushSlide
      title="Proxabrush®"
      subtitle="ORIGINAL HANDLE & REFILLS"
      subtitleSize="clamp(14px, 3.5vw, 1.8rem)"
      sideImage={Proxabrush611Img}
      sideImageHeight="90%"
      bottomImage={BottomImg611}
      bullets={[
        {
          lines: [
            "Additional assistance to clean",
            "posterior interproximal spaces."
          ]
        },
        { text: "Handle allows different sized tips." },
        { text: "Ergonomic handle." },
        { 
          lines: [
            "Triangular-shaped bristles",
            "remove 25% more plaque",
            "than conventional round bristles⁸."
          ] 
        }
      ]}
    />
  );
}