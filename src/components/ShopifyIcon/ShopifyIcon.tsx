import ShopifyIconImage from "../../assets/shopify-icon.webp";
import * as S from "./ShopifyIcon.styled";
import { ShopifyIconProps } from "./ShopifyIconProps.types";

export default function ShopifyIcon({ 
    href = "https://www.shopify.com/ca", 
    right, 
    bottom 
}: ShopifyIconProps) {
    return (
        <S.LinkWrapper 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            $right={right}
            $bottom={bottom}
        >
            <S.IconWrapper src={ShopifyIconImage} alt="Shopify" />
        </S.LinkWrapper>
    );
}