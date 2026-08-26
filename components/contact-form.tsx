'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }
  if (sent) return <div className="form-success"><Check size={22} /><h3>Recebemos sua mensagem.</h3><p>Em breve, nossa equipe entrará em contato para entender seu projeto.</p></div>
  return <form className="contact-form" onSubmit={submit}>
    <label>Nome<input required name="nome" placeholder="Como podemos chamar você?" /></label>
    <label>E-mail<input required type="email" name="email" placeholder="seu@email.com" /></label>
    <label>Empresa<input name="empresa" placeholder="Nome da empresa" /></label>
    <label>Conte sobre seu projeto<textarea required name="mensagem" rows={4} placeholder="Descreva brevemente o que você precisa fabricar..." /></label>
    <button className="button button-dark" type="submit">Enviar solicitação <ArrowUpRight size={17} /></button>
  </form>
}
