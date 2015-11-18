'use strict';

WebApp.connectHandlers.use(
    Npm.require("connect-inject")({
        snippet: "<script>function handleOpenURL(url){window.customSchemeUrl=url;}</script>",
        rules: [
            {
                match: /<\/head>/,
                fn: function(w, s) {
                    return s + w;
                }
            }
        ]
    })
);