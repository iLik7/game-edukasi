import * as esbuild from 'esbuild';
const watch = process.argv.includes('--watch');
const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/game.js',
  minify: !watch,
  sourcemap: watch,
  target: ['es2020'],
  loader: { '.jpg': 'file', '.png': 'file' },
  assetNames: 'assets/[name]-[hash]',
  publicPath: './dist',
  legalComments: 'none',
  logLevel: 'info',
};
if (watch) { const c = await esbuild.context(opts); await c.watch(); }
else await esbuild.build(opts);
