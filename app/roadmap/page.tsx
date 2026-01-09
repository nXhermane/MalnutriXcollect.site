import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, Lightbulb } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { roadmapFeatures } from "@/lib/roadmap"

export default function RoadmapPage() {
  const doneFeatures = roadmapFeatures.filter((f) => f.status === "done")
  const inProgressFeatures = roadmapFeatures.filter((f) => f.status === "in-progress")
  const plannedFeatures = roadmapFeatures.filter((f) => f.status === "planned")

  const getCategoryBadge = (category: string) => {
    const colors = {
      core: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
      feature: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      enhancement: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      integration: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    }
    return colors[category as keyof typeof colors] || colors.feature
  }

  const getPriorityIcon = (priority: string) => {
    if (priority === "high") return "🔴"
    if (priority === "medium") return "🟡"
    return "🟢"
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Roadmap</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">Feuille de route</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Découvrez les fonctionnalités déjà implémentées et celles à venir dans MalnutriX Collect.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-green-500/10 border-green-500/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">{doneFeatures.length}</div>
                <p className="text-muted-foreground mt-2">Fonctionnalités implémentées</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-500/10 border-blue-500/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{inProgressFeatures.length}</div>
                <p className="text-muted-foreground mt-2">En cours de développement</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-500/10 border-purple-500/20">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">{plannedFeatures.length}</div>
                <p className="text-muted-foreground mt-2">Fonctionnalités planifiées</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Implemented Features */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h2 className="text-3xl font-bold">Fonctionnalités implémentées</h2>
            </div>
            <div className="grid gap-4">
              {doneFeatures.map((feature) => (
                <Card key={feature.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xl">{getPriorityIcon(feature.priority)}</span>
                          <Badge className={getCategoryBadge(feature.category)}>{feature.category}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* In Progress Features */}
          {inProgressFeatures.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold">En cours de développement</h2>
              </div>
              <div className="grid gap-4">
                {inProgressFeatures.map((feature) => (
                  <Card key={feature.id} className="hover:shadow-md transition-shadow border-blue-500/20">
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-semibold">{feature.title}</h3>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xl">{getPriorityIcon(feature.priority)}</span>
                            <Badge className={getCategoryBadge(feature.category)}>{feature.category}</Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Planned Features */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h2 className="text-3xl font-bold">Fonctionnalités planifiées</h2>
            </div>
            <div className="grid gap-4">
              {plannedFeatures.map((feature) => (
                <Card key={feature.id} className="hover:shadow-md transition-shadow opacity-90">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xl">{getPriorityIcon(feature.priority)}</span>
                          <Badge className={getCategoryBadge(feature.category)}>{feature.category}</Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
