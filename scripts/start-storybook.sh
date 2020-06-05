# delete dist
rm -r ./dist

# build devtools ui
ng build @impurity/devtools-ui

# compile styles
sass projects/impurity/devtools-ui/src/scss/styles.scss dist/public/styles/scss/styles.scss --load-path=node_modules
sass projects/impurity/devtools-ui/src/scss/styles.scss dist/public/styles/css/styles.css --load-path=node_modules

# copy assets
cp -r dist/impurity/devtools-ui/assets dist/public/assets

# build docs
compodoc -p tsconfig.json -e json -d ./dist/public/docs

# start storybook
start-storybook -p 6006 -s dist/public