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

**Please note**: this template uses [svelte-accmod-patch](https://github.com/vatro/svelte-accmod-patch) which replaces original [Svelte](https://github.com/sveltejs/svelte) files (see `svelte` directory inside `node_modules`) with corresponding (*version*) [svelte-accmod](https://github.com/vatro/svelte-accmod) files. See [svelte-accmod-patch-README](https://github.com/vatro/svelte-accmod-patch/blob/main/README.md) for more details.
