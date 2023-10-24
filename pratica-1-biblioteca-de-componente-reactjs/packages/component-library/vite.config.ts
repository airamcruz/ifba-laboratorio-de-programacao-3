import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //dts(),
    dts({ rollupTypes: true }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      name: 'ComponentLibrary',
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'umd'],
      fileName: (format) => `component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],      
      output: {
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled',
        },
      },
    }
  }
    
})
