import {useLocation} from 'react-router-dom';
import * as S from "./SideBar.styles";

import hom1 from '../../assets/nav-icons/hom1.jpg';
import hom2 from '../../assets/nav-icons/hom2.jpg';
import osl1 from '../../assets/nav-icons/osl1.jpg';
import osl2 from '../../assets/nav-icons/osl2.jpg';
import ptn1 from '../../assets/nav-icons/ptn1.jpg';
import ptn2 from '../../assets/nav-icons/ptn2.jpg';
import btc1 from '../../assets/nav-icons/btc1.jpg';
import btc2 from '../../assets/nav-icons/btc2.jpg';
import brs1 from '../../assets/nav-icons/brs1.jpg';
import brs2 from '../../assets/nav-icons/brs2.jpg';
import opr1 from '../../assets/nav-icons/opr1.jpg';
import opr2 from '../../assets/nav-icons/opr2.jpg';
import acs1 from '../../assets/nav-icons/acs1.jpg';
import acs2 from '../../assets/nav-icons/acs2.jpg';
import ref1 from "../../assets/nav-icons/ref1.jpg";
import ref2 from "../../assets/nav-icons/ref2.jpg";

// import NavTapSound from "../../assets/sounds/tapside.mp3";
// import playSound from "../../utils/playSound";

const navItems = [
    {
        name: 'Home',
        path: '/',
        inactiveIcon: hom1,
        activeIcon: hom2
    },
    { 
        name: 'Oral-Systemic Link', 
        path: '/oral-systemic',
        inactiveIcon: osl1,
        activeIcon: osl2
    },
    { 
        name: 'Partners in Care', 
        path: '/partners',
        inactiveIcon: ptn1,
        activeIcon: ptn2
    },
    { 
        name: 'Between Teeth Cleaning', 
        path: '/btc',
        inactiveIcon: btc1,
        activeIcon: btc2
    },
    { 
        name: 'Tooth Brush Solutions', 
        path: '/toothbrush',
        inactiveIcon: brs1,
        activeIcon: brs2
    },
    { 
        name: 'Operatory Solutions', 
        path: '/operatory',
        inactiveIcon: opr1,
        activeIcon: opr2
    },
    { 
        name: 'Accessories', 
        path: '/accessories',
        inactiveIcon: acs1,
        activeIcon: acs2
    },
    { 
        name: 'References', 
        path: '/references',
        inactiveIcon: ref1,
        activeIcon: ref2
    },

];

export default function SideBar() {
    const location = useLocation();

    const isBtcActive = location.pathname.startsWith('/btc');
    const isOralSystemicActive = location.pathname.startsWith('/oral-systemic');
    const isPartnersActive = location.pathname.startsWith('/partners');
    const isToothbrushActive = location.pathname.startsWith('/toothbrush');
    const isOperatoryActive = location.pathname.startsWith('/operatory');
    const isAccessoriesActive = location.pathname.startsWith('/accessories');

  return (
    <S.SidebarContainer>
      <S.NavList>
        {navItems.map((item) => {
          let isActive = false;
          
          if (item.path === '/btc') isActive = isBtcActive;
          else if (item.path === '/oral-systemic') isActive = isOralSystemicActive;
          else if (item.path === '/partners') isActive = isPartnersActive;
          else if (item.path === '/toothbrush') isActive = isToothbrushActive;
          else if (item.path === '/operatory') isActive = isOperatoryActive;
          else if (item.path === '/accessories') isActive = isAccessoriesActive;
          else isActive = location.pathname === item.path;

          return (
            <S.NavItem key={item.path}>
              <S.NavButton 
                to={item.path}
                className={isActive ? 'active' : ''}
                // onPointerDown={() => playSound(NavTapSound)}
              >
                <S.NavIcon 
                  src={isActive ? item.activeIcon : item.inactiveIcon}
                  alt={item.name}
                />
            
              </S.NavButton>
            </S.NavItem>
          );
        })}
      </S.NavList>
    </S.SidebarContainer>
  );
}
