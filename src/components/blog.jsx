import { useEffect } from "preact/hooks";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  return (
    <div className="max-w-5xl **:focus-visible:outline-brand-primary  px-4 mx-auto w-full pt-16 flex flex-col gap-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl text-brand-primary font-medium tracking-tighter">
          Preact Team Blog
        </h1>
        <p className="text-gray-500 text-lg">
          Find out more about what the Preact team is working on.
        </p>
      </div>

      <div className="flex flex-col gap-15">
        {blogPosts.map((item) => {
          return (
            <div key={item.id} className="flex flex-col gap-5 relative">
              <span className="flex flex-col gap-2">
                <h1 className="text-3xl tracking-tight font-medium">
                  {item.title}
                </h1>

                <p className="text-gray-500">{item.body}</p>
              </span>
              <a href="#" className="absolute inset-0"></a>
              <span className="text-brand-primary underline underline-offset-4">
                Continue Reading
              </span>
            </div>
          );
        })}
      </div>
      <div className="py-32 text-center">
        <p className="text-gray-400">
          <span className="">Built by a bunch of </span>
          <a
            href="https://github.com/preactjs/preact/graphs/contributors"
            className="text-brand-primary font-medium"
          >
            lovely people
          </a>{" "}
          like{" "}
          <a
            href="https://github.com/vitormalencar"
            className="text-brand-primary font-medium"
          >
            @vitormalencar
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

const blogPosts = [
  {
    id: 1,
    title: "Preact Website Design Competition",
    body: "To celebrate the release of Preact 11, we're hosting a design competition for the Preact website!",
    createdAt: "01/10/2026",
  },
  {
    id: 2,
    title: "Preact 11",
    body: "The wait is finally over: Preact 11 is here! Preact 11 is an incremental update upon the stability and dependability of Preact X, bringing with it a number of new features like Hydration 2.0, automatic ref forwarding, and Object.is equality checks in hook arguments.",
    createdAt: "29/09/2026",
  },
  {
    id: 3,
    title: "Build your own Island Components",
    body: "Demystifying how island architecture works and being able to setup your own, using tools you already have around you.",
    createdAt: "06/08/2024",
  },

  {
    id: 4,
    title: "Prerendering with Preset Vite",
    body: "It's been a half-year since our prerendering plugin has somewhat quietly become available in `@preact/preset-vite`, so let's talk about it, our history, and the ecosystem at large",
    createdAt: "06/08/2024",
  },
  {
    id: 5,
    title: "Preact Website Design Competition",
    body: "To celebrate the release of Preact 11, we're hosting a design competition for the Preact website!",
    createdAt: "06/08/2024",
  },
  {
    id: 6,
    title: "Preact X, a story of stability",
    body: "Preact X has been released for five years, let's go over all the exciting things that have happened.",
    createdAt: "24/05/2024",
  },
  {
    id: 7,
    title: "Signal Boosting",
    body: "The new release of Preact Signals brings significant performance updates to the foundations of the reactive system. Read on to learn what kinds of tricks we employed to make this happen.",
    createdAt: "23/09/2022",
  },
  {
    id: 8,
    title: "Introducing Signals",
    body: "Signals are an easier way to manage your application's state compared to hooks. A signal is a container object with a special 'value' property that holds some value. Reading a signal's value property from within a component or computed function automatically subscribes to updates, and writing to the value property triggers subscriptions.",
    createdAt: "06/09/2022",
  },
];
