import { motion } from "motion/react";

import { Sandpack } from "@codesandbox/sandpack-react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

export default function Home() {
  return (
    <main className="px-4">
      <div className="flex flex-col gap-2 justify-center items-center pb-20">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          className="size-64 shrink-0"
          viewBox="-256 -256 512 512"
          version="1.1"
          xml:space="preserve"
          initial="hidden"
          animate="visible"
        >
          <motion.ellipse
            cx="0"
            cy="0"
            stroke-width="16px"
            rx="75px"
            ry="196px"
            fill="none"
            stroke="#673ab8"
            transform="rotate(52.5)"
            variants={draw}
          />
          <motion.ellipse
            cx="0"
            cy="0"
            stroke-width="16px"
            rx="75px"
            ry="196px"
            fill="none"
            stroke="#673ab8"
            transform="rotate(-52.5)"
            variants={draw}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="34"
            fill="#673ab8"
            variants={draw}
            custom={3}
          />
        </motion.svg>
        <div className="text-center flex flex-col gap-5 -mt-10">
          <h1 className="text-8xl max-sm:text-6xl font-medium tracking-tighter">
            Preact
          </h1>
          <h2 className="text-2xl max-sm:text-xl tracking-tight text-text-secondary">
            A fast and lightweight alternative to React
          </h2>
          <div className="flex items-center max-sm:items-stretch gap-5 max-sm:flex-col">
            <a
              href="/docs/v11/getting-started"
              className=" bg-brand-primary sm:flex-1 max-sm:flex-none  text-white shrink-0 h-14  inline-flex justify-center outline-none items-center font-medium text-xl cursor-pointer rounded-md"
            >
              Get started
            </a>
            <a
              href="/docs/v11/getting-started#aliasing-react-to-preact"
              className="border-brand-primary sm:flex-1 max-sm:flex-none border-2 shrink-0 h-14 inline-flex justify-center outline-none items-center font-medium text-xl cursor-pointer rounded-md"
            >
              Switch to Preact
            </a>
          </div>
        </div>
      </div>

      <div className="pb-20 flex flex-col gap-5">
        <h2 className="text-5xl max-sm:text-4xl font-medium tracking-tight text-center">
          Playground
        </h2>
        <Sandpack
          theme="dark"
          template="vanilla"
          customSetup={{
            dependencies: {
              preact: "^10.20.0",
            },
          }}
          files={{
            "/index.js": `import { h, render } from "preact";
      import { App } from "./App";
      import "./styles.css";

      render(<App />, document.getElementById("app"));`,

            "/App.jsx": ` import { h } from "preact";
 import { useState } from "preact/hooks";

 export function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Preact</h1>
            <p>A fast, 3kB alternative to React with the same modern API.</p>
            <button onClick={() => setCount(count + 1)}>
              Count: {count}
            </button>
          </div>
        );
 }`,

            "/index.html": `<!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Preact</title>
              </head>
      </style>
        <body>
          <div id="app"></div>
        </body>
      </html>`,
            "/styles.css": `

        body {

          font-family: -apple-system, BlinkMacSystemFont, "Avenir Next",
            Avenir, "Segoe UI", "Helvetica Neue", "Adwaita Sans", Cantarell,
            Ubuntu, Roboto, Noto, Helvetica, Arial, sans-serif;
        }


      `,
          }}
          options={{
            visibleFiles: ["/App.jsx"],
            activeFile: "/App.jsx",
            showTabs: true,
            editorHeight: "500px",
          }}
        />
      </div>

      <div className="flex flex-col gap-8 pb-20">
        <h2 className="text-5xl text-balance max-sm:text-4xl text-center tracking-tight font-medium">
          <a
            href="https://opencollective.com/preact"
            target="_blank"
            className="text-brand-primary underline underline-offset-4"
          >
            Supported by
          </a>{" "}
          the best
        </h2>

        <div className="flex flex-wrap gap-14 items-center justify-center">
          <svg
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 190.5 190.5"
            className="size-16 shrink-0"
          >
            <path
              fill="#fff"
              d="M95.252 142.873c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z"
            />
            <path
              fill="#229342"
              d="m54.005 119.07-41.24-71.43a95.227 95.227 0 0 0-.003 95.25 95.234 95.234 0 0 0 82.496 47.61l41.24-71.43v-.011a47.613 47.613 0 0 1-17.428 17.443 47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z"
            />
            <path
              fill="#fbc116"
              d="m136.495 119.067-41.239 71.43a95.229 95.229 0 0 0 82.489-47.622A95.24 95.24 0 0 0 190.5 95.248a95.237 95.237 0 0 0-12.772-47.623H95.249l-.01.007a47.62 47.62 0 0 1 23.819 6.372 47.618 47.618 0 0 1 17.439 17.431 47.62 47.62 0 0 1-.001 47.633z"
            />
            <path
              fill="#1a73e8"
              d="M95.252 132.961c20.824 0 37.705-16.881 37.705-37.706S116.076 57.55 95.252 57.55 57.547 74.431 57.547 95.255s16.881 37.706 37.705 37.706z"
            />
            <path
              fill="#e33b2e"
              d="M95.252 47.628h82.479A95.237 95.237 0 0 0 142.87 12.76 95.23 95.23 0 0 0 95.245 0a95.222 95.222 0 0 0-47.623 12.767 95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633 47.61 47.61 0 0 1 41.252-23.815z"
            />
          </svg>
          <svg
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 401 401"
            className="size-16 shrink-0"
          >
            <path d="M261.684 245.149c33.861 1.662 69.225-13.535 80.203-43.776 10.978-30.241 6.721-60.148-32.661-78.086-39.381-17.944-57.569-39.272-89.385-52.14-20.787-8.408-43.915-3.418-67.664 9.707-63.963 35.351-121.274 147.038-94.858 250.518a3.185 3.185 0 0 1-1.544 3.615 3.189 3.189 0 0 1-3.877-.64C16.282 295.06-3.759 241.788.593 184.791 8.998 74.728 105.178-7.806 215.241.599 325.296 9.003 407.83 105.182 399.425 215.245c-3.529 46.221-22.535 87.584-51.559 119.399-22.195 22.8-50.473 32.935-74.07 32.516-17.107-.303-33.839-7.112-45.409-17.066-16.516-14.228-23.191-30.485-25.474-48.635-.572-4.507-.236-16.797 2.112-25.309 1.745-6.343 6.185-18.599 12.676-23.957-7.595-3.266-17.361-10.388-20.446-13.805-.753-.838-.652-2.156.026-3.057a2.56 2.56 0 0 1 2.925-.88c6.528 2.239 14.477 4.444 22.86 5.851 11.021 1.844 24.729 4.159 38.618 4.847ZM192.777 85.086c10.789-.846 20.202 8.363 21.825 20.609 2.164 16.314-3.822 33.166-23.511 33.554-16.819.335-21.915-16.625-20.8-26.9 1.107-10.275 9.577-26.25 22.486-27.263Z" />
          </svg>
          <svg viewBox="0 0 1080 674" fill="none" className="size-16 shrink-0">
            <path
              fill="#146EF5"
              fill-rule="evenodd"
              d="M1080 0 735.386 673.684H411.695l144.221-279.203h-6.471C430.464 548.934 252.942 650.61-.0005 673.684v-275.34s161.8135-9.557 256.9385-109.568H-.0005V.0053H288.771V237.515l6.481-.026L413.254.0053h218.39V236.009l6.482-.01L760.555 0H1080Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg className="size-16 shrink-0" viewBox="0 0 1991.3 2143.2">
            <path
              d="m1851.6 1735.6c-15 111.6-90.1 208.1-195.2 251-51.5 21.4-107.3 27.9-163.1 21.4-53.6-6.4-107.3-23.6-163-55.7-77.2-43-154.5-109.4-244.6-208.1 141.6-173.8 227.4-332.5 259.6-474.1 15-66.5 17.2-126.6 10.7-182.4-8.6-53.6-27.9-103-57.9-145.9-66.5-96.5-178.1-152.3-302.5-152.3s-236 57.9-302.5 152.3c-30 42.9-49.3 92.3-57.9 145.9-8.6 55.8-6.4 118 10.7 182.4 32.2 141.6 120.1 302.5 259.6 476.2-88 98.7-167.3 165.2-244.6 208.1-55.8 32.2-109.4 49.4-163 55.8-55.3 6.2-111.2-1.2-163-21.4-105.1-42.9-180.2-139.5-195.2-251-6.4-53.6-2.1-107.2 19.3-167.3 6.4-21.5 17.2-42.9 27.9-68.6 15-34.3 32.2-70.8 49.3-107.3l2.2-4.3c148-319.7 306.8-645.8 472-963.3l6.4-12.9c17.2-32.1 34.3-66.5 51.5-98.7 17.2-34.3 36.5-66.5 60.1-94.4 45.1-51.5 105.1-79.4 171.6-79.4s126.6 27.9 171.6 79.4c23.6 27.9 42.9 60.1 60.1 94.4 17.2 32.2 34.3 66.5 51.5 98.6l6.5 12.9c163 319.6 321.8 645.7 469.8 965.4v2.1c17.2 34.3 32.2 73 49.3 107.3 10.7 25.8 21.5 47.2 27.9 68.6 17.1 55.9 23.5 109.5 14.9 165.3zm-856-100.9c-115.8-145.9-190.9-283.2-216.7-399-10.7-49.4-12.9-92.3-6.4-130.9 4.3-34.3 17.2-64.4 34.3-90.1 40.8-57.9 109.4-94.4 188.8-94.4s150.2 34.4 188.8 94.4c17.2 25.8 30 55.8 34.3 90.1 6.4 38.6 4.3 83.7-6.4 130.9-25.7 113.7-100.8 251-216.7 399zm967.6-111.5c-10.7-25.7-21.5-53.6-32.2-77.2-17.2-38.6-34.3-75.1-49.4-109.4l-2.1-2.1c-148-321.8-306.8-647.9-474.1-969.7l-6.4-12.9c-17.2-32.2-34.3-66.5-51.5-100.8-21.5-38.6-42.9-79.4-77.2-118-68.7-85.9-167.4-133.1-272.5-133.1-107.3 0-203.8 47.2-274.7 128.7-32.2 38.6-55.8 79.4-77.2 118-17.2 34.3-34.3 68.6-51.5 100.8l-6.4 12.8c-165.2 321.8-326.1 647.9-474.1 969.7l-2.1 4.3c-15 34.3-32.2 70.8-49.4 109.4-11.5 25.4-22.2 51.2-32.2 77.2-27.9 79.4-36.5 154.5-25.8 231.7 23.6 160.9 130.9 296.1 278.9 356.1 55.8 23.6 113.7 34.3 173.8 34.3 17.2 0 38.6-2.1 55.8-4.3 70.8-8.6 143.7-32.1 214.5-72.9 88-49.3 171.6-120.1 266-223.1 94.4 103 180.2 173.8 266 223.1 70.8 40.8 143.7 64.3 214.5 72.9 17.2 2.2 38.6 4.3 55.8 4.3 60.1 0 120.1-10.7 173.8-34.3 150.2-60.1 255.3-197.4 278.9-356.1 17.2-75 8.6-150-19.2-229.4z"
              fill="#e0565b"
            />
          </svg>

          <svg className="size-16 shrink-0" fill="#005AF0" viewBox="0 0 24 24">
            <title>AMP</title>
            <path d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12C5.373 24 0 18.627 0 12S5.373 0 12 0zm-.92 19.278l5.034-8.377a.444.444 0 00.097-.268.455.455 0 00-.455-.455l-2.851.004.924-5.468-.927-.003-5.018 8.367s-.1.183-.1.291c0 .251.204.455.455.455l2.831-.004-.901 5.458z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-10 sm:gap-16 max-w-2xl mx-auto w-full">
        <h2 className="text-5xl text-balance max-sm:text-4xl text-center tracking-tight font-medium">
          A different kind of library
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-y-16 gap-y-10">
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <div className="flex size-8 flex-none items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                color="#673ab8"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
                  />
                  <path
                    fill="currentColor"
                    d="M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M2 9.5h20M9 21V10"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">
                Closer to the DOM
              </h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                A thin Virtual DOM layer built on native browser features, with
                real event handlers and no required transpilation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color="#673ab8"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="11.5" cy="11.5" r="9.5" />
                <path stroke-linecap="round" d="M18.5 18.5L22 22" />
              </g>
            </svg>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">Small Size</h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                Less framework code (3kB) means less JavaScript to download,
                parse, and execute.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color="#673ab8"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                d="m5.67 9.914l3.062-4.143c1.979-2.678 2.969-4.017 3.892-3.734s.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363c2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734s-.923-1.925-.923-5.21v-.31c0-1.185 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363c-2.22 0-3.329 0-3.703-.673l-.019-.034c-.354-.683.289-1.552 1.574-3.29Z"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">
                Big Performance
              </h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                A fast, predictable diffing algorithm and automatic update
                batching keep your UI responsive.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color="#673ab8"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                d="M2.5 6.5a4 4 0 1 1 8 0v2.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 0 1-4-4Zm11 8.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 1 1-4 4zM2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">
                Portable & Embeddable
              </h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                Build full applications or embed lightweight, interactive
                components into existing projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color="#673ab8"
            >
              <g fill="none">
                <path
                  fill="currentColor"
                  d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                />
                <path
                  stroke="currentColor"
                  stroke-width="1.5"
                  d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M7 16h10"
                />
              </g>
            </svg>

            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">
                Instantly Productive
              </h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                Get productive quickly with familiar props, state, context, and
                standard HTML attributes.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              color="#673ab8"
            >
              <g fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z" />
                <path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" />
              </g>
            </svg>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl tracking-tight font-medium">
                Ecosystem Compatible
              </h3>
              <p className="text-text-secondary text-lg font-medium text-pretty leading-[1.4]">
                Reuse thousands of React components with a simple preact/compat
                alias in your bundler.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto w-full py-20 flex flex-col gap-8">
        <h3 className="text-5xl text-center text-balance font-medium tracking-tight mb-8">
          Ready to dive in?
        </h3>

        <p className="text-center text-xl text-pretty text-text-secondary">
          We've got separate guides based on whether you have experience with
          React. Pick the guide that works best for you!
        </p>

        <div className="flex items-center max-sm:items-stretch gap-5 max-sm:flex-col">
          <a
            href="/docs/v11/getting-started"
            className=" bg-brand-primary sm:flex-1 max-sm:flex-none  text-white shrink-0 h-14  inline-flex justify-center outline-none items-center font-medium text-xl cursor-pointer rounded-md"
          >
            Get started
          </a>
          <a
            href="/docs/v11/getting-started#aliasing-react-to-preact"
            className="border-brand-primary sm:flex-1 max-sm:flex-none border-2 shrink-0 h-14 inline-flex justify-center outline-none items-center font-medium text-xl cursor-pointer rounded-md"
          >
            Switch to Preact
          </a>
        </div>
      </div>

      <div className="py-32 text-center">
        <p className="text-text-secondary">
          <span className="">Built by a bunch of </span>
          <a
            href="https://github.com/preactjs/preact/graphs/contributors"
            className="text-brand-primary font-medium"
          >
            lovely people
          </a>{" "}
          like{" "}
          <a
            href="https://github.com/rschristian"
            className="text-brand-primary font-medium"
          >
            @rschristian
          </a>
          .
        </p>
      </div>

      <div className="max-h-75 overflow-hidden ">
        <h3 className="text-[320px] max-sm:text-[95px] relative text-center tracking-tighter text-text-secondary">
          Preact
        </h3>
      </div>
    </main>
  );
}
