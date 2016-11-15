# Webpack Development

This is an example of structuring your files with [Webpack](https://webpack.github.io/). Here are the steps to run and work on this barebones app locally, so you can build out your app from there.

1. Fork this repo.
1. From the the command line, navigate to a folder where you'd like to keep your forked repo.
1. Run `git clone git@github.com:USERNAME/webpack-template.git` with USERNAME being your github username.
1. Navigate to the app folder `cd app` and run `npm install`.
1. Step out of the app folder `../` and run `webpack-dev-server --progress --colors`
1. View your app at [http://localhost:8080/webpack-dev-server/bundle](http://localhost:8080/webpack-dev-server/bundle)

The Webpack Dev Server automatically watches for changes and will live-reload your work.

Keep in mind, Webpack Dev Server uses caching and builds what's new on the fly rather than recompiling your bundle.js file. If you're wanting to share your work, make sure to recompile your bundle.js file by running `webpack` in the root folder of your project before pushing it up.
