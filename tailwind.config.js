export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: { color: null, backgroundColor: null },
            "pre code": {
              color: null,
              backgroundColor: null,
              padding: null,
              borderRadius: null,
              fontWeight: null,
            },

            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
};
