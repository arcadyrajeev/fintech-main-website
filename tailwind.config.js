// tailwind.config.js

import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",

            color: "#4b5563",

            h1: {
              fontSize: "4rem",
              lineHeight: "0.9",
              letterSpacing: "-0.06em",
              fontWeight: "300",
              color: "#111827",
              marginTop: "0",
              marginBottom: "2rem",
            },

            h2: {
              fontSize: "2.5rem",
              lineHeight: "1",
              letterSpacing: "-0.05em",
              fontWeight: "300",
              color: "#111827",
              marginTop: "5rem",
              marginBottom: "1.5rem",
            },

            h3: {
              fontSize: "1.7rem",
              lineHeight: "1.1",
              fontWeight: "500",
              color: "#111827",
              marginTop: "3rem",
              marginBottom: "1rem",
            },

            p: {
              fontSize: "1.22rem",
              lineHeight: "2",
              marginTop: "1.7rem",
              marginBottom: "1.7rem",
              color: "#4b5563",
            },

            strong: {
              color: "#111827",
              fontWeight: "600",
            },

            a: {
              color: "#118479",
              textDecoration: "none",
            },

            blockquote: {
              borderLeft: "3px solid #118479",
              backgroundColor: "#f8fbff",
              borderRadius: "0 1.5rem 1.5rem 0",
              padding: "2rem",
              fontStyle: "italic",
              color: "#111827",
              marginTop: "3rem",
              marginBottom: "3rem",
            },

            ul: {
              marginTop: "2rem",
              marginBottom: "2rem",
              paddingLeft: "1.5rem",
            },

            li: {
              fontSize: "1.12rem",
              lineHeight: "1.9",
              marginTop: "0.6rem",
              marginBottom: "0.6rem",
            },

            "ul > li::marker": {
              color: "#118479",
            },

            hr: {
              marginTop: "5rem",
              marginBottom: "5rem",
              borderColor: "#dbe4f0",
            },

            img: {
              borderRadius: "2rem",
            },
          },
        },
      },
    },
  },

  plugins: [
    typography,

    plugin(function ({ addVariant }) {
      addVariant("portrait", "@media (orientation: portrait)");
      addVariant("landscape", "@media (orientation: landscape)");
    }),
  ],
};
