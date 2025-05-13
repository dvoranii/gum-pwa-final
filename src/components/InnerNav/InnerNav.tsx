import * as S from './InnerNav.styles';
import GumLogo from "../../assets/GUMlogo.png";

interface NavItem {
  path: string;
  label: string;
  end?: boolean;
}

interface InnerNavProps {
  navItems: NavItem[];
}

export default function InnerNav({ navItems }: InnerNavProps) {
  return (
    <S.NavTabsOuter>
      <S.GumLogoWrapper>
        <img src={GumLogo} alt="GUM Logo" />
      </S.GumLogoWrapper>
      <S.NavTabs>
        {navItems.map((item) => (
          <S.TabLink 
            key={item.path} 
            to={item.path} 
            end={item.end}
          >
            {item.label}
          </S.TabLink>
        ))}
      </S.NavTabs>
    </S.NavTabsOuter>
  );
}