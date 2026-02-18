import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable React Compiler to fix compatibility issues with React 19
  reactCompiler: false,
};

export default nextConfig;