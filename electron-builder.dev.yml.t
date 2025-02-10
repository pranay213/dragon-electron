appId: "com.dragonreel.app"
directories:
  output: "dragon-dev"
  buildResources: "assets/icons"

files:
  - "**/*"
  - "!node_modules/*"
  - "!dist/*"
  - "!build/*"

win:
  target: ["portable"]
  icon: "assets/icons/icon.ico"
  signingHashAlgorithms: ["sha256"]
  certificateFile: "cert.pfx"
  certificatePassword: ""

extraMetadata:
  name: "${PRODUCT_NAME}"

extraResources:
  - from: "assets"
    to: "assets"

publish: null
