import { Command } from "cmdk";

import { useState, useEffect } from "preact/hooks";

import { useLocation } from "preact-iso";

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  const { route } = useLocation();

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="flex gap-5 items-center">
        <button
          onClick={() => setOpen(true)}
          className="text-white bg-[#58319d] cursor-pointer hover:scale-[98%] will-change-transform duration-150 flex items-center justify-between font-medium pl-3.5 pr-3 rounded-md border-white w-48 py-1"
        >
          <span className="flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <circle cx="11.5" cy="11.5" r="9.5" />
                  <path stroke-linecap="round" d="M18.5 18.5L22 22" />
                </g>
              </svg>
            </span>
            <span>Search...</span>
          </span>
        </button>
      </div>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        overlayClassName="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[20%] z-50 w-[min(560px,calc(100%-2rem))] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
        className="flex flex-col"
        loop
      >
        <div className="flex items-center border-b border-gray-200 p-4">
          <Command.Input
            placeholder="Type a command or search..."
            className="h-5 w-full px-2 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          <kbd className="ml-3 shrink-0 rounded border border-gray-200 px-1.5 py-0.5 text-xs text-text-secondary">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[min(60vh,400px)] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-text-secondary">
            No results found.
          </Command.Empty>

          <Command.Item
            value="docs"
            onSelect={() => {
              route("/docs/v11/getting-started");
              setOpen(!open);
            }}
            className="flex cursor-pointer text-brand-primary font-medium items-center rounded-md px-3 py-2 text-sm  outline-none data-[selected=true]:bg-[rgba(103,58,184,0.1)]"
          >
            Docs
          </Command.Item>

          <Command.Item
            value="blog"
            onSelect={() => {
              route("/blog");
              setOpen(false);
            }}
            className="flex cursor-pointer text-brand-primary font-medium items-center rounded-md px-3 py-2 text-sm  outline-none data-[selected=true]:bg-[rgba(103,58,184,0.1)]"
          >
            Blog
          </Command.Item>

          <Command.Item
            value="about"
            onSelect={() => {
              route("/about");
              setOpen(false);
            }}
            className="flex cursor-pointer text-brand-primary font-medium items-center rounded-md px-3 py-2 text-sm  outline-none data-[selected=true]:bg-[rgba(103,58,184,0.1)]"
          >
            About
          </Command.Item>
        </Command.List>

        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
          <span>Navigate with ↑ ↓</span>
          <span>
            Select <kbd className="rounded border border-gray-200 px-1">↵</kbd>
          </span>
        </div>
      </Command.Dialog>
    </>
  );
};

export default CommandMenu;
