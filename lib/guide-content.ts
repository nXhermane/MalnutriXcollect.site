import {
  type LucideIcon,
  Search,
  UserPlus,
  Activity,
  Wifi,
  Download,
} from "lucide-react";

export interface GuideStep {
  id: string;
  number: number;
  title: string;
  icon?: LucideIcon;
  action?: string;
  sections: {
    id: string;
    title: string;
    icon?: LucideIcon;
    content: string;
    image?: string;
    imageCaption?: string;
    images?: Array<{ src: string; caption: string }>;
    items?: Array<{
      label: string;
      description: string;
    }>;
    note?: {
      type: "info" | "warning" | "success";
      content: string;
    };
    video?: {
      id: string;
      title: string;
    };
    list?: Array<string>;
  }[];
}

export const guideSteps: GuideStep[] = [
  {
    id: "etatpe-0",
    number: 0,
    title: "Installation",
    sections: [
      {
        id: "download",
        title: "Télécharger",
        icon: Download,
        content:
          "Téléchargez le fichier apk en cliquant <a href='https://github.com/nXhermane/MalnutriXcollect/releases/download/v1.0.0-beta.7/app-beta.apk' target='_blank' rel='noreferrer'>ici</a>",
      },
      {
        id: "setup",
        title: "Autorisation de la source (Chrome)",
        content:
          "Une fois le fichier télécharger, cliquez sur ouvrir le fichier. Par defaut, le téléphone bloque l'installation de fichier apk car le fichier provient de Chrome (une 'soure inconnue')",
        list: [
          "Cliquez sur le fichier apk",
          "Une fenêtre d'alerte s'affiche. Cliquez sur <b>Paramètre</b> (ou 'Settings')",
          "Dans le menu 'Installer des applications inconnues', cochez l'interrupteur <b>Autoriser à partir de cette source</b> pour Chrome",
          "Revenir en arrière.",
        ],
        images: [
          {
            src: "/images/screenshot_20260109-221844.jpg",
            caption: "Demande de permission",
          },
          {
            src: "/images/screenshot_20260109-221913.jpg",
            caption: "Installer des applications inconnues",
          },
        ],
      },
      {
        id: "install",
        title: "Lancement de l'installation",
        content:
          "Apres l'autorisation accordée, le système vous demande de comfirmer l'action",
        list: [
          "<b>Message:</b> <i>Voulez-vous installer cette application ?</i> \nCliquez sur <b>Installer</b>",
          "Une fois terminée, le message <i>Application installée</i> apparaît. Cliquez sur <b>Ouvrir</b> pour lancer l'application immédiatement ou <b>OK</b> pour fermer la fenêtre.",
        ],
        images: [
          {
            src: "/images/screenshot_20260109-221950.jpg",
            caption: "Fenêtre d'installation",
          },
          {
            src: "/images/screenshot_20260109-222002.jpg",
            caption: "Progression de l'installation",
          },
          {
            src: "/images/screenshot_20260109-222042.jpg",
            caption: "Installation terminée",
          },
          {
            src: '/images/screenshot_20260109-222109.jpg',
            caption: "Application MalnutriX Collect"
          },
          {
            src: '/images/screenshot_20260109-222137.jpg',
            caption: "Ecran d'accueil de l'application"
          }
        ],
      },
    ],
  },
  {
    id: "etape-1",
    number: 1,
    title: "Accueil et Identification",
    icon: UserPlus,
    action: "Recevoir le parent et l'enfant, puis identifier le patient.",
    sections: [
      {
        id: "recherche",
        title: "Recherche d'un patient",
        icon: Search,
        content:
          "Utilisez la barre de recherche en haut pour trouver un patient par son nom. Si le patient existe, appuyez sur son nom pour voir sa fiche.",
        image: "/images/screenshot-20251222-004110.jpg",
        imageCaption: "Barre de recherche active",
      },
      {
        id: "creation",
        title: "Création d'un nouveau patient",
        icon: UserPlus,
        content:
          "Si le patient n'existe pas, appuyez sur le bouton \"Ajouter\" en bas de l'écran.",
        image: "/images/screenshot-20251222-004140.jpg",
        imageCaption: "Formulaire de création patient",
      },
      {
        id: "formulaire",
        title: "Remplir le formulaire",
        content:
          "Saisissez toutes les informations nécessaires du patient avant de valider.",
        items: [
          {
            label: "Informations personnelles",
            description: "Nom complet, date de naissance, sexe",
          },
          {
            label: "Informations de contact",
            description: "Numéro de téléphone, email",
          },
          {
            label: "Adresse",
            description: "Adresse complète et ville",
          },
          {
            label: "Parents / Tuteurs",
            description: "Informations du père, mère ou tuteur",
          },
        ],
        note: {
          type: "warning",
          content:
            "Le bouton d'ajout reste désactivé tant que les informations nécessaires ne sont pas complètes.",
        },
        video: {
          id: "2aF0BKlBcpo",
          title: "Démonstration - Création d'un patient",
        },
      },
    ],
  },
  {
    id: "etape-2",
    number: 2,
    title: "Mesures Anthropométriques",
    icon: Activity,
    action:
      "Prendre les mesures de l'enfant (Poids, Taille, MUAC) et vérifier l'état de santé.",
    sections: [
      {
        id: "processus",
        title: "Processus d'ajout de mesures",
        content:
          "Suivez ces étapes pour ajouter une nouvelle visite au patient.",
        list: [
          "Allez sur la fiche du patient en appuyant sur son nom",
          'Appuyez sur le bouton "Nouvelle visite"',
          "Saisissez les données mesurées",
        ],
        images: [
          {
            src: "/images/screenshot-20251222-005811.jpg",
            caption: "Fiche patient avec historique",
          },
          {
            src: "/images/screenshot-20251222-005929.jpg",
            caption: "Formulaire de mesures",
          },
        ],
      },
      {
        id: "donnees",
        title: "Données à saisir",
        content:
          "Voici les mesures anthropométriques et signes vitaux à enregistrer.",
        items: [
          { label: "Poids", description: "En kilogrammes (kg)" },
          { label: "Taille / Longueur", description: "En centimètres (cm)" },
          {
            label: "Périmètre Brachial (MUAC)",
            description: "En centimètres (cm)",
          },
          { label: "Œdèmes", description: "Présence ou absence" },
          { label: "Température", description: "En degrés Celsius (°C)" },
          {
            label: "Autres signes cliniques",
            description: "Observations complémentaires",
          },
        ],
        video: {
          id: "Z4VxHpO7ilk",
          title: "Démonstration - Ajout de mesures",
        },
      },
    ],
  },
  {
    id: "etape-3",
    number: 3,
    title: "Synchronisation par QR Code",
    icon: Wifi,
    action: "Transférer les données au nutritionniste en scannant un QR code.",
    sections: [
      {
        id: "principe",
        title: "Comment fonctionne la synchronisation",
        content:
          "La synchronisation est simple : il suffit de scanner un QR code affiché par le nutritionniste. Les données sont ensuite transférées automatiquement et de manière sécurisée.",
        note: {
          type: "info",
          content:
            "Cette méthode garantit la confidentialité des données patient.",
        },
      },
      {
        id: "processus-sync",
        title: "Processus de synchronisation",
        content:
          "Suivez ces étapes pour synchroniser les données avec le nutritionniste.",
        list: [
          "Sur l'écran d'accueil, appuyez sur le bouton de Synchronisation (le badge indique le nombre de patients à synchroniser)",
          "L'appareil photo s'ouvre : scannez le QR code affiché sur l'application du nutritionniste",
          "Les données sont transmises automatiquement",
          "Un message de succès confirme la fin de l'opération",
        ],
        images: [
          {
            src: "/images/screenshot-20251222-010141.jpg",
            caption: "Bouton de synchronisation avec badge",
          },
          {
            src: "/images/screenshot-20251222-014044.jpg",
            caption: "Scanner le QR code du nutritionniste",
          },
        ],
        note: {
          type: "warning",
          content:
            "Une fois les données envoyées, les informations administratives sont automatiquement verrouillées et ne peuvent plus être modifiées.",
        },
      },
      {
        id: "reception-donnees",
        title: "Réception de données",
        content:
          "La synchronisation permet également au nutritionniste de vous envoyer une liste de patients déjà enregistrés auxquels vous pouvez ajouter des visites (mesures anthropométriques et informations cliniques).",
        note: {
          type: "success",
          content:
            "Les patients reçus apparaissent directement dans votre liste avec leur historique complet.",
        },
      },
    ],
  },
];
