require(["gitbook"], function(gitbook) {
    let pluginsConfig = {};
    const initDocSearch = function() {
        const cfg = pluginsConfig.docSearch;
        setTimeout(() => {
            docsearch({
                appId: cfg.appId,
                apiKey: cfg.apiKey,
                indexName: cfg.indexName,
                debug: cfg.debug ?? false,
                container: '#book-doc-search-input',
            });
        }, 2000)
    }
    gitbook.events.bind("start", function(e, config) {
        pluginsConfig = config;
        initDocSearch();
    });
    gitbook.events.bind("page.change", function() {
        initDocSearch();
    });
});
