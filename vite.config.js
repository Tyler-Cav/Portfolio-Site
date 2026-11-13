import { defineConfig, loadEnv, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

const transformJsxInJs = () => ({
  name: "transform-jsx-in-js",
  enforce: "pre",
  async transform(code, id) {
    const normalizedId = id.replace(/\\/g, "/");

    if (!/\/src\/.*\.js$/.test(normalizedId)) {
      return null;
    }

    return transformWithOxc(code, id, {
      lang: "jsx",
    });
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const serverPort = Number(env.PORT) || 5173;

  return {
    plugins: [transformJsxInJs(), react()],
    server: {
      port: serverPort,
    },
    preview: {
      allowedHosts: [env.APP_HOST || ".herokuapp.com", "tylercav.dev"],
    },
  };
});
