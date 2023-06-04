DocSearch v3 plugin for HonKit / GitBook legacy

## Installation

```
npm install gitbook-plugin-docsearch-v3
```

## Usage

Apply on https://docsearch.algolia.com/, to get free Algolia DocSearch credentials. Then On `book.json`, do the following steps:

- Disable the `search` and `lunr` plugins.
- Add the `docsearch-v3` plugin.
- specify your DocSearch credentials under `pluginsConfig.docsearch`.

```js
{
    "plugins": [
        "-search",
        "-lunr",
        "docsearch-v3"
    ],
    "pluginsConfig": {
        "docsearch": {
            "appId": "<your-appId>",
            "apiKey": "<your-apiKey>",
            "indexName": "<your-indexName>"
        }
    }
}
```

## License

[MIT License](LICENSE)

## Author

[Noval Agung Prayogo](mailto:hello@novalagung.com)
