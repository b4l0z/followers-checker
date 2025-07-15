#### Ajoute une étoile 🌟 pour soutenir le projet ! 🩷


# 🕵️‍♂️ Followers Checker

**Followers Checker** est un outil **JavaScript** qui te permet de faire parler les données de ton compte Instagram 📊  
Grâce au téléchargement de tes données via Meta, tu pourras découvrir :

- Qui **ne te suit pas en retour** 👀  
- Les gens que t’as **demandé à suivre mais qui t'ont ghosté 🖕**  
- Ceux qui t'ont **unfollow** 🥲





## ⚙️ Fonctionnalités

✅ Trouve les personnes qui ne te suivent pas en retour 👀  
✅ Trouve les personnes qui ne t'ont pas accepté sur leur compte 🔒  
✅ Détecte qui t'a supprimé ou unfollow 🔍  
✅ Interface simple via terminal 🖥️  
✅ Et + pour très bientôt ⌛  


## 📦 Installation

#### 1. Clone le repo ou télécharge-le en .zip :  
```bash
git clone https://github.com/b4l0z/followers-checker.git
```

#### 2. Lance le fichier d’installation :  
```bash
installer.bat
```



## 📁 Récupérer ses données Instagram

> ⚠️ Très important : le format doit être **JSON** (pas HTML) sinon le script ne marchera pas !

Voici comment faire sur mobile (*Android/iOS*) :

#### 1. Va sur ton **profil Instagram**  
#### 2. Clique sur l’icône **☰ (3 traits)**  
<img src="https://i.imgur.com/jD8UXzf.jpeg" alt="Étape 2" width="125"/>   
#### 3. Va dans **Centre des comptes Meta**  
   ![Étape 3](https://via.placeholder.com/150)  
#### 4. Sélectionne **Mes informations** → **Télécharger mes informations**  
   ![Étape 4](https://via.placeholder.com/150)  
#### 5. Choisis ton compte Instagram (si besoin)  
#### 6. Clique sur **"Some of your informations"**  
#### 7. Coche uniquement **"Followers and Following"**  
#### 8. Descends et vérifie bien que :  
   - **Date Range** : All Time  
   - **Format** : ⚠️ **JSON** ⚠️  
#### 9. Clique sur **Créer les fichiers** et attends le mail de Meta (quelques minutes)

---

## 🗃️ Placer les fichiers

Une fois les fichiers téléchargés, récupère ces 3 fichiers et place-les dans le **dossier racine** du projet :

- followers.json  
- following.json  
- pending_follow_requests.json

---

## 🚀 Lancer le projet

Une fois les fichiers en place :

starter.bat

Et c’est tout. Le programme va te balancer les infos direct dans le terminal 🤙

---

## 👤 Auteur

Créé avec 💻 par **BaloZ**  
📸 Instagram : [@arthur.pvtt](https://instagram.com/arthur.pvtt)

---

## 🏷️ Badges & Logo

Tu veux un logo ou un badge clean ? Check ce site gratos :  
[https://shields.io/](https://shields.io/) ← pour les badges  
[https://logojoy.com](https://logojoy.com) ou [https://looka.com](https://looka.com) ← pour les logos stylés

---

## 📄 Licence

🆓 Projet open-source pour usage perso uniquement. Si tu veux l'utiliser commercialement, contacte-moi avant.
