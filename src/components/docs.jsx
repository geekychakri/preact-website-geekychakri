import { useEffect } from "preact/hooks";
import { useRoute, useLocation } from "preact-iso";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";

import * as motion from "motion/react-client";

import { docs, sidebarGroups } from "../utils/docs-data";

export default function Docs() {
  const { params } = useRoute();
  console.log({ params });
  const { path } = useLocation();

  const pages = docs[params.version] || [];
  const doc = pages.find((page) => page.slug === params.slug);

  useEffect(() => {
    Prism.highlightAll();
    if (doc) {
      document.title = doc.title;
    }

    const hash = window.location.hash;

    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [path]);

  if (!doc) return <NotFound />;

  return (
    <div class="layout  **:focus-visible:outline-brand-primary max-w-5xl px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-[320px_minmax(0,1fr)]">
      <aside class="sticky  top-16 px-1 scroll-pb-10 max-sm:hidden shadow-[6px_0_8px_-6px_rgba(103,58,184,0.5)] overscroll-contain h-[calc(100vh-64px)] flex flex-col gap-5 py-8 overflow-auto scrollbar-thin scrollbar-thumb-brand-primary scrollbar-track-transparent">
        <span>
          Version: <span className="text-brand-primary font-medium">11.x</span>
        </span>

        <nav className="flex flex-col gap-8">
          {sidebarGroups.map((group) => {
            const groupPages = group.slugs
              .map((slug) => pages.find((page) => page.slug === slug))
              .filter(Boolean);

            if (!groupPages.length) return null;

            return (
              <div key={group.label} className="flex flex-col gap-3">
                <h2 className="text-lg font-medium">{group.label}</h2>

                <motion.div className="flex flex-col gap-3">
                  {groupPages.map((page) => {
                    const href = `/docs/${params.version}/${page.slug}`;

                    return (
                      <motion.a
                        key={page.slug}
                        href={href}
                        aria-current={path === href ? "page" : undefined}
                        className="aria-[current=page]:text-brand-primary aria-[current=page]:font-medium hover:text-brand-primary text-gray-500 px-4 flex items-center"
                      >
                        {path === href && (
                          <span className="starting:opacity-0 starting:scale-0 opacity-100 scale-100 duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="20.68"
                              height="25"
                              viewBox="-256 -256 512 512"
                              version="1.1"
                              xml:space="preserve"
                            >
                              <ellipse
                                cx="0"
                                cy="0"
                                stroke-width="24px"
                                rx="75px"
                                ry="196px"
                                fill="none"
                                stroke="#673ab8"
                                transform="rotate(52.5)"
                              />
                              <ellipse
                                cx="0"
                                cy="0"
                                stroke-width="24px"
                                rx="75px"
                                ry="196px"
                                fill="none"
                                stroke="#673ab8"
                                transform="rotate(-52.5)"
                              />
                              <circle cx="0" cy="0" r="34" fill="#673ab8" />
                            </svg>
                          </span>
                        )}
                        <span
                          className={`${path === href ? "translate-x-1" : "translate-x-0"} duration-200`}
                        >
                          {page.slug
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (char) => char.toUpperCase())}
                        </span>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="">
        <main
          class="prose scroll-pb-10 sm:px-8 py-8 prose-blockquote:whitespace-normal prose-blockquote:wrap-break-word min-w-0 prose-table:table-fixed prose-td:whitespace-normal prose-td:wrap-break-word prose-headings:font-normal prose-headings:tracking-tight  prose-pre:scrollbar-thin prose-pre:scrollbar-thumb-brand-primary  prose-a:text-brand-primary"
          dangerouslySetInnerHTML={{ __html: doc.html }}
        />

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
              href="https://github.com/jackmoore"
              className="text-brand-primary font-medium"
            >
              @jackmoore
            </a>
            .
          </p>
        </div>

        <div className="max-h-50 overflow-hidden ">
          <h3 className="text-[220px] max-sm:text-[90px] relative text-center tracking-tighter text-text-secondary">
            Preact
          </h3>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <main class="prose mx-auto p-8">
      <h1>Page not found</h1>
      <p>The documentation page you're looking for doesn't exist.</p>
      <a href="/">Back to docs</a>
    </main>
  );
}
