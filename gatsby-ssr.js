const React = require("react")
// Adds a class name to the body element
exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <script key="focus-visible.min.js" src="/node_modules/focus-visible/dist/focus-visible.min.js" type="text/javascript" async />
    ])
}
