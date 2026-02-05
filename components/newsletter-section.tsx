"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-primary-foreground mb-4 text-balance">
          Restez Informé
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Inscrivez-vous à notre newsletter pour recevoir nos dernières découvertes, 
          offres exclusives et conseils bien-être.
        </p>

        {submitted ? (
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <p className="text-primary-foreground font-medium">
              Merci pour votre inscription ! Vous recevrez bientôt nos actualités.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground"
            />
            <Button
              type="submit"
              variant="secondary"
              className="px-8"
            >
              S&apos;inscrire
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        )}

        <p className="text-primary-foreground/60 text-sm mt-4">
          Pas de spam, désinscription possible à tout moment.
        </p>
      </div>
    </section>
  )
}
