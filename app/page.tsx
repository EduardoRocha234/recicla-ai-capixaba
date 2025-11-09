import {Header} from '@/components/header'
import {Footer} from '@/components/footer'
import {Button} from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
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
	Award,
	HandHeart,
	Wine,
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<main className="flex-1">
				{/* Hero Section */}
				<div className="min-h-screen w-full bg-[#f8fafc] relative">
					{/* Top Fade Grid Background */}
					<div
						className="absolute inset-0 z-0"
						style={{
							backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
							backgroundSize: '20px 30px',
							WebkitMaskImage:
								'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
							maskImage:
								'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
						}}
					/>
					<section className="relative overflow-hidden px-8 py-20 text-primary-foreground md:py-32 h-200">
						<div className="absolute left-[2%] space-y-2 px-14">
							<div className="relative space-y-2 text-focus-in">
								<h1 className="text-primary text-7xl font-bold tracking-tight">
									Transforme seu lixo
								</h1>
								<h2 className="pl-24 text-primary text-7xl  tracking-tight">
									em atitude sustentável
								</h2>
								<p className="absolute -right-[40%] top-16 mb-8 text-primary text-md text-lg md:text-xl w-1/3">
									Cuidar do planeta começa com escolhas diárias. A gente te
									mostra como fazer isso de forma simples.
								</p>
							</div>
						</div>
						<img
							className="absolute top-[42%] object-cover w-64 rounded-xl h-40   slide-top"
							src="catadores-trabalhando-com-reciclagem--pessoas-sepa.jpg"
						></img>
						{/* <div className="absolute bottom-[2%] left-[9%] flex flex-col items-center gap-2">
							<img
								src="/recicla_ai_capixaba_logo.png"
								className="object-cover size-20 rounded-full object-center"
							/>
							<span className="text-4xl text-primary">+</span>
							<img
								src="/logo-recicla-capixaba.png"
								className="object-cover size-24 rounded-full border object-center"
							/>
						</div> */}
						<div className="flex gap-6 absolute bottom-[3%] left-[25%] ">
							<img
								className="w-xl rounded-xl h-80 object-cover   slide-top"
								src="/recycling-workers-sorting-materials.jpg"
							></img>
							<div className="flex flex-col gap-4">
								<img
									className="w-[16rem] rounded-xl h-36 object-cover object-center   slide-top"
									src="/male-recycling-worker-with-truck.jpg"
								></img>
								<span className="text-primary w-[16rem] ml-10">
									O Recicla Aí, Capixaba! apoia a Recicla Capixaba levando
									informação clara sobre reciclagem e descarte correto.
								</span>
								<div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
									<button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/80">
										<Link href="#como-reciclar">Aprenda a Reciclar</Link>
									</button>
									<button className="px-4 py-2 rounded-md border text-slate-600 ">
										<Link href="#sobre">Conheça o Projeto</Link>
									</button>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* <div className="relative z-10">
						<div className="mx-auto max-w-3xl text-center ">
							<h1 className="mb-6 text-primary text-4xl font-bold tracking-tight md:text-6xl bg-primary-foreground/50">
								Transforme seu lixo em atitude sustentável
							</h1>
							<p className="mb-8 text-pretty text-lg text-primary-foreground/90 leading-relaxed md:text-xl">
								Cuidar do planeta começa com escolhas diárias. A gente te mostra
								como fazer isso de forma simples.
							</p>
							<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
								<Button
									size="lg"
									asChild
									className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
								>
									<Link href="#como-reciclar">Aprenda a Reciclar</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									asChild
									className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
								>
									<Link href="#sobre">Conheça o Projeto</Link>
								</Button>
							</div>
						</div>
					</div> */}
				{/* <div className="absolute inset-0 bg-[url('/recycling-workers-sorting-materials.jpg')] bg-cover bg-center" /> */}

				{/* Stats Section */}
				{/* <section className="border-b border-border bg-muted/30 py-12">
					<div className="">
						<div className="grid gap-8 md:grid-cols-3">
							<div className="text-center">
								<div className="mb-2 text-4xl font-bold text-primary">16</div>
								<div className="text-sm text-muted-foreground">
									Famílias Associadas
								</div>
							</div>
							<div className="text-center">
								<div className="mb-2 text-4xl font-bold text-primary">70+</div>
								<div className="text-sm text-muted-foreground">
									Toneladas/Mês
								</div>
							</div>
							<div className="text-center">
								<div className="mb-2 text-4xl font-bold text-primary">5+</div>
								<div className="text-sm text-muted-foreground">
									Anos de Impacto
								</div>
							</div>
						</div>
					</div>
				</section> */}

				{/* About Section */}
				<section
					id="sobre"
					className="py-20 px-8 mt-10"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight md:text-4xl">
								Sobre a Recicla Capixaba
							</h2>
							<p className="mb-8 text-pretty text-muted-foreground leading-relaxed">
								Fundada em 2019 por Marialva e Zé Carlos, a Recicla Capixaba
								nasceu da necessidade de criar oportunidades para pessoas que
								sofrem discriminação no mercado de trabalho. Localizada no
								bairro Consolação em Vitória-ES, operamos como uma associação de
								economia solidária onde todos são donos do próprio negócio.
							</p>
						</div>

						<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
											<Wine className="size-9 text-green-600" />
										</div>
										<div>
											<h4 className="mb-2 font-semibold text-green-600">
												Vidro
											</h4>
											<p className="text-sm text-muted-foreground leading-relaxed">
												Garrafas e vidro quebrado (colocar em caixa e sinalizar)
											</p>
										</div>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-primary">
											Plástico
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Garrafas PET, embalagens de produtos de limpeza, sacolas
											plásticas
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-primary">Metal</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Latinhas de refrigerante e cerveja, latas de leite,
											panelas, ferro
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-primary">
											Papel e Papelão
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Livros, cadernos, caixas de papelão, jornais, revistas
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-primary">Outros</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Eletrônicos e óleo de cozinha usado (em recipiente
											fechado)
										</p>
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
									<div>
										<h4 className="mb-2 font-semibold text-destructive">
											Restos de Comida
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Contaminam outros materiais e atraem insetos
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-destructive">
											Resíduos de Banheiro
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Papel higiênico usado, fraldas descartáveis (bebê/adulto)
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-destructive">
											Materiais Hospitalares
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Seringas e agulhas são muito perigosas para os
											trabalhadores
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-destructive">
											Lâmpadas e Pilhas
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Necessitam de descarte especial em pontos específicos
										</p>
									</div>
									<Separator />
									<div>
										<h4 className="mb-2 font-semibold text-destructive">
											Fezes de Animais
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Contaminam os materiais recicláveis
										</p>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Tips */}
						<Card className="mt-8 border-accent/20 bg-accent/5">
							<CardHeader>
								<div className="flex items-center gap-2">
									<Lightbulb className="h-6 w-6 text-accent" />
									<CardTitle className="text-xl">Dicas Importantes</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-3">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
									<p className="text-sm leading-relaxed">
										<strong>Lave levemente</strong> garrafas e embalagens para
										evitar atrair insetos ou contaminar outros materiais
									</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
									<p className="text-sm leading-relaxed">
										<strong>Separe o vidro quebrado</strong> em uma caixa e
										sinalize claramente para proteger os catadores
									</p>
								</div>
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 mt-0.5 text-accent" />
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
					id="historias"
					className="py-20 px-8"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-primary text-3xl font-bold tracking-tight md:text-4xl">
								Histórias de Transformação
							</h2>
							<p className="mb-12 text-pretty text-muted-foreground leading-relaxed">
								Conheça as histórias inspiradoras de pessoas que encontraram
								dignidade, renda e uma nova perspectiva de vida através da
								Recicla Capixaba.
							</p>
						</div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<img
											src="/happy-recycling-worker-portrait.jpg"
											alt="Marialva"
											className="h-full w-full object-cover"
										/>
									</div>
									<CardTitle>Marialva - Fundadora</CardTitle>
									<CardDescription>
										Presidente da Recicla Capixaba
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										"Fundamos a Recicla para dar oportunidade a quem sofre
										discriminação. Hoje, 16 famílias têm dignidade, renda fixa e
										até conseguem se aposentar. Ser catador é uma honra - somos
										guardiões do meio ambiente."
									</p>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<img
											src="/male-recycling-worker-with-truck.jpg"
											alt="Zé Carlos"
											className="h-full w-full object-cover"
										/>
									</div>
									<CardTitle>Zé Carlos - Fundador</CardTitle>
									<CardDescription>
										Cofundador da Recicla Capixaba
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										"Comecei como catador por necessidade após ficar
										desempregado. Hoje temos caminhão próprio, pagamos INSS
										completo e mostramos que o trabalho de catador merece
										respeito e reconhecimento."
									</p>
								</CardContent>
							</Card>

							<Card className="border-border">
								<CardHeader>
									<div className="mb-4 aspect-video overflow-hidden rounded-lg bg-muted">
										<img
											src="/group-of-recycling-workers-celebrating.jpg"
											alt="Associados"
											className="h-full w-full object-cover"
										/>
									</div>
									<CardTitle>Associados</CardTitle>
									<CardDescription>16 Famílias Transformadas</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground leading-relaxed">
										"Através da orientação financeira e do trabalho na Recicla,
										conseguimos guardar dinheiro, conquistar estabilidade e
										construir um futuro melhor para nossas famílias."
									</p>
								</CardContent>
							</Card>
						</div>

						<Card className="mt-12 border-primary/20 bg-primary/5">
							<CardHeader>
								<div className="flex items-center gap-2">
									<Award className="h-6 w-6 text-primary" />
									<CardTitle className="text-xl">
										Nosso Modelo de Trabalho
									</CardTitle>
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="grid gap-4 md:grid-cols-2">
									<div className="space-y-2">
										<h4 className="font-semibold text-primary">
											Rotina Diária
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Os associados chegam pela manhã, tomam café juntos e
											iniciam a triagem às 8h. Parte da equipe faz coleta
											externa em condomínios e parceiros.
										</p>
									</div>
									<div className="space-y-2">
										<h4 className="font-semibold text-primary">
											Volume de Coleta
										</h4>
										<p className="text-sm text-muted-foreground leading-relaxed">
											Coletamos 15-20 toneladas por mês através de nossa coleta
											própria, mais 50-60 toneladas vindas da parceria com a
											Prefeitura de Vitória.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Importance of Collectors Section */}
				<section
					id="catadores"
					className="bg-muted/30 py-20 px-8"
				>
					<div className="">
						<div className="mx-auto max-w-3xl text-center">
							<Badge
								className="mb-4"
								variant="outline"
							>
								Reconhecimento
							</Badge>
							<h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
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
								<Card className="border-accent/20 bg-accent/5">
									<CardHeader>
										<CardTitle className="text-2xl">
											O Que a Sociedade Pode Fazer
										</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
												<span className="text-sm font-bold text-accent">1</span>
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
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
												<span className="text-sm font-bold text-accent">2</span>
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
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
												<span className="text-sm font-bold text-accent">3</span>
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
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
												<span className="text-sm font-bold text-accent">4</span>
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

				{/* CTA Section */}
				<section
					id="contato"
					className="bg-primary py-20 text-primary-foreground"
				>
					<div className="">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
								Faça Parte Dessa Transformação
							</h2>
							<p className="mb-8 text-pretty text-lg text-primary-foreground/90 leading-relaxed">
								Sua colaboração faz a diferença. Entre em contato para saber
								como você pode apoiar a Recicla Capixaba e contribuir para um
								futuro mais sustentável.
							</p>
							<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
								<Button
									size="lg"
									className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
								>
									Entre em Contato
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
								>
									Saiba Mais
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
