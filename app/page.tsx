import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, ChevronRight, Factory, Ruler, ShieldCheck, MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { ContactForm } from '@/components/contact-form'

const photos = {
  platform: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IT2N3Ef17RHN8siPZEeZJJPrdr3ZlO.png',
  machine: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FUptUywEtJYjh8RXx4uKaSy8NB0iCg.png',
  table: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gjaffLDQC1r85XuSmiuMjPg2QBd3WG.png',
  grid: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kBjnUfHlhM8bqypWASu519cFw1ZcDN.png',
}

export default function Page() {
  return <main id="inicio">
    <SiteHeader />
    <section className="hero section-dark">
      <div className="hero-copy"><p className="eyebrow">Caldeiraria e usinagem industrial</p><h1>O metal certo.<br /><em>A solução precisa.</em></h1><p className="hero-text">Projetamos e fabricamos estruturas, máquinas e componentes sob medida para operações que não podem parar.</p><div className="hero-actions"><Link href="#contato" className="button button-accent">Fale com a RTJ <ArrowUpRight size={17} /></Link><Link href="#projetos" className="text-link">Conheça nosso trabalho <ChevronRight size={17} /></Link></div></div>
      <div className="hero-image"><Image src={photos.platform} alt="Plataforma industrial metálica fabricada pela RTJ" fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      <div className="scroll-note"><ArrowDown size={16} /> role para explorar</div>
    </section>

    <section id="empresa" className="intro section-light"><div className="section-kicker">01 <span>quem somos</span></div><div className="intro-content"><h2>Engenharia que<br /><span>vira realidade.</span></h2><div><p className="lead">A RTJ transforma desafios industriais em soluções robustas, funcionais e feitas para durar.</p><p>Unimos experiência de chão de fábrica, precisão técnica e atenção aos detalhes em cada entrega. Do primeiro desenho à instalação, cuidamos de tudo para que sua operação avance com segurança.</p><Link href="#contato" className="arrow-link">Conheça a RTJ <ArrowUpRight size={17} /></Link></div></div></section>

    <section id="solucoes" className="solutions section-dark"><div className="section-kicker light">02 <span>o que fazemos</span></div><div className="solutions-head"><h2>Feito sob medida.<br /><em>Feito para funcionar.</em></h2><p>Não existem duas operações iguais. Por isso, nossas soluções nascem da escuta e terminam no resultado.</p></div><div className="solution-grid"><article><Factory /><h3>Caldeiraria industrial</h3><p>Estruturas, plataformas, passarelas, tanques e equipamentos metálicos com acabamento e resistência.</p><span>01</span></article><article><Ruler /><h3>Usinagem de precisão</h3><p>Componentes e peças usinadas conforme desenho, especificação e tolerância do seu projeto.</p><span>02</span></article><article><ShieldCheck /><h3>Projetos especiais</h3><p>Do protótipo à série, desenvolvemos soluções para necessidades que não cabem no catálogo.</p><span>03</span></article></div></section>

    <section id="projetos" className="projects section-light"><div className="section-kicker">03 <span>projetos em destaque</span></div><div className="projects-head"><h2>O que fazemos<br /><span>fala por nós.</span></h2><p>Alguns registros do nosso processo e das soluções que entregamos.</p></div><div className="gallery"><div className="gallery-main"><Image src={photos.machine} alt="Máquina industrial com proteção amarela" fill sizes="(max-width: 700px) 100vw, 50vw" /><div className="image-label">Proteção e segurança industrial <ArrowUpRight size={16} /></div></div><div className="gallery-side"><div><Image src={photos.table} alt="Bancada metálica sob medida" fill sizes="(max-width: 700px) 50vw, 25vw" /><span>Bancada industrial</span></div><div><Image src={photos.grid} alt="Estrutura metálica com tela" fill sizes="(max-width: 700px) 50vw, 25vw" /><span>Estrutura personalizada</span></div></div></div></section>

    <section id="contato" className="contact section-accent"><div><div className="section-kicker dark">04 <span>vamos conversar</span></div><h2>Tem um desafio<br /><strong>em mente?</strong></h2><p>Conte para a gente. Nossa equipe está pronta para entender o projeto e encontrar o melhor caminho.</p><div className="contact-details"><a href="https://wa.me/5516999999999"><MessageCircle size={18} /> WhatsApp comercial</a><a href="mailto:contato@rtjcaldeiraria.com.br">contato@rtjcaldeiraria.com.br</a></div></div><ContactForm /></section>

    <footer className="footer section-dark"><div className="footer-brand"><span className="brand-mark">RTJ</span><p>Caldeiraria e Usinagem</p></div><p>Precisão que sustenta o seu negócio.</p><div className="footer-bottom"><span>© 2026 RTJ. Todos os direitos reservados.</span><span>Feito para a indústria.</span></div></footer>
  </main>
}
