export interface RoadmapFeature {
  id: string;
  title: string;
  description: string;
  status: "done" | "in-progress" | "planned";
  category: "core" | "feature" | "enhancement" | "integration";
  priority: "high" | "medium" | "low";
}

export const roadmapFeatures: RoadmapFeature[] = [
  {
    id: "patient-management",
    title: "Gestion des Patients",
    description:
      "Créer, modifier, rechercher et consulter les fiches patients avec toutes les informations nécessaires",
    status: "done",
    category: "core",
    priority: "high",
  },
  {
    id: "anthropometric-measures",
    title: "Mesures Anthropométriques",
    description:
      "Enregistrer poids, taille, MUAC, périmètre crânien et autres mesures avec historique",
    status: "done",
    category: "core",
    priority: "high",
  },
  {
    id: "qr-sync",
    title: "Synchronisation QR Code",
    description:
      "Transfert automatique des données via WiFi/TCP Socket après scan d'un QR code",
    status: "done",
    category: "core",
    priority: "high",
  },
  {
    id: "offline-storage",
    title: "Mode Hors Ligne",
    description:
      "Stockage local des données avec MMKV/LegendState pour travailler sans connexion internet",
    status: "done",
    category: "core",
    priority: "high",
  },
  {
    id: "patient-locking",
    title: "Verrouillage des Patients",
    description:
      "Verrouillage automatique des informations administratives après synchronisation",
    status: "done",
    category: "feature",
    priority: "high",
  },
  {
    id: "form-validation",
    title: "Validation des Formulaires",
    description:
      "Validation complète avec Valibot pour garantir la qualité des données saisies",
    status: "done",
    category: "feature",
    priority: "medium",
  },
  {
    id: "data-export",
    title: "Synchronisation avec le Cloud",
    description:
      "Synchronisation des données analytiques via le Cloud pour une évaluation objective de l'application",
    status: "planned",
    category: "feature",
    priority: "low",
  },
  {
    id: "specific-data-collect",
    title: "Collect de donnée specifique",
    description:
      "Permettre à l'aide soignante de remplir et synchroniser des formulaires de données spécifiques partagés par le nutritionniste",
    status: "planned",
    priority: "medium",
    category: "feature",
  },
];
