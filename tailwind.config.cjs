const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        mode: 'jit',
        extend: {
            colors: {
                "primary-dark": "#8C8884",
                "primary-light": "#EDEFDA",
                "accent-ocean": "#00989A",
                "accent-sea": "#2AB59D",
                "accent-glass": "#99CAC8",
            }
        }
    },

    plugins: []
};

module.exports = config;