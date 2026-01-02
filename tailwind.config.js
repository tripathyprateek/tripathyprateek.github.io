/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Man City inspired palette
                navy: {
                    50: '#e6eaf0',
                    100: '#ccd5e0',
                    200: '#99abc1',
                    300: '#6681a3',
                    400: '#335784',
                    500: '#002d65',
                    600: '#001838', // Primary navy
                    700: '#001229',
                    800: '#000c1a',
                    900: '#00060d',
                    950: '#000306',
                },
                sky: {
                    50: '#f0f7fc',
                    100: '#e0eff9',
                    200: '#b3d7f0',
                    300: '#6CADDF', // Manchester City blue
                    400: '#4a9cd6',
                    500: '#2a8bcd',
                    600: '#1e6fa5',
                    700: '#15537c',
                    800: '#0c3752',
                    900: '#041b29',
                },
                accent: {
                    50: '#feffcc',
                    100: '#fdff99',
                    200: '#f2fb66',
                    300: '#E6FF00', // High-visibility yellow
                    400: '#ccdf00',
                    500: '#b3c300',
                    600: '#8c9900',
                    700: '#667000',
                    800: '#404600',
                    900: '#1a1c00',
                },
                slate: {
                    50: '#F3F6F9', // Off-white for sections
                    100: '#EBEDF0',
                    200: '#dfe1e4',
                    300: '#c8cbcf',
                    400: '#9ca0a6',
                    500: '#71767d',
                    600: '#5a5f65',
                    700: '#43474c',
                    800: '#2c2f33',
                    900: '#15171a',
                    950: '#0a0b0c',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Barlow Condensed', 'Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'none': '0',
                'sharp': '0', // Sharp edges Man City style
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s linear infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-overlay': 'linear-gradient(to top, rgba(0,24,56,0.95) 0%, rgba(0,24,56,0.6) 50%, rgba(0,24,56,0.3) 100%)',
                'card-gradient': 'linear-gradient(135deg, rgba(108, 173, 223, 0.05) 0%, rgba(230, 255, 0, 0.02) 100%)',
            },
            boxShadow: {
                'sharp': '0 4px 0 0 rgba(0,24,56,0.2)',
                'sharp-lg': '0 8px 0 0 rgba(0,24,56,0.15)',
                'glow-sky': '0 0 30px rgba(108, 173, 223, 0.3)',
                'glow-accent': '0 0 30px rgba(230, 255, 0, 0.3)',
                'card': '0 2px 8px rgba(0,0,0,0.08)',
                'card-hover': '0 8px 24px rgba(0,0,0,0.12)',
            },
        },
    },
    plugins: [],
}
