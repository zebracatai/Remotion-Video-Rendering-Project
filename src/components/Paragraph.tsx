import {interpolate, useCurrentFrame, useVideoConfig} from "remotion";

type ParagraphProps = {
    title: string;
    subtitle: string;
    color: string
}
export const Paragraph : React.FC<ParagraphProps> = ({title, subtitle, color}) => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(
        frame,
        [0, 30, Math.max(31, durationInFrames - 30), durationInFrames],
        [0, 1, 1, 0]
    );

    const translateY = interpolate(frame, [0, 30], [100, 0]);
    return(
        <>
            {
                title && subtitle ?
                    <div

                        style={{
                            opacity,
                            fontFamily:"fantasy",
                            fontSize: "100px",
                            textAlign: "center",
                            transform: `translateY(${translateY}px)`,
                            transition: "all 0.5s ease-out",
                            color,
                        }}
                    >
                        {title}
                        <br/>
                        {subtitle}
                    </div>
                    :''
            }
        </>
    )
}
