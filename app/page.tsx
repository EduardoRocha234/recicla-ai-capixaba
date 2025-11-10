import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {Separator} from '@/components/ui/separator'
import {
	Recycle,
	Users,
	Heart,
	Leaf,
	CheckCircle2,
	XCircle,
	Lightbulb,
	TrendingUp,
	HandHeart,
	Wine,
	Utensils,
	NotebookText,
	Smartphone,
	Pizza,
	Scroll,
	Syringe,
	Dog,
	ExternalLink,
} from 'lucide-react'

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1 z-10">
				<section className="overflow-hidden  py-20 text-primary-foreground md:py-32">
					<div className="z-10">
						<div className="mx-auto max-w-3xl lg:max-w-4xl text-primary text-center flex flex-col items-center justify-center text-focus-in px-8">
							<h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
								Transforme seu lixo em atitude sustentável
							</h1>
							<span className="mb-8 text-center text-primary  text-md md:w-md leading-relaxed md:text-xl">
								Cuidar do planeta começa com escolhas diárias. A gente te mostra
								como fazer isso de forma simples.
							</span>
							<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
								<a
									className="px-4 py-2 bg-primary text-white rounded-md  hover:bg-primary/80"
									href="#como-reciclar"
								>
									Aprenda a Reciclar
								</a>
								<a
									className="px-4 py-2 border border-primary text-primary rounded-md backdrop-blur bg-background/95"
									href="#sobre"
								>
									Conheça o Projeto
								</a>
							</div>
						</div>
					</div>
				</section>

				<section
					id="sobre"
					className="py-20 px-8 mt-10"
				>
					<div className="z-10">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight md:text-4xl z-50">
								Sobre o Projeto
							</h2>
							<p className="mb-8 text-pretty text-muted-foreground leading-relaxed">
								A ação{' '}
								<strong className="text-primary">
									“Recicla Aí, Capixaba!”
								</strong>{' '}
								tem como propósito ajudar a instituição{' '}
								<strong className="text-primary">“Recicla Capixaba”</strong> a
								promover a educação ambiental e incentivar mudanças de
								comportamento em relação à coleta, reciclagem e descarte
								adequado dos resíduos. O principal objetivo é conectar as
								pessoas, comunidades e instituições para construirmos uma
								sociedade mais limpa, sustentável e responsável.
							</p>
							<p className="mb-8 text-pretty text-muted-foreground leading-relaxed">
								Através de informações acessíveis na internet buscamos despertar
								a consciência da sociedade sobre o impacto do lixo no meio
								ambiente e mostrar que pequenas atitudes, como separar o lixo
								corretamente, diminuir o consumo de plásticos e reutilizar
								materiais podem trazer diversos benefícios à natureza e para o
								futuro do estado.
							</p>
						</div>

						<div className="mx-auto text-center mt-16 ">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight z-50">
								A Recicla Capixaba Transforma
							</h2>
						</div>
						<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							<Card className="border-border">
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<Users className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">Economia Solidária</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Todos são associados e donos do negócio. O lucro é dividido
										igualmente entre todos.
									</p>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<Heart className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">Dignidade</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Coleta com veículos próprios e pagamento completo do INSS
										para todos os associados.
									</p>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<TrendingUp className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">Transformação</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Histórias de associados que conseguiram guardar dinheiro e
										até se aposentar.
									</p>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
										<Leaf className="h-6 w-6 text-primary" />
									</div>
									<CardTitle className="text-xl">Meio Ambiente</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										Parceria com a Prefeitura de Vitória para coleta e
										destinação correta de resíduos.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section
					id="como-reciclar"
					className="bg-muted/30 py-20 px-8"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight md:text-4xl">
								Como Separar Seu Lixo Corretamente
							</h2>
							<p className="mb-12 text-pretty text-muted-foreground leading-relaxed">
								A separação correta dos resíduos é fundamental para o trabalho
								dos catadores e para a preservação do meio ambiente. Veja o que
								pode e o que não pode ser reciclado.
							</p>
						</div>

						<div className="grid gap-8 lg:grid-cols-2">
							{/* Can Recycle */}
							<Card className="border-2 border-primary/20">
								<CardHeader>
									<div className="mb-2 flex items-center gap-2">
										<div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
											<CheckCircle2 className="size-10 text-primary" />
										</div>
										<CardTitle className="text-2xl text-primary">
											Pode Reciclar
										</CardTitle>
									</div>
									<CardDescription>
										Materiais aceitos pela Recicla Capixaba
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Wine className="size-9 text-primary" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-primary">Vidro</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Garrafas e vidro quebrado (colocar em caixa e sinalizar)
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="lucide lucide-bottle-wine-icon lucide-bottle-wine size-9 text-primary"
											>
												<path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
												<path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
											</svg>
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-primary">
												Plástico
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Garrafas PET, embalagens de produtos de limpeza, sacolas
												plásticas
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Utensils className="size-9 text-primary" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-primary">Metal</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Latinhas de refrigerante e cerveja, latas de leite,
												panelas, ferro
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<NotebookText className="size-9 text-primary" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-primary">
												Papel e Papelão
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Livros, cadernos, caixas de papelão, jornais, revistas
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Smartphone className="size-9 text-primary" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-primary">
												Outros
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Eletrônicos e óleo de cozinha usado (em recipiente
												fechado)
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Cannot Recycle */}
							<Card className="border-2 border-destructive/20">
								<CardHeader>
									<div className="mb-2 flex items-center gap-2">
										<div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
											<XCircle className="size-10 text-destructive" />
										</div>
										<CardTitle className="text-2xl text-destructive">
											Não Pode Reciclar
										</CardTitle>
									</div>
									<CardDescription>
										Materiais que não devem ser enviados
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Pizza className="size-9 text-destructive" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-destructive">
												Restos de Comida
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Contaminam outros materiais e atraem insetos
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Scroll className="size-9 text-destructive" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-destructive">
												Resíduos de Banheiro
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Papel higiênico usado, fraldas descartáveis
												(bebê/adulto)
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Syringe className="size-9 text-destructive" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-destructive">
												Materiais Hospitalares
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Seringas e agulhas são muito perigosas para os
												trabalhadores
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Lightbulb className="size-9 text-destructive" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-destructive">
												Lâmpadas e Pilhas
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Necessitam de descarte especial em pontos específicos
											</p>
										</div>
									</div>
									<Separator />
									<div className="flex items-center gap-4 ">
										<div className="border rounded-md p-2">
											<Dog className="size-9 text-destructive" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-destructive">
												Fezes de Animais
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Contaminam os materiais recicláveis
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>

						<Card className="mt-8 border-yellow-300  bg-white">
							<CardHeader>
								<div className="flex items-center gap-2">
									<Lightbulb className="h-6 w-6 text-yellow-600" />
									<CardTitle className="text-xl">Dicas Importantes</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-3">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
									<p className="text-sm leading-relaxed">
										<strong>Lave levemente</strong> garrafas e embalagens para
										evitar atrair insetos ou contaminar outros materiais
									</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
									<p className="text-sm leading-relaxed">
										<strong>Separe o vidro quebrado</strong> em uma caixa e
										sinalize claramente para proteger os catadores
									</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-green-600" />
									<p className="text-sm leading-relaxed">
										<strong>Mantenha separado</strong> o lixo reciclável do lixo
										orgânico desde o início
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<section
					id="pontos-de-coleta"
					className="py-20 px-8"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight md:text-4xl">
								Pontos de Coleta
							</h2>
							<p className="mb-12 text-pretty text-muted-foreground leading-relaxed">
								Acesse os principais pontos de coleta da região através dos
								links abaixo e nos ajude a cuidar do meio ambiente.
							</p>
						</div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<iframe
											src="https://ecopontos.vilavelha.es.gov.br/"
											className="h-full w-full object-contain object-top border p-2"
											loading="lazy"
										/>
									</div>
									<CardTitle>Vila Velha</CardTitle>
									<CardDescription>Ecopontos Vila Velha</CardDescription>
								</CardHeader>
								<CardContent>
									<a
										href="https://ecopontos.vilavelha.es.gov.br/"
										target="_blank"
										className="hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 border py-3 rounded-md text-lg text-primary"
									>
										Acesse
										<ExternalLink />
									</a>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7483.586701973068!2d-40.312828!3d-20.308819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d74c8faf57b%3A0xb2adcb751ae4fd75!2sRECICLA%20CAPIXABA!5e0!3m2!1spt-BR!2sbr!4v1762733371927!5m2!1spt-BR!2sbr"
											className="h-full w-full object-contain object-top border p-2"
											allowFullScreen
											loading="lazy"
										></iframe>
									</div>
									<CardTitle>Vitória</CardTitle>
									<CardDescription>Centro Recicla Capixaba</CardDescription>
								</CardHeader>
								<CardContent>
									<a
										href="https://maps.app.goo.gl/Y55rDjoND7CHXpHD6"
										target="_blank"
										className="hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 border py-3 rounded-md text-lg text-primary"
									>
										Acesse
										<ExternalLink />
									</a>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<iframe
											src="https://www.serra.es.gov.br/site/pagina/coleta-seletiva"
											className="h-full w-full object-contain object-top border p-2"
											allowFullScreen
											loading="lazy"
										></iframe>
									</div>
									<CardTitle>Serra</CardTitle>
									<CardDescription>Coleta Seletiva Serra</CardDescription>
								</CardHeader>
								<CardContent>
									<a
										href="https://www.serra.es.gov.br/site/pagina/coleta-seletiva"
										target="_blank"
										className="hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 border py-3 rounded-md text-lg text-primary"
									>
										Acesse
										<ExternalLink />
									</a>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Importance of Collectors Section */}
				<section
					id="catadores"
					className="bg-muted/30 py-20 px-8"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-balance text-primary text-3xl font-bold tracking-tight md:text-4xl">
								A Importância dos Catadores
							</h2>
							<p className="mb-12 text-pretty text-muted-foreground leading-relaxed">
								Os catadores e recicladores são profissionais essenciais para a
								limpeza do meio ambiente e para a construção de uma sociedade
								mais sustentável e justa.
							</p>
						</div>

						<div className="grid gap-8 lg:grid-cols-2">
							<div className="space-y-6">
								<Card className="border-border">
									<CardHeader>
										<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
											<Recycle className="h-6 w-6 text-primary" />
										</div>
										<CardTitle>Guardiões do Meio Ambiente</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Catadores são responsáveis por retirar toneladas de
											resíduos das ruas e dar destinação correta, evitando
											poluição e preservando a natureza para as futuras
											gerações.
										</p>
									</CardContent>
								</Card>

								<Card className="border-border">
									<CardHeader>
										<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
											<Users className="h-6 w-6 text-primary" />
										</div>
										<CardTitle>Inclusão Social</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed">
											O trabalho de catador oferece oportunidade de renda e
											dignidade para pessoas que enfrentam discriminação no
											mercado de trabalho tradicional.
										</p>
									</CardContent>
								</Card>

								<Card className="border-border">
									<CardHeader>
										<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
											<HandHeart className="h-6 w-6 text-primary" />
										</div>
										<CardTitle>Transformação de Vidas</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Através do trabalho organizado em cooperativas e
											associações, catadores conquistam estabilidade financeira,
											aposentadoria e uma vida com mais dignidade.
										</p>
									</CardContent>
								</Card>
							</div>

							<div className="space-y-6">
								<Card className="border-border">
									<CardHeader>
										<CardTitle className="text-2xl">
											O Que a Sociedade Pode Fazer
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
												<span className="text-sm font-bold text-white">1</span>
											</div>
											<div>
												<h4 className="mb-1 font-semibold">
													Separar Corretamente
												</h4>
												<p className="text-sm text-muted-foreground leading-relaxed">
													Separe o lixo reciclável do orgânico e lave as
													embalagens antes de descartar.
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
												<span className="text-sm font-bold text-white">2</span>
											</div>
											<div>
												<h4 className="mb-1 font-semibold">
													Respeitar o Trabalho
												</h4>
												<p className="text-sm text-muted-foreground leading-relaxed">
													Reconheça a importância dos catadores e trate-os com
													dignidade e respeito.
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
												<span className="text-sm font-bold text-white">3</span>
											</div>
											<div>
												<h4 className="mb-1 font-semibold">Divulgar a Causa</h4>
												<p className="text-sm text-muted-foreground leading-relaxed">
													Compartilhe informações sobre reciclagem e a
													importância dos catadores.
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
												<span className="text-sm font-bold text-white">4</span>
											</div>
											<div>
												<h4 className="mb-1 font-semibold">
													Apoiar Cooperativas
												</h4>
												<p className="text-sm text-muted-foreground leading-relaxed">
													Doe materiais recicláveis diretamente para
													cooperativas e associações.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card className="border-primary/20 bg-primary text-primary-foreground">
									<CardHeader>
										<CardTitle className="text-xl">Mensagem Final</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm leading-relaxed">
											"É preciso que o trabalho do catador seja mais divulgado
											na TV e na mídia em geral, para que a população entenda
											sua importância e se conscientize sobre a separação
											correta dos resíduos. Juntos, podemos construir um futuro
											mais sustentável e justo."
										</p>
										<p className="mt-4 text-sm font-semibold">
											- Marialva e Zé Carlos, Fundadores da Recicla Capixaba
										</p>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				<section
					id="contato"
					className="relative bg-primary py-20 text-primary-foreground overflow-hidden px-8"
				>
					<div className="mx-auto max-w-2xl text-center relative z-20">
						<h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
							Faça Parte Dessa Transformação
						</h2>
						<p className="mb-8 text-pretty text-lg text-primary-foreground/90 leading-relaxed">
							Sua colaboração faz a diferença. Entre em contato para saber como
							você pode apoiar a Recicla Capixaba e contribuir para um futuro
							mais sustentável.
						</p>

						<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
							<a
								href="https://destineaqui.com/detalhes/recicla-capixaba"
								target="_blank"
								className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-3 py-2 rounded-md cursor-pointer"
							>
								Entre em Contato e Saiba Mais
							</a>
						</div>
					</div>
					<div className="absolute inset-0 z-0 bg-[url('/recycling-workers-sorting-materials.jpg')] bg-cover bg-center opacity-10" />
				</section>
			</main>

			<Footer />
		</div>
	)
}
