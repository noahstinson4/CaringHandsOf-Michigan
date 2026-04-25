import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { brand: { blue: "#6EC1E4", dark: "#1F6F96" } } } }, plugins: [] };
export default config;
