import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Package, AlertTriangle, Wrench } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { releases } from "@/lib/releases"

export default function ReleasesPage() {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "major":
        return "default"
      case "minor":
        return "secondary"
      case "patch":
        return "outline"
      case "beta":
        return "destructive"
      default:
        return "default"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Versions</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">Historique des versions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {"Suivez l'évolution de MalnutriX Collect à travers toutes les versions publiées."}
            </p>
          </div>
        </div>
      </section>

      {/* Releases Timeline */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {releases.map((release, index) => (
            <Card key={release.version} className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-bold">{release.version}</h2>
                      <Badge variant={getBadgeVariant(release.type)}>
                        {release.type === "beta" ? "Bêta" : release.type}
                      </Badge>
                      {index === 0 && <Badge className="bg-green-500">Dernière version</Badge>}
                    </div>
                    <p className="text-muted-foreground">
                      Publié le{" "}
                      {new Date(release.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-semibold text-primary">{release.title}</h3>
                  </div>
                  {release.downloadUrl && (
                    <a href={release.downloadUrl} target="_blank" rel="noreferrer">
                      <Button className="gap-2">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">{release.description}</p>

                {release.features.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-lg">Nouvelles fonctionnalités</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {release.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {release.fixes && release.fixes.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-blue-500" />
                      <h4 className="font-semibold text-lg">Corrections</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {release.fixes.map((fix, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          • {fix}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {release.breaking && release.breaking.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      <h4 className="font-semibold text-lg">Changements importants</h4>
                    </div>
                    <ul className="space-y-2 pl-7">
                      {release.breaking.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
