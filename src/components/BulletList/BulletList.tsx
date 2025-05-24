import * as S from "./BulletList.styles";

interface BulletListProps {
    items: string[] | React.ReactNode[];
}

export default function BulletList({items}: BulletListProps) {
    return(
        <S.List>
            {items.map((item, index) => (
                 <S.ListItem key={index}>
                    {typeof item === 'string' ? <span>{item}</span> : item}
                </S.ListItem>
            ))}
        </S.List>
    );
}
