import Link from "next/link"
import { MalnutrixLogo } from "@/components/malnutrix-logo"

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <MalnutrixLogo className="h-7 w-3" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">MalnutriX</span>
                <span className="text-xs text-muted-foreground -mt-1">collect</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Application de collecte de données nutritionnelles pour aides-soignants
            </p>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/guide" className="hover:text-primary transition-colors">
                  Guide Utilisateur
                </Link>
              </li>
              <li>
                <Link href="/releases" className="hover:text-primary transition-colors">
                  Versions
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/nXhermane/MalnutrixCollect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold">Ressources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/nXhermane/MalnutrixCollect/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nXhermane/MalnutrixCollect/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Signaler un bug
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nXhermane/MalnutrixCollect/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Licence MIT
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 MalnutriX. Open Source sous licence MIT.
        </div>
      </div>
    </footer>
  )
}
