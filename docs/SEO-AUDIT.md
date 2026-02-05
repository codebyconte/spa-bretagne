# Audit SEO – Spas Bretagne

*Réalisé selon le framework du skill seo-audit (crawlabilité, technique, on-page, contenu).*

---

## Contexte du site

- **Type :** Annuaire / site local (spas et bien-être en Bretagne).
- **Objectif SEO :** Visibilité sur les requêtes « spa Bretagne », « thalasso [ville] », « meilleurs spas [département] », et trafic vers les fiches établissements.
- **Périmètre :** Audit technique + on-page sur l’ensemble du site (pas d’accès Search Console / analytics).

---

## Résumé exécutif

**État général :** Bonnes bases (URLs, H1, métadonnées par page, `next/image`). Plusieurs points bloquants ou à fort impact ont été traités : **sitemap et robots absents** (corrigés), **pas de viewport/Open Graph** (corrigés), **liens internes footer cassés ou inutiles** (corrigés).

**Problèmes prioritaires identifiés (avant correctifs) :**
1. Absence de sitemap XML et de robots.txt → **corrigé**
2. Pas de métadonnées sociales (Open Graph, Twitter) → **corrigé**
3. Liens footer « Régions » et pages légales pointant vers `#` → **corrigé**
4. Titre page Départements trop long (risque de troncature SERP) → **corrigé** (template gère le suffixe)
5. Pas de pages Mentions légales / Politique de confidentialité → **corrigé** (pages créées)

**Quick wins réalisés :** viewport, `metadataBase`, openGraph, twitter, canonique, `sitemap.ts`, `robots.ts`, liens footer, pages légales, `sizes` sur l’image de la section À propos.

---

## 1. Technique SEO

### Crawlabilité

| Élément | Avant | Après | Priorité |
|--------|--------|--------|----------|
| **robots.txt** | Absent | `app/robots.ts` : allow `/`, disallow `/api/`, sitemap référencé | Haute |
| **Sitemap XML** | Absent | `app/sitemap.ts` : accueil, /spas, /departements, tous départements, toutes fiches spa, pages légales | Haute |
| **Référence sitemap** | N/A | Indiquée dans `robots.ts` | Haute |

**Recommandation :** Définir `NEXT_PUBLIC_SITE_URL` en production (ex. `https://www.spasbretagne.fr`) pour que sitemap et robots utilisent la bonne URL.

### Indexation

- **Canonical :** `metadataBase` + `alternates.canonical` ajoutés au layout (canonical global). Les pages dynamiques héritent de la base ; pour des canonicals spécifiques par page, ajouter `alternates: { canonical }` dans chaque `generateMetadata` si besoin (URLs avec paramètres, variantes).
- **Noindex :** Aucune page importante en noindex. Pages légales en `index, follow`.
- **Structure d’URL :** Claires, en minuscules, avec tirets (`/departements/finistere`, `/spas/valdys-resort-douarnenez`) → **OK**.

### Vitesse et Core Web Vitals

- **Images :** `next/image` partout, `sizes` ajoutés sur les images en `fill` (dont hero et section À propos) → bon pour LCP et bande passante.
- **Polices :** `next/font` (DM Sans, Playfair Display) → pas de FOUT, bon pour CLS/INP.
- **Recommandation :** Mesurer avec PageSpeed Insights / Search Console (Core Web Vitals) après mise en production.

### Mobile et viewport

- **Viewport :** `viewport` exporté dans le layout (width, initialScale, themeColor) → **OK**.
- **Design :** Site responsive (pas de sous-domaine m.) → **OK**.

### Sécurité

- HTTPS à garantir en production (Vercel le fournit en général). Pas de mixed content repéré dans le code.

---

## 2. On-page SEO

### Titres (title)

| Page | Titre (exemple / règle) | Longueur | Statut |
|------|------------------------|----------|--------|
| Accueil | « Spas Bretagne - Les Meilleurs Spas de Bretagne » (default layout) | ~45 car. | OK |
| /spas | « Tous les Spas de Bretagne - Annuaire complet \| Spas Bretagne » (template) | ~55 car. | OK |
| /departements | « Spas par Département - Finistère, Morbihan... » (sans doublon "| Spas Bretagne") | ~60 car. | OK (template peut ajouter le suffixe) |
| /departements/[id] | « Spas en [Département] - Les meilleurs spas \| Spas Bretagne » | Variable | OK |
| /spas/[slug] | « [Nom spa] - [Ville] \| Spas Bretagne » | Variable | OK |

**Recommandation :** Vérifier en SERP que les titres dynamiques (fiches spa) ne dépassent pas ~60 caractères (nom long + ville + marque).

### Meta descriptions

| Page | Contenu | Longueur cible 150–160 | Statut |
|------|---------|------------------------|--------|
| Layout (default) | Présentation spas Bretagne, thalasso, massages | ~115 car. | Un peu court ; possible d’ajouter une phrase (ex. « Réservez votre séjour bien-être. ») pour approcher 150. |
| /departements | « Explorez les spas... par département breton... » | ~105 car. | Idem, peut être enrichie. |
| /spas | « Découvrez tous les spas... Filtrez par département... » | ~85 car. | Courte ; à enrichir pour 120–160 car. |
| /departements/[id] | `dept.description` (une phrase) | Souvent 80–120 car. | Acceptable ; possible d’ajouter « Découvrez les adresses, avis et tarifs. » pour rapprocher de 150. |
| /spas/[slug] | `spa.description` | Variable | Idem : une phrase courte ; envisager un suffixe type « Tarifs et réservation sur Spas Bretagne. » |

### Structure des titres (Hn)

- **Accueil :** 1 seul H1 (« Les Meilleurs Spas de Bretagne » dans le Hero). H2 pour les sections (Notre Sélection, À propos, etc.) → **OK**.
- **/departements :** H1 « Spas par Département », H2 « La Bretagne, terre de bien-être » → **OK**.
- **/spas :** H1 « Tous les Spas de Bretagne », H2 « Filtrer par département » → **OK**.
- **/departements/[department] :** H1 « Spas en [Département] ». Cartes en H3 pour les noms de spas (sémantique correcte en liste) → **OK**.
- **/spas/[slug] :** H1 = nom du spa. CardTitle « À propos », « Soins proposés », « Équipements », « Galerie photos », « Contact » → à considérer en H2 pour une hiérarchie plus claire (actuellement composants Card).
- **Pages légales :** H1 unique, H2 pour les sections → **OK**.

### Images

- **Alt :** Présent sur toutes les images (hero, cartes, galeries, section À propos). Contenu pertinent (nom du spa, nom du département, « Intérieur spa en Bretagne », « [Nom] - Photo N ») → **OK**.
- **next/image :** Utilisé partout, avec `sizes` sur les images en `fill` → **OK**.
- **Formats :** Mélange .jpg et .webp dans les données ; Next optimise à la volée → **OK**.

### Liens internes

- **Header :** Accueil, Tous les spas, Départements (menu), Services, À propos → **OK**.
- **Footer (avant correctifs) :** « Régions » en `#`, « Blog » en `#`, « Mentions légales » et « Politique de confidentialité » en `#`.
- **Footer (après correctifs) :** « Départements » avec liens vers `/departements/finistere`, etc. ; « Tous les spas » vers `/spas` ; « Mentions légales » → `/mentions-legales` ; « Politique de confidentialité » → `/politique-confidentialite` → **OK**.
- **Contenu :** Liens « Retour à l’accueil », « Retour aux spas », « Voir tous les spas », liens vers fiches spa et départements → **OK**. Pas de pages orphelines identifiées.

---

## 3. Contenu et E-E-A-T

- **Expérience / expertise :** Texte « À propos » (depuis 2018, sélection rigoureuse, visites, avis vérifiés) → signaux positifs.
- **Confiance :** Contact (e-mail, téléphone), pages Mentions légales et Politique de confidentialité ajoutées → **OK**.
- **Qualité rédactionnelle :** Pas de formulations type « delve », « leverage », em-dashes excessives (réf. ai-writing-detection). Descriptions spa/départements factuelles et courtes → **OK**.
- **Contenu « thin » :** Pages listes (accueil, /spas, /departements) ont un bloc texte + données ; fiches spa ont description complète, soins, équipements, contact. Pas de pages purement « doorway ». Recommandation : garder au moins un paragraphe unique par page liste (déjà le cas).

---

## 4. Recommandations non encore implémentées

1. **Schema.org (données structurées)**  
   - **LocalBusiness** (ou **HealthAndBeautyBusiness**) sur les fiches spa (nom, adresse, téléphone, horaires, note).  
   - **BreadcrumbList** sur les pages (accueil > Départements > Finistère ; accueil > Spas > [Nom]).  
   → À faire via le skill **schema-markup** si disponible.

2. **Open Graph image**  
   - Ajouter une image par défaut (ex. `app/opengraph-image.png` ou `opengraph-image.tsx`) pour un meilleur rendu partage social.

3. **Meta descriptions**  
   - Enrichir les meta descriptions du layout, /spas et /departements pour viser 150–160 caractères sans keyword stuffing.

4. **Canonical par page**  
   - Si vous avez des variantes d’URL (query params, trailing slash), définir `alternates.canonical` dans chaque `generateMetadata` pour les pages concernées.

5. **Search Console & analytics**  
   - Soumettre le sitemap dans Google Search Console.  
   - Suivre indexation, Core Web Vitals et requêtes pour affiner titres/descriptions et contenu.

---

## 5. Plan d’action priorisé

| Priorité | Action | Statut |
|----------|--------|--------|
| Critique | Sitemap XML + robots.txt | ✅ Fait |
| Haute | Viewport + Open Graph + Twitter + metadataBase + canonical | ✅ Fait |
| Haute | Liens internes footer (départements + pages légales) | ✅ Fait |
| Haute | Pages Mentions légales et Politique de confidentialité | ✅ Fait |
| Moyenne | Enrichir meta descriptions (150–160 car.) | À faire |
| Moyenne | Données structurées (LocalBusiness, BreadcrumbList) | À faire |
| Basse | Image Open Graph par défaut | À faire |
| Long terme | Mesurer CWV et indexation (Search Console), ajuster titres/descriptions selon requêtes | À faire |

---

*Audit réalisé en s’appuyant sur le skill `.cursor/skills/seo-audit` (crawlabilité, technique, on-page, contenu). Correctifs techniques et on-page listés ci-dessus ont été appliqués dans le projet.*
