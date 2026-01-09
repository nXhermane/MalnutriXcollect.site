"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MalnutrixLogo } from "@/components/malnutrix-logo"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Guide", href: "/guide" },
    { name: "Versions", href: "/releases" },
    { name: "Roadmap", href: "/roadmap" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <MalnutrixLogo className="h-7 w-3 sm:h-7 sm:w-3" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-primary">MalnutriX</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground -mt-1">collect</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button variant={isActive(item.href) ? "default" : "ghost"} className="transition-all">
                {item.name}
              </Button>
            </Link>
          ))}
          <a href="https://github.com/nXhermane/MalnutriXcollect" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost">GitHub</Button>
          </a>
          <a
            href="https://github.com/nXhermane/MalnutriXcollect/releases/download/v1.0.0-beta.7/app-beta.apk"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90">Télécharger</Button>
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
              
              </div>
              <SheetClose />
              
              
            </div>

            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setOpen(false)}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="w-full justify-start text-base h-12 transition-all"
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}

              <div className="my-2 border-t" />

              <a
                href="https://github.com/nXhermane/MalnutriXcollect"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button variant="ghost" className="w-full justify-start text-base h-12">
                  GitHub
                </Button>
              </a>

              <a
                href="https://github.com/nXhermane/MalnutriXcollect/releases/download/v1.0.0-beta.7/app-beta.apk"
                target="_blank"
                rel="noreferrer"
                className="w-full mt-2"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full h-12 text-base bg-primary hover:bg-primary/90">Télécharger l'App</Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
