#!/bin/sh

npm run build
yarn add --dev gh-pages
yarn run deploy
