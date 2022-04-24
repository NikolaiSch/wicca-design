export const parameters = {
    actions: { argTypesRegex: '^on.*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'light',
        values: [{
                name: 'light',
                value: '#e3eeef',
            },
            {
                name: 'dark',
                value: '#383838',
            },
        ],
    },
}