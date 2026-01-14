import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Info } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { guideSteps } from "@/lib/guide-content"

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background border-b">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="w-fit mx-auto">Guide Utilisateur</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              {"Guide d'utilisation de MalnutriX Collect"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {"Ce guide est destiné aux aides-soignants pour les accompagner à chaque étape de l'utilisation de l'application."}
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Table des matières</h2>
              <nav className="grid sm:grid-cols-2 gap-4">
                <a
                  href="#introduction"
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all group"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-bold text-primary">i</span>
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    Introduction
                  </span>
                </a>
                {guideSteps.map((step) => (
                  <a
                    key={step.id}
                    href={`#${step.id}`}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {step.title}
                    </span>
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Introduction */}
          <section id="introduction" className="space-y-8 scroll-mt-20">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Introduction</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">MalnutriX Collect</strong> est une application mobile conçue pour
                simplifier la collecte des données des patients avant leur consultation. Elle permet de saisir les
                informations administratives, les mesures anthropométriques et les signes cliniques de manière
                structurée pour gagner du temps et réduire les erreurs.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/screenshot-20251222-012509.jpg"
                alt="Application MalnutriX Collect"
                width={384}
                height={768}
                priority
                className="rounded-2xl shadow-2xl border border-border max-w-sm"
              />
            </div>
          </section>

          {/* Dynamic Steps */}
          {guideSteps.map((step) => (
            <section key={step.id} id={step.id} className="space-y-8 scroll-mt-20">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  {step.number}
                </div>
                <div className="space-y-1">
                  <h2 className="text-4xl font-bold">{step.title}</h2>
                  <div className="h-1 w-16 bg-primary rounded-full"></div>
                </div>
              </div>

              {step.action && <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                   {step.icon&& <step.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />}
                    <div>
                      <p className="font-semibold text-lg mb-2">Action</p>
                      <p className="text-muted-foreground">{step.action}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>}

              <div className="space-y-10">
                {step.sections.map((section) => (
                  <div key={section.id} className="space-y-6">
                    <h3 className="text-2xl font-semibold flex items-center gap-3">
                      {section.icon && (
                        <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <section.icon className="h-5 w-5 text-primary" />
                        </div>
                      )}
                      {section.title}
                    </h3>
                    <div className={`space-y-4 ${section.icon ? "pl-13" : ""}`}>
                      <div className="text-muted-foreground leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />

                      {section.list && (
                        <ol className="space-y-4 list-none">
                          {section.list.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-lg">
                              <span className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                                {index + 1}
                              </span>
                              <span
                                className="text-muted-foreground leading-relaxed pt-1"
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </li>
                          ))}
                        </ol>
                      )}

                      {section.image && (
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.imageCaption || section.title}
                          width={448}
                          height={896}
                          loading="lazy"
                          className="rounded-2xl shadow-xl border border-border w-full max-w-md mx-auto"
                        />
                      )}

                      {section.images && (
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                          {section.images.map((img, index) => (
                            <div key={index} className="space-y-3">
                              <Image
                                src={img.src || "/placeholder.svg"}
                                alt={img.caption}
                                width={448}
                                height={896}
                                loading="lazy"
                                className="rounded-2xl shadow-xl border border-border w-full"
                              />
                              <p className="text-sm text-center text-muted-foreground">{img.caption}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.items && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          {section.items.map((item, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/50"
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div className="space-y-1">
                                <p className="font-semibold text-foreground">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {section.note && (
                        <Card
                          className={
                            section.note.type === "warning"
                              ? "bg-amber-500/10 border-amber-500/20"
                              : section.note.type === "success"
                                ? "bg-green-500/10 border-green-500/20"
                                : "bg-blue-500/10 border-blue-500/20"
                          }
                        >
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-3">
                              {section.note.type === "warning" && (
                                <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                              )}
                              {section.note.type === "success" && (
                                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                              )}
                              {section.note.type === "info" && (
                                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                              )}
                              <p className="text-sm text-foreground">
                                <strong>Note :</strong> {section.note.content}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {section.video && (
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                              ▶
                            </span>
                            Vidéo de démonstration
                          </p>
                          <YouTubeEmbed videoId={section.video.id} title={section.video.title} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
