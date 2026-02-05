"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Droplets, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const departments = [
  { id: "finistere", name: "Finistère" },
  { id: "morbihan", name: "Morbihan" },
  { id: "cotes-d-armor", name: "Côtes-d'Armor" },
  { id: "ille-et-vilaine", name: "Ille-et-Vilaine" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Droplets className="h-8 w-8 text-primary" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Spas Bretagne
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/spas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tous les Spas
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Départements
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {departments.map((dept) => (
                  <DropdownMenuItem key={dept.id} asChild>
                    <Link href={`/departements/${dept.id}`}>{dept.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              À Propos
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/spas"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tous les Spas
              </Link>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Départements
                </p>
                <div className="pl-4 flex flex-col gap-2">
                  {departments.map((dept) => (
                    <Link
                      key={dept.id}
                      href={`/departements/${dept.id}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
