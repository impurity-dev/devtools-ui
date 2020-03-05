import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'dark',
        brandTitle: 'Impurity Devtools Ui',
        brandUrl: 'https://github.com/impurity-dev',
        brandImage: 'https://avatars1.githubusercontent.com/u/14898141?s=25&v=4',
    }),
});
