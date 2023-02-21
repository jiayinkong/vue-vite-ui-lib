import { defineConfig } from 'vite-plugin-windicss';

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
];
export default defineConfig({
    safelist: [
        ...colors.map((v) => `bg-${v}-500`),
        ...colors.map((v) => `hover:bg-${v}-700`),
    ]
})