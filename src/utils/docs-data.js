import { Marked } from "marked";

const files = import.meta.glob("/docs/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const createHeadingId = (text, usedIds) => {
  const base = slugify(text) || "heading";
  const count = usedIds.get(base) ?? 0;

  usedIds.set(base, count + 1);

  return count === 0 ? base : `${base}-${count}`;
};

const renderToc = (headings) => {
  const root = [];
  const stack = [{ depth: 1, children: root }];

  for (const heading of headings) {
    if (heading.depth === 1) continue;

    const node = {
      ...heading,
      children: [],
    };

    // Find the nearest preceding heading with a smaller depth.
    while (stack.length > 1 && stack[stack.length - 1].depth >= heading.depth) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push({
      depth: heading.depth,
      children: node.children,
    });
  }

  const renderItems = (items) =>
    items
      .map(
        ({ text, id, depth, children }) => `
          <li class="toc-depth-${depth}">
            <a href="#${id}">${text}</a>
            ${children.length ? `<ul>${renderItems(children)}</ul>` : ""}
          </li>
        `,
      )
      .join("");

  if (!root.length) return "";

  return `
    <nav class="table-of-contents" aria-label="Table of contents">
      <ul>${renderItems(root)}</ul>
    </nav>
  `;
};

// Compile md

export const docs = {};

for (const [path, raw] of Object.entries(files).sort(([a], [b]) =>
  a.localeCompare(b),
)) {
  const match = path.match(/docs\/([^/]+)\/(?:.*\/)?([^/]+)\.md$/);

  if (!match) {
    console.warn(`Skipped ${path}: expected docs/<version>/<name>.md`);
    continue;
  }

  const [, version, name] = match;

  // Remove YAML frontmatter.
  const content = raw.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, "");

  // Collect headings from this document.
  const lexer = new Marked();
  const tokens = lexer.lexer(content);

  const headings = [];
  const usedIds = new Map();

  for (const token of tokens) {
    if (token.type !== "heading") continue;

    headings.push({
      text: token.text,
      depth: token.depth,
      id: createHeadingId(token.text, usedIds),
    });
  }

  // Render headings with the same IDs used by the TOC.
  let headingIndex = 0;
  const parser = new Marked();

  parser.use({
    renderer: {
      heading({ tokens, depth }) {
        const heading = headings[headingIndex++];

        if (!heading) {
          return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>`;
        }

        return `<h${depth} id="${heading.id}">${this.parser.parseInline(tokens)}</h${depth}>`;
      },
    },
  });

  const html = parser
    .parse(content)
    .replace(/<toc\s*><\/toc>/gi, renderToc(headings));

  docs[version] ||= [];

  docs[version].push({
    slug: name.replace(/^\d+-/, ""),
    title: content.match(/^#\s+(.+)$/m)?.[1] || name.replace(/-/g, " "),
    html,
  });
}

export const sidebarGroups = [
  {
    label: "Introduction",
    slugs: ["getting-started", "upgrading-from-10.x", "differences-to-react"],
  },
  {
    label: "Essentials",
    slugs: ["components", "hooks", "signals", "forms", "references", "context"],
  },
  {
    label: "Debug & Test",
    slugs: [
      "debugging-tools",
      "preact-testing-library",
      "unit-testing-with-enzyme",
    ],
  },
  {
    label: "Advanced",
    slugs: [
      "api-reference",
      "web-components",
      "server-side-rendering",
      "option-hooks",
      "typescript",
      "no-build-workflows",
    ],
  },
  {
    label: "Libraries",
    slugs: ["preact-iso", "preact-custom-element", "preact-root-fragment"],
  },
];
