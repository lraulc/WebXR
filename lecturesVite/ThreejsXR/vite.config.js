import { defineConfig } from "vite";

export default defineConfig({
    server: {
        https: {
            key:"./SSL/key.pem",
            cert: "./SSL/cert.pem"
        }
    }
})