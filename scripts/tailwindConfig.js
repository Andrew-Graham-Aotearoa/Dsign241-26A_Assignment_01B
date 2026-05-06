tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                heading: ['Bangers', 'serif'],
                body: ['Roboto', 'sans-serif'],
            },
            colors: {
                'pop-red': '#ee2b2f',
                'color-accent': '#00aeef',
                'color-muted': '#ffffff80',
                'color-border': '#231f20',
                'color-bg-alt': '#fdf5e6',
                'color-bg': '#231f20',
                'color-dots': 'rgba(255, 255, 255, 0.05)',
                'brand-primary': '#ee2b2f',
                'brand-bg': '#231f20',
            },
            backgroundImage: {
                'pop-dots': "radial-gradient(rgba(255, 255, 255, 0.05) 3px, transparent 1px)",
            },
            backgroundSize: {
                'dots-sm': '0.938rem 0.938rem',
            },
            spacing: {
                'section_v': '4rem',
            }
        }
        
    }
    
}
