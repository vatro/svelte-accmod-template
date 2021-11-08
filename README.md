# svelte-accmod-app

This is a modified version of the [official svelte starter template](https://github.com/sveltejs/template) using [svelte-accmod](https://github.com/vatro/svelte-accmod) instead of [svelte](https://github.com/sveltejs/svelte). The installation process is basically the same. Standard deployment workflows should be the same (*not tested yet*).

## Basic usage

Using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit vatro/svelte-accmod-template svelte-accmod-app
cd svelte-accmod-app
npm install
```

If you want to use TypeScript, after installation (*or right after cloning the template via e.g. degit, see above.*):
```bash
node scripts/setupTypeScript.js
```

Note that the `scripts/doAfterInstall.js` is running / has to run after each install modifying `rollup-plugin-svelte` & `svelte-preprocess` plugins as well as deleting the `svelte` folder from `node_modules`. See the script itself for more details. Improvement suggestions or a simpler solution suggestions are always welcome! 🙂
