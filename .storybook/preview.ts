import '!style-loader!css-loader!../dist/storybook-assets/styles/css/styles.css';
import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../dist/docs/documentation.json';
setCompodocJson(docJson);

addParameters({
    themes: [
        { name: 'Dark', class: 'dark-theme', color: '#00ff00', default: true },
        { name: 'Light', class: 'light-theme', color: '#ff00ff' },
    ],
});