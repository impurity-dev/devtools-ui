# delete dist
rm -r ./dist

# build devtools ui
ng build @impurity/devtools-ui

# compile styles
sass projects/impurity/devtools-ui/src/scss/styles.scss dist/storybook-assets/styles/scss/styles.scss --load-path=node_modules
sass projects/impurity/devtools-ui/src/scss/styles.scss dist/storybook-assets/styles/css/styles.css --load-path=node_modules

# build docs
compodoc -p tsconfig.json -e json -d ./dist/docs

# build storybook
build-storybook -c .storybook -s dist/storybook-assets -o dist/storybook