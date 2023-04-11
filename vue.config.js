"use strict";
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

const name = "银闪2";

module.exports = {
    lintOnSave: process.env.NODE_ENV === "development",
    // 路径别名
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                "@": resolve("src"),
                "@api": resolve("src/api"),
                "@c": resolve("src/components"),
                "@wc": resolve("src/wxcomponents"),
                "@a": resolve("src/assets"),
                "@s": resolve("src/styles"),
                "@u": resolve("src/utils"),
                "@p": resolve("src/pages"),
            },
        },
    },
};
