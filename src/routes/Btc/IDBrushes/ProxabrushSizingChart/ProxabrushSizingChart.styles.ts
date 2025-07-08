import { styled } from "styled-components";

export const SizingChartContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export const SizingTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  border-collapse: collapse;
  margin-top: 8px;
`;

export const SizingTableHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const SizingTableRow = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const SizingHeaderCellEmpty = styled.div`
  flex: 1.5;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20px;
`;

export const SizingHeaderCell = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 20px;
`;

export const SizingCell = styled.div`
  flex: 1;
  text-align: center;
  font-size: 10px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  min-height: 20px;
`;

export const SizingCellLeft = styled.div`
  flex: 1.5;
  text-align: left;
  font-size: 10px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  min-height: 15px;
`;

export const SizingColorCircle = styled.div<{ $backgroundColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 2px auto;
  background-color: ${props => props.$backgroundColor};
`;

export const SizingTitle = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #333;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.1;
  text-align: center;
`;

export const SizingArrowIndicator = styled.span`
  font-size: 10px;
  color: #333;
  margin-right: 2px;
`;

export const SizingImageRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 8px;
`;

export const SizingImageCell = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  img {
    max-width: 65%;
    height: auto;
  }
  
  &:first-child {
    flex: 1.5;
  }
`;