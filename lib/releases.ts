export interface Release {
  version: string
  date: string
  type: "major" | "minor" | "patch" | "beta"
  title: string
  description: string
  features: string[]
  fixes?: string[]
  breaking?: string[]
  downloadUrl?: string
}

export const releases: Release[] = [
  {
    version: "1.0.0-beta.7",
    date: "2025-01-08",
    type: "beta",
    title: "Version Bêta Initiale",
    description: "Version bêta de MalnutriX Collect avec les fonctionnalités principales.",
    features: [
      "Gestion complète des patients (création, recherche, modification)",
      "Formulaire de mesures anthropométriques et signes cliniques (poids, taille, MUAC, etc.)",
      "Synchronisation de patient via WiFi/TCP Socket avec QR code",
      "Stockage local hors ligne avec MMKV/LegendState",
      "Interface responsive avec Gluestack UI",
      "Historique de visite par patient",
      "Verrouillage des patients après synchronisation",
    ],
    fixes: [
    ],
    breaking: [
       "L'export de patient via QRcode animé a été changé par une synchronisation de patient via WiFi/TCP Socket",
    ],
    downloadUrl:
      "https://github.com/nXhermane/MalnutriXcollect/releases/download/v1.0.0-beta.7/app-beta.apk",
  },
]
