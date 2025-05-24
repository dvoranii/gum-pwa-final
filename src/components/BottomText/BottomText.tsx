import * as S from "./BottomText.styled";

interface BottomTextProps {
    text: string;
}

export default function BottomText({text}: BottomTextProps){

    return(
        <S.BottomTextWrapper>
            <S.BottomTextP>
                {text}
            </S.BottomTextP>
        </S.BottomTextWrapper>
    )
}