import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const HelloWorld = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 30, Math.max(31, durationInFrames - 30), durationInFrames],
    [0, 1, 1, 0]
  );

  const translateY = interpolate(
    frame,
    [0, 30],
    [100, 0]
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          opacity,
          fontSize: "100px",
          textAlign: "center",
          transform: `translateY(${translateY}px)`,
          transition: "all 0.5s ease-out",
        }}
      >
        Hello Remotion!
        <br />
        Animated Text!
      </div>
    </AbsoluteFill>
  );
};
