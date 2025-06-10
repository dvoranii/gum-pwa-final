import * as S from "./BulletList.styles";
export default function BulletList({ items }) {
    return (<S.List>
            {items.map((item, index) => (<S.ListItem key={index}>
                    {typeof item === 'string' ? <span>{item}</span> : item}
                </S.ListItem>))}
        </S.List>);
}
