**Remotion Video Rendering Project**
This project uses Remotion to programmatically create and render videos using React. It supports dynamic rendering of components via command-line arguments and can be run locally or in a Docker container.

Features
* Dynamic Component Rendering: Render different components by passing arguments.
* Docker Support: Run the project in a Docker container for consistent environments.
* Customizable Output: Specify output file names, composition IDs, and more.

Prerequisites
Before you begin, ensure you have the following installed:

* Node.js (v20 or higher)
* npm or Yarn
* Docker (optional, for containerized rendering)

Setup
Clone the repository:

`git clone https://github.com/your-username/your-repo.git`

`cd your-repo`


**Install dependencies:**


`npm install`

Build the Docker image (optional):

`docker build -t my-video-renderer .`

Usage
Running Locally
Start the development server:

`npm run dev`

Open your browser at http://localhost:3000 to preview your video.

Render a video:

Use the render.mjs script to render a video:


`node render.mjs --component=HelloWorld --output=hello-world-video --id=HelloWorld`

The rendered video will be saved to out/hello-world-video.mp4.

Running with Docker
1. Run the Docker container:
  Use the following command to render a video in a Docker container:
  `docker run -v $(pwd)/out:/app/out my-video-renderer --component=HelloWorld --output=hello-world-video --id=HelloWorld`

  The rendered video will be saved to out/hello-world-video.mp4 on your local machine.

2. Run with custom arguments:
   You can customize the component, output file name, and composition ID:

  `docker run -v $(pwd)/out:/app/out my-video-renderer --component=AnotherComponent --output=another-video --id=AnotherComposition`

Available Commands

Command	Description

`npm run dev`	Start the development server.

`node render.mjs --component=<name> --output=<file> --id=<id>`	Render a video locally.

`docker build -t my-video-renderer .`	Build the Docker image.

`docker run -v $(pwd)/out:/app/out my-video-renderer --component=<name> --output=<file> --id=<id>`	Render a video in Docker.

Customization
Adding New Components
Create a new component in the src/ folder (e.g., src/NewComponent.tsx).

