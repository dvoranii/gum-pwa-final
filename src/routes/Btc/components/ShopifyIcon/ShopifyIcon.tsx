import ShopifyIconImage from "../../../../assets/btc/shopify-icon.webp";
import * as S from "./ShopifyIcon.styled"

interface ShopifyIconProps {
    href?: string;
}

export default function ShopifyIcon({ href = "https://www.shopify.com/ca" }: ShopifyIconProps) {
    return (
        <S.LinkWrapper href={href} target="_blank" rel="noopener noreferrer">
            <S.IconWrapper src={ShopifyIconImage} alt="Shopify" />
        </S.LinkWrapper>
    );
}