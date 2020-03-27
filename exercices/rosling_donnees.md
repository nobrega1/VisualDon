**Expliquez la procédure en quelques points**

- télécharger les données dans le dossier (il en a 4);

- convertir les fichiers de xlsx à csv. 

- Pour ne pas répéter il faut  créer un seul script pour les 4 fichiers qui convertira en csv

- vérifier  les données des tableaux 

- utiliser la colonne geo pour joindre les données entre elles

- créer 3 scripts diffèrent pour convertit chaque csv en json

- il faut garder que les "pays" pour lesquels il a des données pour toutes les années. 

- Joindre les 4 différents 

- Une fois que tout soit dans 1 seul fichier créer un  scripte qui lancera toutes les commandes utilisées précédemment

  



**Quel est intérêt d'avoir des scriptes pour manipuler des données?**

cela automatise toute l'utilisation et rend plus simple la manipulation des données. De plus par exple pour la première étape un script suffit pour convertit plusieurs jeux de données ce qui rend la chose beaucoup plus facile et rapide.



**Comment avons nous joint les quatre jeux de données?**

- on utilise la colonne geo qui était présente dans les 4 jeux de données
- on charge tous les fichier dans un script joindata.js
- on crée une fonction qui prends une collection (un des jeux de données `population`, `esperance_de_vie` et `pnb_p_habitant`) et le nom de la clé sous laquelle les données seront ajoutées
- pour finir on met node joinData > data.json pour creer le fichier qui regroupe les 4

