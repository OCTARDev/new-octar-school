/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primaryA1: 'rgba(var(--primary-A1))',
  			primaryA2: 'rgba(var(--primary-A2))',
  			primaryA3: 'rgba(var(--primary-A3))',
  			primaryA4: 'rgba(var(--primary-A4))',
  			secondaryA1: 'rgba(var(--secondary-A1))',
  			secondaryA2: 'rgba(var(--secondary-A2))',
  			statusError: 'rgba(var(--status-error))',
  			statusWarning: 'rgba(var(--status-warning))',
  			statusSuccess: 'rgba(var(--status-success))',
  			neutral1: 'rgba(var(--neutral-1), <alpha-value>)',
  			neutral2: 'rgba(var(--neutral-2), <alpha-value>)',
  			neutral3: 'rgba(var(--neutral-3), <alpha-value>)',
  			neutral4: 'rgba(var(--neutral-4), <alpha-value>)',
  			neutral5: 'rgba(var(--neutral-4), <alpha-value>)',
  			neutral6: 'rgba(var(--neutral-5), <alpha-value>)',
  			neutral7: 'rgba(var(--neutral-6), <alpha-value>)',
  			neutral8: 'rgba(var(--neutral-7), <alpha-value>)',
  			neutral9: 'rgba(var(--neutral-8), <alpha-value>)',
  			neutral10: 'rgba(var(--neutral-10), <alpha-value>)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-primary': 'var(--gradient-primary)',
  			'gradient-secondary': 'var(--gradient-secondary)'
  		},
		  fontFamily: {
			sans: ["Open Sans", "sans-serif"],
			cairo: ['Cairo', 'sans-serif'],
		  },
  	}
  },
  
}

