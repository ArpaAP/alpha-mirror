import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // vite가 Rust 오류를 감추지 않게 합니다.
  clearScreen: false,
  // Tauri가 포트값 고정을 요구하므로 그 포트를 쓸 수 없다면 실패하도록 합니다.
  server: {
    strictPort: true,
  },
  // `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE`,`TAURI_DEBUG`
  // 환경 변수를 사용합니다.
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri는 es2021을 지원합니다.
    target: ["es2021", "chrome100", "safari13"],
    // 디버그 빌드에서는 최소화하지 않습니다.
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // 디버그 빌드에서 소스맵을 제공합니다.
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
