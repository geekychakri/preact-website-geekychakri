import { useEffect } from "preact/hooks";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="flex flex-col gap-15 px-4  **:focus-visible:outline-brand-primary">
      <div className="flex flex-col gap-20 mb-20">
        <div className="text-center max-w-2xl w-full mx-auto flex flex-col gap-5 items-center justify-center pt-16">
          <h2 className=" text-5xl text-brand-primary font-medium tracking-tighter">
            Who's using Preact?
          </h2>
          <p className="text-2xl max-sm:text-xl text-pretty text-gray-400">
            Preact is used by a wide spectrum of websites, from Open Source
            projects to large multinational corporations. Below is a small
            sampling of organizations that depend on Preact for public-facing
            projects.
          </p>
        </div>
        <div className="marquee flex gap-8">
          <ul className="flex gap-8 marquee__content">
            {companies.map((company, i) => {
              return (
                <li className="">
                  <img src={company} className="size-16" />
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-8 marquee__content" aria-hidden="true">
            {companies.map((company, i) => {
              return (
                <li className="">
                  <img src={company} className="size-16" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl text-brand-primary tracking-tighter text-center font-medium">
          Preact's Goals
        </h2>
        <div className="max-w-2xl w-full mx-auto flex flex-col gap-5 ">
          <h3 className="text-2xl font-medium tracking-tight">Goals</h3>
          <p className="text-lg text-gray-500">
            Preact aims to deliver on a few key goals:
          </p>

          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>
              Performance:{" "}
              <span className="text-gray-500">
                Render quickly & efficiently
              </span>
            </li>
            <li>
              Size:{" "}
              <span className="text-gray-500">
                Small size, lightweight (approximately 3.5 kB)
              </span>
            </li>
            <li>
              Efficiency:{" "}
              <span className="text-gray-500">
                Effective memory usage (avoiding GC thrash)
              </span>
            </li>
            <li>
              Understandability:{" "}
              <span className="text-gray-500">
                Understanding the codebase should take no more than a few hours.
              </span>
            </li>
            <li>
              Compatibility:{" "}
              <span className="text-gray-500">
                Preact aims to be largely compatible with the React API.
                preact/compat attempts to achieve as much compatibility with
                React as possible.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-2xl w-full mx-auto flex flex-col gap-5 ">
        <h3 className="text-2xl font-medium tracking-tight">Non-Goals</h3>
        <p className="text-lg text-gray-500">
          Some React features are intentionally omitted from Preact, either
          because they are not achievable while meeting the primary project
          goals listed above or because they don't fit within the scope of
          Preact's core set of functionality.
        </p>

        <p>The intentional items under Differences to React:</p>

        <ul className="list-inside list-disc flex flex-col gap-2">
          <li>
            <code>PropTypes</code>,{" "}
            <span className="text-gray-500">
              which are easily used as a separate library
            </span>
          </li>
          <li>
            <code>Children</code>,{" "}
            <span className="text-gray-500">
              can be replaced with native arrays
            </span>
          </li>
          <li>
            <code>Synthetic Events</code>,{" "}
            <span className="text-gray-500">
              since Preact does not attempt to patch issues in older browsers
              like IE8
            </span>
          </li>
        </ul>
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
            href="https://github.com/nichoth"
            className="text-brand-primary font-medium"
          >
            @nichoth
          </a>
          .
        </p>
      </div>

      <div className="max-h-75 overflow-hidden ">
        <h3 className="text-[320px] max-sm:text-[95px] relative text-center tracking-tighter text-text-secondary">
          Preact
        </h3>
      </div>
    </div>
  );
}

const companies = [
  "https://preactjs.com/we-are-using/anwb.svg",
  "https://preactjs.com/we-are-using/groupon.svg",
  "https://preactjs.com/we-are-using/etsy.svg",
  "https://preactjs.com/we-are-using/deno.svg",
  "https://preactjs.com/we-are-using/dominos.svg",
  "https://preactjs.com/we-are-using/hugo.svg",
  "https://preactjs.com/we-are-using/loveholidays.svg",
  "https://preactjs.com/we-are-using/rocketchat.svg",
  "https://preactjs.com/we-are-using/mopinion.svg",
  "https://preactjs.com/we-are-using/bakkenbaeck.svg",
  "https://preactjs.com/we-are-using/leesa.svg",
];
