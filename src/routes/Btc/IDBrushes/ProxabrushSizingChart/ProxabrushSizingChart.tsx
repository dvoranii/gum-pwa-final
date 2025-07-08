// ProxabrushSizingChart.jsx
import React from 'react';
import * as S from "./ProxabrushSizingChart.styles";

import MicroTightDiagram from "../../../../assets/btc/id-brushes/micro-tight-diagram.webp";
import UltraTightDiagram from "../../../../assets/btc/id-brushes/ultra-tight-diagram.webp";
import TightDiagram from "../../../../assets/btc/id-brushes/tight-diagram.webp";
import ModerateDiagram from "../../../../assets/btc/id-brushes/moderate-diagram.webp";
import WideDiagram from "../../../../assets/btc/id-brushes/wide-diagram.webp";
import ExtraWideDiagram from "../../../../assets/btc/id-brushes/extra-wide-diagram.webp";

const ProxabrushSizingChart = () => {
  const brushSizes = [
    {
      color: '#878ec7',
      title: 'Micro Tight',
      boxCode: '—',
      bagCode: '1312B',
      diagramImage: MicroTightDiagram
    },
    {
      color: '#ed1c24',
      title: 'Ultra Tight',
      boxCode: '1314P',
      bagCode: '1314B',
      diagramImage: UltraTightDiagram
    },
    {
      color: '#68bd45',
      title: 'Tight',
      boxCode: '1414P',
      bagCode: '1414B',
      diagramImage: TightDiagram
    },
    {
      color: '#ffd204',
      title: 'Moderate',
      boxCode: '1514P',
      bagCode: '1514B',
      hasArrow: false,
      diagramImage: ModerateDiagram
    },
    {
      color: '#00abd2',
      title: 'Wide',
      boxCode: '1614P',
      bagCode: '1614B',
      diagramImage: WideDiagram
    },
    {
      color: '#9a9795',
      title: 'Extra Wide',
      boxCode: '—',
      bagCode: '1618B',
      diagramImage: ExtraWideDiagram
    }
  ];

  return (
    <S.SizingChartContainer>
      <S.SizingTable>
        <S.SizingImageRow>
          <S.SizingHeaderCellEmpty />
          {brushSizes.map((size, index) => (
            <S.SizingImageCell key={index}>
              <img src={size.diagramImage} alt={`${size.title} diagram`} />
            </S.SizingImageCell>
          ))}
        </S.SizingImageRow>

        <S.SizingTableHeader>
          <S.SizingHeaderCellEmpty />
          {brushSizes.map((size, index) => (
            <S.SizingHeaderCell key={index}>
              <S.SizingColorCircle $backgroundColor={size.color} />
              <S.SizingTitle>
                {size.hasArrow && <S.SizingArrowIndicator>▶</S.SizingArrowIndicator>}
                {size.title}
              </S.SizingTitle>
            </S.SizingHeaderCell>
          ))}
        </S.SizingTableHeader>
        
        <S.SizingTableRow>
          <S.SizingCellLeft>
            Box (cello wrapped), 36/box
          </S.SizingCellLeft>
          {brushSizes.map((size, index) => (
            <S.SizingCell key={index}>{size.boxCode}</S.SizingCell>
          ))}
        </S.SizingTableRow>
        
        <S.SizingTableRow>
          <S.SizingCellLeft>
            Bag (bulk), 50/bag
          </S.SizingCellLeft>
          {brushSizes.map((size, index) => (
            <S.SizingCell key={index}>{size.bagCode}</S.SizingCell>
          ))}
        </S.SizingTableRow>
      </S.SizingTable>
    </S.SizingChartContainer>
  );
};

export default ProxabrushSizingChart;