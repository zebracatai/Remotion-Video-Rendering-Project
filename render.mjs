import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import path from "path";
import minimist from "minimist";
// import axios from "axios";
// import fs from "fs";

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

if (!args.component || !args.output) {
  console.error("Usage: node render.mjs --component=<ComponentName> --output=<OutputFile>");
  process.exit(1);
}

const { component, output, id = "HelloWorld" } = args;

(async () => {
  try {
    // Step 1: Bundle your Remotion project
    const entry = "./src/index.ts";
    const bundleLocation = await bundle(path.resolve(entry), () => undefined);

    // Step 2: Get compositions (video templates)
    const compositions = await getCompositions(bundleLocation);

    const composition = compositions.find((c) => c.id === id);

    if (!composition) {
      console.error(`Composition with ID "${id}" not found.`);
      console.error(compositions.map((c) => c.id).join(", "));
      process.exit(1);
    }

    // Step 3: Render the video with dynamic props
    const outputLocation = `out/${output}.mp4`;
    const inputProps = {
      title: "Hello World",
      subtitle: "custom subtitle",
      color: "purple",
    };

    await renderMedia({
      codec: "h264",
      composition,
      serveUrl: bundleLocation,
      outputLocation,
      inputProps,
    });

    console.log(`Video rendered successfully to ${outputLocation}!`);

  //   const fileStream = fs.createReadStream(outputLocation);
  //
  //   const response = await axios.post("http://localhost:5000/upload", fileStream, {
  //     headers: {
  //       "Content-Type": "video/mp4",
  //     },
  //   });
  //
  //   console.log("Uploaded to Python server:", response.data);
  } catch (error) {
    console.error("Error rendering or uploading video:", error);
    process.exit(1);
  }
})();
