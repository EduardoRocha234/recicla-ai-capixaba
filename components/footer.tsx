import Link from 'next/link'
import {Facebook, Instagram, Mail, MapPin, Phone} from 'lucide-react'

export function Footer() {
	return (
		<footer className="border-t border-border bg-muted/30 w-full px-8">
			<div className=" py-12">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="space-y-4">
						<Link
							href="/"
							className="flex items-center gap-2"
						>
							<img
								src="/recicla_ai_capixaba_logo.png"
								className="object-cover size-11 rounded-full object-center"
							/>
							<span className="text-md lg:text-xl font-bold text-primary">
								Recicla Ai, Capixaba!
							</span>
						</Link>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Um Projeto Recicla Capixaba + Faculdade FAESA
						</p>
					</div>

					{/* Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold">Navegação</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/#sobre"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Sobre Nós
								</Link>
							</li>
							<li>
								<Link
									href="/#como-reciclar"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Como Reciclar
								</Link>
							</li>
							<li>
								<Link
									href="/#pontos-de-coleta"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Pontos de Coleta
								</Link>
							</li>
							<li>
								<Link
									href="/#catadores"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Importância dos Catadores
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold">Contato</h3>
						<ul className="space-y-3 text-sm">
							<li className="flex items-start gap-2">
								<MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
								<span className="text-muted-foreground">
									Rua Antônio Aleixo, 601, Vitória, ES
								</span>
							</li>
							<li className="flex items-center gap-2">
								<Phone className="h-4 w-4 text-muted-foreground" />
								<span className="text-muted-foreground">(27) 3077-3775</span>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="h-4 w-4 text-muted-foreground" />
								<a className="text-muted-foreground"  href='mailto:reciclacapixaba2021@gmail.com'>
									reciclacapixaba2021@gmail.com
								</a>
							</li>
						</ul>
					</div>

					{/* Social */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold">Redes Sociais</h3>
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-2">
								<a
									href="https://www.instagram.com/"
									target="_blank"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
									aria-label="Instagram"
								>
									<Instagram className="h-5 w-5" />
								</a>
								@reciclaaicapixaba
							</div>
							<div className="flex items-center gap-2">
								<a
									href="https://www.instagram.com/reciclacapixaba"
									target="_blank"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
									aria-label="Instagram"
								>
									<Instagram className="h-5 w-5" />
								</a>
								@reciclacapixaba
							</div>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} Recicla Ai, Capixaba! Todos os
						direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	)
}
