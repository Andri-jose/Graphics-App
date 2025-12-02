module.exports = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
  "env": {
    "development": {
      "plugins": [
        "react-refresh/babel",
      ]
    },
    "production": {
      "plugins": [
        "@babel/plugin-transform-react-inline-elements",
        "@babel/plugin-transform-typescript",
      ]
    }
  },
  "ignore": [
    "node_modules",
  ]
}
