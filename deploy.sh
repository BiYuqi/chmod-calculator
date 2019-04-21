#!/bin/bash

set -e

npm install

# generate build files
npm run build:github

cd ./build

git init
git add .
git commit -m "depoly"
git push -f "https://${ChmodCalculator}@github.com/BiYuqi/chmod-calculator.git" master:gh-pages
