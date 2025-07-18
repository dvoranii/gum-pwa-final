import { JSX } from "react";
import * as S from "./BottomText.styled";

interface BottomTextProps {
    lines: (string | JSX.Element)[];
}

export default function BottomText({lines}: BottomTextProps){
    return(
        <S.BottomTextWrapper>
            {lines.map((line, index) => (
                <S.BottomTextP key={index} $isFirst={index === 0}>
                    {line}
                </S.BottomTextP>
            ))}
        </S.BottomTextWrapper>
    )
}