import * as S from "./BottomText.styled";
export default function BottomText({ lines }) {
    return (<S.BottomTextWrapper>
            {lines.map((line, index) => (<S.BottomTextP key={index} $isFirst={index === 0}>
                    {line}
                </S.BottomTextP>))}
        </S.BottomTextWrapper>);
}
