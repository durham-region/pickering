import js from "@eslint/js"
import solid from "eslint-plugin-solid/configs/recommended"

export default [
  { ignores: ["dist"] },
  js.configs.recommended, // replaces eslint:recommended
  solid,
]
