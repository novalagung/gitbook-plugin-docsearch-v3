const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

let urls = [];

module.exports = {
    book: {
        assets: './src',
        js: [
            'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
            'init.js'
        ],
        css: [
            'https://cdn.jsdelivr.net/npm/@docsearch/css@3',
            'style.css'
        ]
    },
    hooks: {
        "page": function (page) {
            if (this.output.name != 'website') {
                return page;
            }

            const lang = this.isLanguageBook() ? `${this.config.values.language}/` : '';
            const outputUrl = this.output.toURL(`_book/${lang}${page.path}`);
            const normalizedUrl = outputUrl + (path.extname(outputUrl) !== '.html' ? 'index.html' : '');
            if (!urls.some(item => item.url === normalizedUrl)) {
                urls.push({ url: normalizedUrl });
            }

            return page;
        },

        "finish": function () {
            urls.forEach(item => {
                const html = fs.readFileSync(item.url, { encoding: 'utf-8' });
                const $ = cheerio.load(html);

                if ($('#book-search-input').length > 0) {
                    throw new Error('search and lunr plugins must be disabled');
                }
                
                $('.book-summary').prepend('<div id="book-search-input"><div id="book-doc-search-input"></div></div>');
                fs.writeFileSync(item.url, $.root().html(), { encoding: 'utf-8' });
            });
        }
    }
}
