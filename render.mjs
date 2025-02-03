import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import path from "path";
import minimist from "minimist";

// Parse command-line arguments
const args = minimist(process.argv.slice(2));

// Validate required arguments
if (!args.component || !args.output) {
  console.error("Usage: node render.mjs --component=<ComponentName> --output=<OutputFile> [--id=<CompositionId>]");
  process.exit(1);
}

const { component, output, id = "HelloWorld" } = args;

(async () => {
  try {
    // Step 1: Bundle your Remotion project
    const entry = "./src/index.ts"; // Path to your entry file
    const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
      webpackOverride: (config) => config,
    });

    // Step 2: Get compositions (video templates)
    const compositions = await getCompositions(bundleLocation);

    // Step 3: Find the specified composition
    const composition = compositions.find((c) => c.id === id);
    if (!composition) {
      console.error(`Composition with ID "${id}" not found. Available compositions:`);
      console.error(compositions.map((c) => c.id).join(", "));
      process.exit(1);
    }

    // Step 4: Render the video
    const outputLocation = `out/${output}.mp4`; // Output file path

    await renderMedia({
      codec: "h264",
      composition,
      serveUrl: bundleLocation,
      outputLocation,
    });

    console.log(`Video rendered successfully to ${outputLocation}!`);
  } catch (error) {
    console.error("Error rendering video:", error);
    process.exit(1);
  }
})();
