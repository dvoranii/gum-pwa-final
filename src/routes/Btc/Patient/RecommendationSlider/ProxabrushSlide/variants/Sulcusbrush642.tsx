// SulcusBrush.tsx
import ProxabrushSlide from '../ProxabrushSlide';
import SideImage from '../../../../../../assets/btc/patient/recommendations/Proxabrush/642/642-sulcus.webp';
import BottomImage from '../../../../../../assets/btc/patient/recommendations/Proxabrush/642/bottom-img-642.webp'; 
import { colors } from '../../../../../../constants/colors';
import styled from 'styled-components';

const GreenMarker = styled.span`
  color: ${colors.primary} !important;
  font-weight: 500;
  display: inline !important;
`;

export default function SulcusBrush() {

  return (
    <ProxabrushSlide
      title="Sulcus"
      subtitle="BRUSH"
      subtitleSize='clamp(18px, 3.4vw, 3.2rem)'
      sideImage={SideImage}
      sideImageHeight='90%'
      bottomImage={BottomImage}
      bottomImageMarginLeft='-28px'
      bulletMarginBottom='1.2rem'
      bullets={[
        { text: "Dual-Ended handle." },
        { lines: ["Single tuft brush removes", "plaque along the gumline." ]},
        { text: "Soft antibacterial bristles." },
        { lines: ["Suitable for crowns, bridges,", "braces, lingual wires and implants."] },
        { 
          text: (
            <span>
              Two angles to access both lingual <GreenMarker>(A)</GreenMarker> and buccal <GreenMarker>(B)</GreenMarker> gumlines.
            </span>
          )
        }
      ]}
    />
  );
}