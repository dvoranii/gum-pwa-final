import { styled } from "styled-components";
import HomeBG from "../../assets/home-page.png";

export const PageContainerOuter = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${HomeBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
