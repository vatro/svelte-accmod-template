const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");

// modify 'rollup-plugin-svelte'
let rps_index_path = path.join(
  projectRoot,
  "node_modules/rollup-plugin-svelte/index.js"
);

let rps_index_file = fs.readFileSync(rps_index_path, "utf8");
rps_index_file = rps_index_file.replace(
  "svelte/compiler",
  "svelte-accmod/compiler"
);

fs.writeFileSync(rps_index_path, rps_index_file);
console.log(
  "'svelte-accmod' -> modified 'rollup-plugin-svelte': Changed path to compiler ('svelte-accmod' instead of 'svelte')."
);

// modify 'svelte-preprocess'
if (
  fs.existsSync(
    path.join(
      projectRoot,
      "node_modules/svelte-preprocess/dist/transformers/typescript.js"
    )
  )
) {
  const tsjs_file_path = path.join(
    projectRoot,
    "node_modules/svelte-preprocess/dist/transformers/typescript.js"
  );
  tsjs_file = fs.readFileSync(tsjs_file_path, "utf8");
  tsjs_file = tsjs_file.replace("svelte/compiler", "svelte-accmod/compiler");
  tsjs_file = tsjs_file.replace(
    "svelte/package.json",
    "svelte-accmod/package.json"
  );

  fs.writeFileSync(tsjs_file_path, tsjs_file);

  console.log(
    "'svelte-accmod' -> modified 'svelte-preprocess': Changed path to compiler and package.json ('svelte-accmod' instead of 'svelte')."
  );
}

// delete 'unmodified' svelte in order to avoid confusion.
fs.rmSync(path.join(projectRoot, "node_modules/svelte"), { recursive: true });
console.log(
  "'svelte-accmod' -> modified 'node_modules': Deleted 'svelte' folder in order to prevent confusion."
);
