const fs = require("fs");

const isProd = process.env.NODE_ENV === "production";

// Read package.json
const packageJsonPath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

// Update values based on environment
packageJson.build.appId = isProd ? "com.dragonreel.app" : "com.dragonreel.dev";
packageJson.build.productName = isProd ? "DragonReel" : "DragonReel Dev";
packageJson.build.directories = { output: isProd ? "dist/prod" : "dist/dev" };

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated build settings:`);
console.log(`  appId: ${packageJson.build.appId}`);
console.log(`  productName: ${packageJson.build.productName}`);
console.log(`  Output directory: ${packageJson.build.directories.output}`);
