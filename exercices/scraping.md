### **Décrivez avec vos propres mots comment j'ai procédé pour télécharger ces deux jeux de données**



##### Récupérer tous les modèles de chaussettes

- Pour commencer faut chercher les requetes Json qui sont présent dans le onglet network , dans la console de developement
- on copy les curl des requetes GraphQL,ce qui nous permettra de faire les requetes comme on veux
- Ensuite on prepare les données ou l'on charge un notre json et dans ce cas la ramda pour trouver ce qu'on cherche.
- Ensuite on cherche que ce qui nous intéresse 
- et pour conclure on stringify pour creer notre data.json



##### Titres du 19h30

- Pour commencer faut chercher les requetes Json qui sont présent dans le onglet network , dans la console de developement

- on click sur le lien  pour analyser le json sur un autre onglet

- selon ça on lance une requete qui recupere les données que l'on veux dans se cas c'est les derniers episodes des 10 derniers jours indifiniment. Tout ça parce dans segments>maxdata();

- on installe dayjs pour manipuler les differentes dates

- On cherche les dates ,pouvoir telecharger les episodes en format json.

- on sauveguarde le fichier ndjson à chaque fois que des données du serveur rts sont réçus

- on creer une boucle qui sauveguarde à chaque fois les nouvelles données. dans notre exercice la boucle va aller chercher tous les episodes jusqua lan 2000

- vu qu'il est trop volumineux il faut l'ajouter dans .gitignore

- dans chaque ligne on à 10 episode,mais nous on souhaite 1 episode par ligne donc il faut  utiliser reader pour le faire sortir dans un autre fichier qui n'est pas encore le final(qui seras moin volumineux mais aussi ou on profiteras pour que ls infos qui nous intéressent)

- on cherche grace a scripte toutes les donnés qui nous intéressent (durées, segments,episodes)

- ensuite on extrait segments de chaque episode que nous le lieront avec le id_episode

  

