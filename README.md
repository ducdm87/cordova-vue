# Cordova and Vue Template 
This is a very simple Template for Cordova. (under construction)

## Structure of your template
```batch
package
├── package.json
├──	webpack.config.js
└── src (contains develop files)
    ├── assets 
	├── components 
	├── (files and folders)
    └── main.js
```
### Install npm
Install npm for preview in browser.
```bash
# create cordova proyect with this template
cordova create hello com.example.hello HelloWorld --template cordova-vue

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build and run in android device
npm run publish
```

