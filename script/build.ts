import { config } from '../vite.config';
import { build, InlineConfig, defineConfig, UserConfig } from 'vite';
import * as path from 'path';
import * as fs from 'fs-extra';

const buildAll = async () => {
  const baseOutDir = config.build.outDir;

// 全量打包
build(defineConfig(config as UserConfig) as InlineConfig);

const srcDir = path.resolve(__dirname, '../src/');
const componentsDir = fs.readdirSync(srcDir).filter(name => {
  const componentDir = path.resolve(srcDir, name);
  const isDir = fs.lstatSync(componentDir).isDirectory();
  return isDir && fs.readdirSync(componentDir).includes('index.ts');
});

  for(let name of componentsDir) {
    const outDir = path.resolve(baseOutDir, name);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name,
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);
    fs.outputFile(
      path.resolve(outDir, 'package.json'),
      `
{
  "name": "vue-vite-ui/${name}",
  "main": "index.umd.js",
  "module": "index.mjs"
}
      `,
      'utf-8'
    )
  }
}

buildAll();
