import { Router, Route } from "preact-iso";
import { motion } from "motion/react";

import { useLocation } from "preact-iso";

import { memo } from "preact/compat";

import Home from "./components/home";
import Docs from "./components/docs";
import Blog from "./components/blog";
import About from "./components/about";

import MobileNav from "./components/mobile-nav";

import CommandMenu from "./components/command-menu";

export default function Routes() {
  const { path } = useLocation();

  console.log({ pathNames: path });
  return (
    <main>
      <nav className="flex justify-between h-16 px-12 sticky top-0 **:focus-visible:outline-white z-40 bg-brand-primary text-white max-sm:hidden">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="47.68"
                height="52"
                viewBox="-256 -256 512 512"
                version="1.1"
                xml:space="preserve"
              >
                <ellipse
                  cx="0"
                  cy="0"
                  stroke-width="16px"
                  rx="75px"
                  ry="196px"
                  fill="none"
                  stroke="#fff"
                  transform="rotate(52.5)"
                />
                <ellipse
                  cx="0"
                  cy="0"
                  stroke-width="16px"
                  rx="75px"
                  ry="196px"
                  fill="none"
                  stroke="#fff"
                  transform="rotate(-52.5)"
                />
                {path === "/" && (
                  <motion.circle
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    cx="0"
                    cy="0"
                    r="34"
                    fill="#fff"
                  />
                )}
              </svg>
            </a>
          </div>
          <NavLinks />
        </div>

        <div className="flex items-center gap-6">
          <CommandMenu />
          <a
            href="https://github.com/preactjs/preact/releases/tag/11.0.1"
            target="_blank"
            className="tracking-tight font-medium text-sm hover:underline underline-offset-4"
          >
            v11.0.1
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/preactjs/preact"
              aria-label="github-logo"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs>
                  <mask id="SVGcZ81hcNk">
                    <path
                      fill="#fff"
                      d="M9.5 8c0.83 0 1.5 0.45 1.5 1c0 0.55 -0.67 1 -1.5 1c-0.83 0 -1.5 -0.45 -1.5 -1c0 -0.55 0.67 -1 1.5 -1ZM14.5 8c0.83 0 1.5 0.45 1.5 1c0 0.55 -0.67 1 -1.5 1c-0.83 0 -1.5 -0.45 -1.5 -1c0 -0.55 0.67 -1 1.5 -1Z"
                    />
                    <rect width="8" height="4" x="8" y="7">
                      <animate
                        attributeName="y"
                        dur="9s"
                        keyTimes="0;0.45;0.46;0.54;0.55;1"
                        repeatCount="indefinite"
                        values="7;7;11;11;7;7"
                      />
                    </rect>
                  </mask>
                </defs>
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    stroke-dasharray="32"
                    d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="32;0"
                    />
                  </path>
                  <path
                    stroke-dasharray="10"
                    stroke-dashoffset="10"
                    d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.62 -1.09 -1.66 -2.31 -2.31"
                  >
                    <animate
                      attributeName="d"
                      dur="3s"
                      keyTimes="0;0.5;1"
                      repeatCount="indefinite"
                      values="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.62 -1.09 -1.66 -2.31 -2.31;M9 19c-1.41 0 -3 -0.5 -4 -0.5c-0.53 0 -1 0 -2 -0.5;M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.62 -1.09 -1.66 -2.31 -2.31"
                    />
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      to="0"
                    />
                  </path>
                </g>
                <path
                  fill="currentColor"
                  d="M0 0h24v24H0z"
                  mask="url(#SVGcZ81hcNk)"
                />
              </svg>
            </a>
            <a
              href="https://x.com/preactjs"
              aria-label="twitter-logo"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="62"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="62;0"
                  />
                </path>
              </svg>
            </a>
            <a
              href="https://bsky.app/profile/preactjs.com"
              aria-label="bluesky-logo"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="76"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7.47 5.94c1.83 1.37 3.81 4.14 4.53 5.63c0.72 -1.49 2.7 -4.26 4.53 -5.63c1.33 -0.99 3.47 -1.75 3.47 0.68c0 0.49 -0.28 4.08 -0.45 4.66c-0.57 2.03 -2.65 2.55 -4.5 2.23c3.24 0.55 4.06 2.36 2.28 4.17c-3.38 3.44 -4.85 -0.87 -5.23 -1.97c-0.07 -0.2 -0.1 -0.3 -0.1 -0.22c-0 -0.08 -0.03 0.02 -0.1 0.22c-0.38 1.1 -1.86 5.41 -5.23 1.97c-1.78 -1.81 -0.96 -3.63 2.28 -4.17c-1.85 0.31 -3.93 -0.21 -4.5 -2.23c-0.17 -0.58 -0.45 -4.18 -0.45 -4.66c0 -2.43 2.14 -1.67 3.47 -0.68Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="76;0"
                  />
                </path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <MobileNav />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/docs/:version/:slug" component={Docs} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Router>
    </main>
  );
}

const NavLinks = memo(function NavLinks() {
  const { path } = useLocation();

  console.log({ path });

  return (
    <div className="flex items-center gap-5">
      {navLinks.map((item) => {
        const isActive =
          item.text === "Docs"
            ? path.startsWith("/docs/")
            : path.startsWith(item.path);
        return (
          <a href={item.path} className={`relative inline-flex`}>
            <span>{item.text}</span>

            {isActive && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                layoutId="active-indicator"
                className="absolute -bottom-2 left-1/2 size-2 -translate-x-1/2 rounded-full bg-white"
              />
            )}
          </a>
        );
      })}
    </div>
  );
});

const navLinks = [
  {
    id: 1,
    path: "/docs/v11/getting-started",
    text: "Docs",
  },
  {
    id: 2,
    path: "/blog",
    text: "Blog",
  },
  {
    id: 3,
    path: "/about",
    text: "About",
  },
];
