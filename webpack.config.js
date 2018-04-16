import path from "path"
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { config, environment } from "@anzar/build"


export function root(location) {
    return path.resolve(__dirname, location)
}


export default config.multi("@anzar/build-electron", {
    renderer: {
        entry: {
            polyfills: root("src/polyfills.ts"),
            app: root("src/app.module.ts")
        }
    },

    main: {
        entry: {
            main: root("src/main.ts")
        }
    }
})
