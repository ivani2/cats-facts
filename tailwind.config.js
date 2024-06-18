/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-delay-1": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s",
        "pulse-delay-2": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s",
        "pulse-delay-3": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1.5s",
      },
    },
  },
  plugins: [],
};
