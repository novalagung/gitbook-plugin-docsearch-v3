Algolia DocSearch v3 plugin for HonKit / GitBook legacy

## Installation

### Using HonKit

```bash
npm install gitbook-plugin-docsearch-v3 --save-dev
```

### Using GitBook Legacy

Follow the steps under **Usage** section first, then run the following command:

```bash
gitbook install
```

## Usage

Apply on https://docsearch.algolia.com/ to get free Algolia DocSearch credentials. Next, on `book.json` do the following steps:

- Disable the `search` and `lunr` plugins (by adding `-` prefix on the plugin name).
- Add the `docsearch-v3` plugin.
- Specify your DocSearch credentials under `pluginsConfig.docsearch`.

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
