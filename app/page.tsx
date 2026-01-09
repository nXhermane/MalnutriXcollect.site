import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle2,
  QrCode,
  Smartphone,
  Database,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="w-fit text-sm">Version Bêta Disponible</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">
              Collectez les données patients en{" "}
              <span className="text-primary">quelques secondes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              MalnutriX Collect aide les aides-soignants à collecter les données
              anthropométriques des patients avant la consultation, réduisant le
              temps de saisie des nutritionnistes de{" "}
              <strong className="text-foreground">90%</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://release-assets.githubusercontent.com/github-production-release-asset/1103240492/e49d3828-5f77-4bbd-9231-7348b196c867?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-01-09T08%3A15%3A31Z&rscd=attachment%3B+filename%3Dapp-beta.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-01-09T07%3A15%3A07Z&ske=2026-01-09T08%3A15%3A31Z&sks=b&skv=2018-11-09&sig=P2mjjlNEPMsC8dk7l1cvahknHHIqIQ20xjtMPDsjLXM%3D"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" className="gap-2 text-lg">
                  {"Télécharger l'APK"}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
              <Link href="/guide">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-lg bg-transparent"
                >
                  Voir le Guide
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Hors ligne
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Open Source
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <Image
              src="/images/screenshot-20251222-012509.jpg"
              alt="MalnutriX Collect App"
              width={400}
              height={800}
              priority
              className="relative rounded-3xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Le problème</h2>
              <Card className="bg-destructive/10 border-destructive/20">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      Les nutritionnistes/pédiatres ont <strong>peu de temps</strong> par
                      consultation et la saisie des données prend du temps
                      précieux
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      Des consultations ralenties et moins efficaces
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      Erreurs de saisie fréquentes et perte de temps
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">La solution</h2>
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      {"Collecte des données à l'accueil par les aides-soignants"}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      Partage instantané des données en scannant un QR code
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">
                      {"Jusqu'à"} <strong>90% de réduction</strong> du temps de
                      saisie des données
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Fonctionnalités principales</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une application complète pensée pour simplifier votre travail
            quotidien
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Gestion des Patients</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créez et gérez facilement les fiches patients avec toutes les
                informations nécessaires
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                Mesures Anthropométriques
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Enregistrez poids, taille, MUAC et autres mesures en quelques
                secondes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Synchronisation QR</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transférez les données au nutritionniste en scannant simplement
                un QR code
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mode Hors Ligne</h3>
              <p className="text-muted-foreground leading-relaxed">
                Travaillez sans connexion internet, les données sont
                sauvegardées localement
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              Workflow simplifié en 3 étapes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De la collecte à la transmission, tout est fluide et rapide
            </p>
          </div>
          <div className=" grid lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="space-y-4">
                <div className=" h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-semibold">Collecte</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {"L'aide-soignant crée ou recherche le patient puis saisit les données anthropométriques et cliniques à l'accueil."}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-semibold">Scan QR Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scannez simplement le QR code affiché par le nutritionniste
                  pour établir la connexion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="space-y-4">
                <div className="h-16 w-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-semibold">Transmission</h3>
                <p className="text-muted-foreground leading-relaxed">
                 {"Les données sont automatiquement transférées et intégrées dans l'application du nutritionniste."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 lg:p-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold">Impact attendu</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold">90%</div>
                <p className="text-primary-foreground/90 text-lg">
                  Réduction du temps de saisie
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold">Instantané</div>
                <p className="text-primary-foreground/90 text-lg">
                  Partage des données via QR code
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold">Zéro</div>
                <p className="text-primary-foreground/90 text-lg">
                  Erreur de saisie avec transmission automatique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">{"Découvrez l'interface"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une interface intuitive conçue pour les professionnels de santé
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/screenshot-20251222-010141.jpg"
                alt="Liste des patients"
                width={400}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg border border-border w-full"
              />
              <p className="text-center text-sm text-muted-foreground">
                Liste des patients avec recherche
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/screenshot-20251222-004140.jpg"
                alt="Formulaire patient"
                width={400}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg border border-border w-full"
              />
              <p className="text-center text-sm text-muted-foreground">
                Formulaire de création patient
              </p>
            </div>
            <div className="space-y-4">
              <Image
                src="/images/screenshot-20251222-005929.jpg"
                alt="Mesures anthropométriques"
                width={400}
                height={800}
                loading="lazy"
                className="rounded-2xl shadow-lg border border-border w-full"
              />
              <p className="text-center text-sm text-muted-foreground">
                Saisie des mesures anthropométriques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-accent rounded-3xl p-12 lg:p-20 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Prêt à améliorer vos consultations ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {"Téléchargez la version bêta et commencez à gagner du temps dès aujourd'hui"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://release-assets.githubusercontent.com/github-production-release-asset/1103240492/e49d3828-5f77-4bbd-9231-7348b196c867?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-01-09T08%3A15%3A31Z&rscd=attachment%3B+filename%3Dapp-beta.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-01-09T07%3A15%3A07Z&ske=2026-01-09T08%3A15%3A31Z&sks=b&skv=2018-11-09&sig=P2mjjlNEPMsC8dk7l1cvahknHHIqIQ20xjtMPDsjLXM%3D"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="lg" className="gap-2 text-lg">
                Télécharger la Bêta
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <Link href="/guide">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg bg-transparent"
              >
                Lire le Guide Complet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
