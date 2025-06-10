import ShopifyIconImage from "../../../../assets/btc/shopify-icon.webp";
import * as S from "./ShopifyIcon.styled";
export default function ShopifyIcon({ href = "https://www.shopify.com/ca" }) {
    return (<a href={href} target="_blank" rel="noopener noreferrer">
            <S.IconWrapper src={ShopifyIconImage} alt="Shopify"/>
        </a>);
}
