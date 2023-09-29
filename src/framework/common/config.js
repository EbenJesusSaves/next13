const path = require("path")

const merge = require("deepmerge")
function withFrameworkConfig(defaultConfig = {}) {
    const framework = "shopify"

    if (!framework) {
        throw new Error("The api framework is missing, please add a valid provider")
    }

    const frameworkNextConfig = require(path.join("../", framework, "next.config"))
    const config = merge(defaultConfig, frameworkNextConfig)

    const tsConfig = require(path.join(process.cwd, framework, 'next.config.json'))
    return config

}

module.exports = { withFrameworkConfig }