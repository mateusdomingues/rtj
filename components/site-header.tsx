'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  ['Empresa', '#empresa'],
  ['Soluções', '#solucoes'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link href="#inicio" className="brand" aria-label="RTJ Caldeiraria e Usinagem — início">
        <span className="brand-mark">RTJ</span>
        <span className="brand-sub">CALDEIRARIA <i>•</i> USINAGEM</span>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="#contato">Solicitar orçamento <ArrowUpRight size={16} /></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      {open && <nav className="mobile-nav" aria-label="Navegação móvel">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>}
    </header>
  )
}
