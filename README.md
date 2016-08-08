# chrome-extension-101
A quick introduction to create your own Chrome Extension

## Some tipps for development

You can use all the dev tools you know and love from web developing such as

- Gulp / Grunt
- Sass
- Bower

I'd also recommend to create a json linting task for your ```manifest.json``` because it's just enoying and time consuming to reload your extension just to realize you have some linting errors in your manifest.json

If you are using gulp, you could use:
- [https://github.com/rogeriopvl/gulp-jsonlint](https://github.com/rogeriopvl/gulp-jsonlint)



## Examples

### extension-01
Smallest possible extension

### extension-02
Overwrite Chrome's default [New Tab](https://developer.chrome.com/extensions/override) page. Add a icon.

### extension-03
Example for a [background script](https://developer.chrome.com/extensions/background_pages). It also shows how to use the Chrome Extension Api: We ask for the [permission](https://developer.chrome.com/extensions/declare_permissions) to access the [system.cpu Api](https://developer.chrome.com/extensions/system_cpu) and show the number of processors of the CPU.

### extension-04
[browser_action](https://developer.chrome.com/extensions/browserAction) example. Open a popup when icon is clicked and show processor information.

## Resources
- [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)
- Api Overview: [https://developer.chrome.com/extensions/api_index](https://developer.chrome.com/extensions/api_index)
- Manifest: [https://developer.chrome.com/extensions/manifest](https://developer.chrome.com/extensions/manifest)
