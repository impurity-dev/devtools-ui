import '!style-loader!css-loader!../dist/public/styles/css/styles.css';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { addParameters } from '@storybook/angular';
import docJson from '../dist/public/docs/documentation.json';
setCompodocJson(docJson);

addParameters({
    themes: [
        { name: 'Dark', class: 'dark-theme', color: '#00ff00', default: true },
        { name: 'Light', class: 'light-theme', color: '#ff00ff' },
    ],
});
