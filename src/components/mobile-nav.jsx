import { Drawer } from "vaul";

import { useState } from "preact/hooks";

import { useLocation } from "preact-iso";

import { sidebarGroups } from "../utils/docs-data";

import { AnimatePresence, motion } from "motion/react";

import useMeasure from "react-use-measure";
import CommandMenu from "./command-menu";

let duration = 0.3;

export default function MobileNav() {
  return (
    <nav className="fixed sm:hidden flex justify-between items-center px-2 bottom-0 w-full h-14 bg-brand-primary text-white z-40">
      <a href="/" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="37.68"
          height="42"
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
            stroke="currentColor"
            transform="rotate(52.5)"
          />
          <ellipse
            cx="0"
            cy="0"
            stroke-width="16px"
            rx="75px"
            ry="196px"
            fill="none"
            stroke="currentColor"
            transform="rotate(-52.5)"
          />
          <circle cx="0" cy="0" r="34" fill="currentColor" />
        </svg>
        <p className="tracking-tighter text-sm">v11.0.1</p>
      </a>

      <CommandMenu />
      <VaulDrawer />
    </nav>
  );
}

function VaulDrawer() {
  const [open, setOpen] = useState(false);
  const [showDocsTOC, setShowDocsTOC] = useState(false);
  const { url } = useLocation();

  const isDocsRoute = url.startsWith("/docs");

  const handleOpenChange = (nextOpen) => {
    if (nextOpen) {
      setShowDocsTOC(isDocsRoute);
    }

    setOpen(nextOpen);
  };

  return (
    <Drawer.Root open={open} onOpenChange={handleOpenChange}>
      <button
        onClick={() => handleOpenChange(!open)}
        className="flex cursor-pointer items-center gap-1"
        aria-label={!open ? "Open menu" : "Close menu"}
      >
        <span>
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 11h16v2H4zm0-5h16v2H4zm0 10h16v2H4z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m7.76 14.83l-2.83 2.83l1.41 1.41l2.83-2.83l2.12-2.12l.71-.71l.71.71l1.41 1.42l3.54 3.53l1.41-1.41l-3.53-3.54l-1.42-1.41l-.71-.71l5.66-5.66l-1.41-1.41L12 10.59L6.34 4.93L4.93 6.34L10.59 12l-.71.71z"
              />
            </svg>
          )}
        </span>
      </button>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex h-fit max-h-[80dvh] flex-col overflow-hidden rounded-t-[10px] bg-[#f5f5f7] outline-none">
          <div className="min-h-0 overflow-y-auto scrollbar-thin rounded-t-[10px] bg-white p-2 pb-20">
            <div
              className="px-4"
              onClick={(e) => {
                if (e.target.closest("a")) setOpen(false);
              }}
            >
              <div
                aria-hidden
                className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-gray-300"
              />

              {showDocsTOC ? (
                <>
                  <DocsTOC />
                  <hr className="h-px border-none bg-[#ebebeb] my-4" />
                  <h2 className="mb-4 font-medium">Main Menu</h2>
                  <StaticTOC />
                </>
              ) : (
                <StaticTOC />
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
const StaticTOC = () => {
  return (
    <div className="flex flex-col gap-2 text-text-secondary">
      <ul className="flex flex-col gap-2">
        <li>
          <a href="/docs/v11/getting-started">Docs</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <hr className="h-px border-none bg-[#ebebeb]" />
      <ul className="flex flex-col gap-2">
        <li>
          <a href="https://github.com/preactjs/preact" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/preactjs.com" target="_blank">
            Bluseky
          </a>
        </li>
        <li>
          <a href="https://x.com/preactjs" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

const DocsTOC = () => {
  const { path } = useLocation();

  const version = path.split("/")[2];

  return (
    <nav className="flex flex-col gap-6">
      {sidebarGroups.map((group) => (
        <div key={group.label} className="flex flex-col gap-2">
          <h2 className="tracking-tight font-medium ">{group.label}</h2>

          <div className="flex flex-col gap-2">
            {group.slugs.map((slug) => {
              const href = `/docs/${version}/${slug}`;
              const isActive = path === href;

              return (
                <a
                  key={slug}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-md ${
                    isActive
                      ? "font-medium text-brand-primary"
                      : "text-text-secondary"
                  }`}
                >
                  {slug
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

function AnimatedHeight({ children }) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      animate={{ height: height > 0 ? height : "auto" }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      style={{ overflow: "hidden" }}
    >
      <div ref={ref}>{children}</div>
    </motion.div>
  );
}

// function ResizablePanel({ children }) {
//   let [ref, { height }] = useMeasure();
//
//   return (
//     <motion.div
//       animate={{ height: height || "auto" }}
//       className="relative overflow-hidden"
//     >
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={JSON.stringify(children, ignoreCircularReferences())}
//           initial={{
//             opacity: 0,
//             // x: 382,
//           }}
//           animate={{
//             opacity: 1,
//             // x: 0,
//             transition: { duration: duration / 2, delay: duration / 2 },
//           }}
//           exit={{
//             opacity: 0,
//             // x: -382,
//             transition: { duration: duration / 2 },
//           }}
//         >
//           <div
//             ref={ref}
//             className={`${height ? "absolute" : "relative"} w-full`}
//           >
//             {children}
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </motion.div>
//   );
// }

function ResizablePanel({ children, isOpen }) {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div
      initial={false}
      animate={{ height: height || "auto" }}
      transition={
        isOpen ? { duration: 0 } : { duration: duration / 2, ease: "easeInOut" }
      }
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={children.type?.name ?? "panel-content"}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: duration / 2,
              delay: duration / 2,
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: duration / 2 },
          }}
        >
          <div
            ref={ref}
            className={`${height ? "absolute" : "relative"} w-full`}
          >
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
