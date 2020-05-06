import '!style-loader!css-loader!../dist/impurity/devtools-ui/styles/css/styles.css';
import { addParameters } from '@storybook/angular';

addParameters({
    themes: [
        { name: 'Dark', class: 'dark-theme', color: '#00ff00', default: true },
        { name: 'Light', class: 'light-theme', color: '#ff00ff' },
    ],
});
