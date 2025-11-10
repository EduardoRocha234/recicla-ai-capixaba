import type React from 'react'
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {Analytics} from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({subsets: ['latin']})
const _geistMono = Geist_Mono({subsets: ['latin']})

export const metadata: Metadata = {
	title: 'Recicla Ai, Capixaba! - Transformando Vidas através da Reciclagem',
	description:
		'Ação de reciclagem que empodera catadores através da economia solidária no Espírito Santo',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`font-sans`}>
				<div className="w-full bg-[#f8fafc] z-0">
					<div
						className="absolute inset-0 z-0 min-h-300"
						style={{
							backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px),linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
							backgroundSize: '20px 30px',
							WebkitMaskImage:
								'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
							maskImage:
								'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
						}}
					/>
					{children}
					<Analytics />
				</div>
			</body>
		</html>
	)
}
