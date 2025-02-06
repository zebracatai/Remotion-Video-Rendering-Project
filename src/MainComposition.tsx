import { AbsoluteFill} from "remotion";
import {ImageSequence} from "./components/ImageSequence";
import {Paragraph} from "./components/Paragraph";
import React from "react";
import {Counter} from "./components/Counter";
type CompositionProps = {
    title: string
    subtitle: string
    color: string
}

export const MainComposition :React.FC<CompositionProps> = ({title="Hello this Default Title", subtitle="Hello this Default subTitle", color="red"}) => {

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
           <ImageSequence name="frame_apngframe"/>

            <Paragraph
                title={title}
                subtitle={subtitle}
                color={color}
            ></Paragraph>
            <Counter></Counter>
        </AbsoluteFill>
    );
};
