# DEVLILLE · The Hot Seat — Carousel alternances

Carousel présenté sur écran lors du salon DevLille pour mettre en avant les profils des étudiants Holberton en recherche d'alternance.

---

## Ajouter ton profil — guide pas à pas

### Étape 1 — Récupère le projet => ⚠️ le fork est privilégié pour faire la PR ⚠️

```bash
git clone <url-du-repo>
cd dev_lille
```

---

### Étape 2 — Ajoute ta photo

Place une photo de toi dans le dossier :

```
public/avatars/
```

**Règles pour la photo :**
- Nom du fichier : `prenom_nom.jpg` (tout en minuscules, sans accents)
  - Exemple : `ines_rousseau.jpg`, `sofiane_b.jpg`
- Format : `.jpg` ou `.png`
- Taille recommandée : au moins **400 × 400 px**, carrée de préférence
- La photo sera affichée en cercle — centre toi bien dans le cadre

---

### Étape 3 — Ajoute ton profil dans le fichier de données

Ouvre le fichier :

```
src/data/profiles.js
```

Copie-colle ce bloc à la fin du tableau `PROFILES`, **avant le `]` final** :

```js
{
  name: "Prénom N.",           // ton prénom + initiale du nom
  accent: "#ff6a00",           // couleur de ton profil (voir palette ci-dessous)
  search: "Alternance",        // type de contrat recherché : "Alternance", "Stage", "CDI"
  role: "Dev Fullstack",       // ton intitulé de poste
  rhythm: "3 sem. / 1 sem.",   // rythme d'alternance (ou "" si pas concerné)
  available: "sept. 2026",     // date de disponibilité
  avatar: "/avatars/prenom_nom.jpg",  // chemin vers ta photo (étape 2)
  stack: [
    { name: "React",   icon: "devicon-react-original" },
    { name: "Python",  icon: "devicon-python-plain" },
    { name: "Docker",  icon: "devicon-docker-plain" },
    // ajoute autant de technos que tu veux
  ],
  quote: "Ta phrase de présentation.",
  links: {
    linkedin: "https://www.linkedin.com/in/ton-profil/",
    github: "https://github.com/ton-pseudo",
  },
},
```

> **Attention** : chaque bloc doit être séparé par une virgule du suivant. Si tu es le dernier du tableau, la virgule après `},` est optionnelle.

---

### Palette de couleurs — choisis la tienne

Chaque profil a sa propre teinte dans la famille rouge/orange/ambre. Choisis une couleur différente de tes camarades :

| Couleur | Code |
|---|---|
| Orange flamme | `#ff6a00` |
| Ambre doré | `#ffae00` |
| Rouge braise | `#ff2e1f` |
| Orange vif | `#ff9500` |
| Rouge orangé | `#ff4500` |
| Jaune miel | `#f5a623` |

---

### Icônes de stack technique

Le projet utilise [Devicon](https://devicon.dev/) pour les logos. Cherche ton outil sur le site et copie le nom de classe.

Exemples courants :

| Techno | Icône |
|---|---|
| C | `devicon-c-plain` |
| Python | `devicon-python-plain` |
| JavaScript | `devicon-javascript-plain` |
| TypeScript | `devicon-typescript-plain` |
| React | `devicon-react-original` |
| Node.js | `devicon-nodejs-plain` |
| HTML5 | `devicon-html5-plain` |
| CSS3 | `devicon-css3-plain` |
| Tailwind | `devicon-tailwindcss-original` |
| Sass | `devicon-sass-original` |
| Figma | `devicon-figma-plain` |
| Docker | `devicon-docker-plain` |
| Git | `devicon-git-plain` |
| Linux | `devicon-linux-plain` |
| Bash | `devicon-bash-plain` |
| PostgreSQL | `devicon-postgresql-plain` |
| MySQL | `devicon-mysql-plain` |
| MongoDB | `devicon-mongodb-plain` |

Pour un outil sans icône Devicon (Nmap, Wireshark…), laisse `icon: ""` et seul le nom s'affichera.

---

### Étape 4 — Vérifie que ça marche (optionnel mais recommandé)

Si tu as Node.js installé :

```bash
npm install   # uniquement la première fois
npm run dev   # lance le projet en local
```

Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur et vérifie que ta slide s'affiche bien.

---

### Étape 5 — Envoie tes modifications

```bash
git add public/avatars/prenom_nom.jpg
git add src/data/profiles.js
git commit -m "feat: ajout profil Prénom Nom"
git push
```

Crée ensuite une **Pull Request** sur GitHub. Quelqu'un relira et mergera.

---

## Structure du projet

```
dev_lille/
├── public/
│   ├── holberton.png          ← logo Holberton (filigrane)
│   └── avatars/               ← photos de profil  ← TON FICHIER ICI
├── src/
│   ├── data/
│   │   └── profiles.js        ← données des profils  ← TON BLOC ICI
│   ├── components/
│   │   ├── ProfileSlide.jsx   ← carte d'un profil
│   │   ├── Rail.jsx           ← navigation en bas
│   │   └── ProgressBar.jsx
│   ├── hooks/
│   │   └── useCarousel.js     ← logique du carousel
│   └── App.jsx
├── package.json
└── README.md
```

---

## En cas de problème

- **Ma photo ne s'affiche pas** : vérifie que le nom du fichier dans `avatar:` correspond exactement au fichier dans `public/avatars/` (majuscules, tirets, extension).
- **Erreur au lancement** : tu as probablement oublié une virgule ou une accolade dans `profiles.js`. Relis ton bloc attentivement.
- **Je ne vois pas le site** : assure-toi d'avoir lancé `npm run dev` et d'ouvrir [http://localhost:5173](http://localhost:5173).
