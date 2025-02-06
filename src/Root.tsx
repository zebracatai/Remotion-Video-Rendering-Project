
import { Composition } from "remotion";
import { MainComposition } from "./MainComposition";

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="MainComposition"
                component={MainComposition}
                durationInFrames={60}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
