# 👥 User Manager App

**User Manager App** est une application développée avec **React** dans le but de tester et pratiquer la logique d'une interface de gestion d'utilisateurs. Elle permet d'ajouter, éditer, supprimer et filtrer des utilisateurs dans un tableau avec un système de pagination dynamique.

---

## 🚀 Fonctionnalités principales

- 👤 **Ajout d'utilisateurs** (nom, genre, âge)
- 📝 **Édition inline** via `contentEditable` :
  - Aucun champ d'édition externe, l'utilisateur peut modifier directement dans le tableau
  - Il suffit de cliquer sur le bouton **"Edit"** pour passer en mode édition, puis re-cliquer sur **"Edit"** pour sauvegarder
- ❌ **Suppression** d’un utilisateur
- 🔍 **Filtrage par nom** :
  - Un champ de recherche permet de filtrer les utilisateurs affichés selon leur nom
- 📄 **Pagination** :
  - Affichage de **5 utilisateurs par page**
  - La pagination **s’adapte dynamiquement au filtre**
- ⚠️ **Données non persistantes** :
  - L’application ne sauvegarde pas les données, elle a été conçue uniquement pour **tester la logique front-end**

---

## 🛠️ Stack technique

- ⚛️ **React**
- 💅 **CSS Modules** ou **CSS de base** (selon ton implémentation)
- 🔁 **State local avec useState et logique manuelle**

---

## 📂 Structure des données utilisateur

Chaque utilisateur est représenté sous la forme :

```json
{
  "id": 1,
  "name": "Jane Doe",
  "gender": "Female",
  "age": 28
}

---
🧪 But du projet
Ce projet est un exercice de logique destiné à :

Gérer dynamiquement des données locales

Travailler l’édition inline avec contentEditable

Mettre en place un système de pagination filtrable

Comprendre l’état React et sa gestion sans backend


🧑‍🎨 Auteur
Développé avec ❤️ par @stn-dev
```
