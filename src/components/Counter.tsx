import { spring, useCurrentFrame, useVideoConfig} from "remotion"
import React from "react";
export const Counter :React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    const enter = spring({
        fps,
        frame,
        config: {
            damping: 200,
        },
    });

    const exit = spring({
        fps,
        config: {
            damping: 200,
        },
        durationInFrames: 20,
        delay: durationInFrames - 20,
        frame,
    });

    const scale = enter - exit;
    return(
        <>
            <div
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#4290f5",
                    borderRadius: 20,
                    transform: `scale(${scale})`,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    fontSize: 50,
                    color: "white",
                }}
            >
                {frame}
            </div>
        </>
    )
}
