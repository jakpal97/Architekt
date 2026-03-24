import './globals.css'
import { getSiteSettings } from '@/sanity/queries/settings'
import SettingsProvider from '@/components/SettingsProvider'

export const metadata = {
	title: 'WPM Solutions',
	description: 'Strefy dla każdego',
}

export default async function RootLayout({ children }) {
	const settings = await getSiteSettings()

	return (
		<html lang="pl">
			<head>
				<link
					href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="antialiased font-satoshi bg-white text-[#1a1a1a] overflow-x-hidden">
				<SettingsProvider settings={settings}>
					{children}
				</SettingsProvider>
			</body>
		</html>
	)
}
