import {Img, staticFile, useCurrentFrame} from "remotion";
type ImageSequenceProp = {
    name: string
}
export const ImageSequence : React.FC<ImageSequenceProp> = ({name}) => {
    const frame = useCurrentFrame()
    return(
        <>
            {
                frame < 36 && frame > 0 ?
                <Img width="250px" src={staticFile(`assets/${name}${frame}.png`)} />
                :''
            }
        </>
    );
}
