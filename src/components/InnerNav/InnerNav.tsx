import * as S from './InnerNav.styles';
import GumLogo from "../../assets/gum-logo.svg";
import { useLocation } from 'react-router-dom';
import playSound from '../../utils/playSound';
import tapTop from "../../assets/sounds/taptop.mp3";

interface NavItem {
  path: string;
  label: string;
  end?: boolean;
  state?: Record<string, unknown>
}

interface InnerNavProps {
  navItems: NavItem[];
}

export default function InnerNav({ navItems }: InnerNavProps) {
  const location = useLocation();

    const handleTabPointerDown = (e: React.PointerEvent, path: string) => {
    playSound(tapTop);
    if (location.pathname === path) {
      e.preventDefault();
      window.location.reload();
    }
  };
  
  return (
    <S.NavTabsOuter>
      <S.GumLogoWrapper>
        <img src={GumLogo} alt="GUM Logo" />
      </S.GumLogoWrapper>
      <S.NavTabs>
        {navItems.map((item) => {
         
          const isActive = item.end 
            ? location.pathname === item.path
            : location.pathname.startsWith(`${item.path}/`);
    
          const to = item.path === "/recommend"
            ? { 
                pathname: item.path, 
                state: { from: location.pathname } 
              }
            : item.path;
          
          return (
            <S.TabLink 
              key={item.path} 
              to={to} 
              state={item.path === "/recommend" ? { from: location.pathname, navItems: navItems } : undefined}
              end={item.end}
              className={isActive ? 'active' : ''}
              onPointerDown={(e) => handleTabPointerDown(e, item.path)}
            >
              {item.label}
            </S.TabLink>
          );
        })}
      </S.NavTabs>
    </S.NavTabsOuter>
  );
}