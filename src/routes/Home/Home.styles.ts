import { styled } from "styled-components";
import HomeBG from "../../assets/HOME-bg.webp";

export const PageContainerOuter = styled.div`
  background: #ffffff;  
  height: 100vh;
  width: 100%;
  background-image: url(${HomeBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 40%;
`;
