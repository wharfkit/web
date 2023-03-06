import type {Preview} from '@storybook/svelte'
import '../src/styles/variables.css'
import '../src/styles/buttonStyles.css'

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'light',
        },
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
}

export default preview
