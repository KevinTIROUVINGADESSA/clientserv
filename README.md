# TP Microservices
## Lancer le projet
`git clone https://github.com/KevinTIROUVINGADESSA/clientserv.git  `

`cd clientserv  `

`sudo docker-compose build`  

`sudo docker-compose up`

## Intro

Nous avons décider de créer une application MERN pour pouvoir receuillir/stocker des données qui nous seront utiles pour notre projet de fin de semestre. Cela consiste donc en un formulaire avec pour champs le nom du commerce, le nom des produits, le prix total ainsi que la date d'achat. Ses informations sont alors stockés dans la db que l'on pourras utiliser pour entrainer notre modele par la suite.
## Discussion
On a donc utilisé : 

- Mongo DB : On a donc créer notre database avec une collection nommée tickets ou l'on stockeras les infos recupérées du formulaire. On pourras ensuite modifier/ supprimer nos tickets. On se connecte depuis le server en utilisant la librairie Mongoose grace a l'url mongodb://127.0.0.1:27017/deewee que l'on modifieras en mongodb://mongodb:27017/deewee lorsque l'on lanceras les services depuis des containers.

- Express JS : Nous avons choisi express pour créer la partie server de notre application et mettre en écoute le port 3000, mais on devait relancer le server a chaque modif, on a donc utiliser nodemon qui permet de restart le server quand un changement est effectué. Nous avons choisis express car cela permet de créer des routes qui donnent acces au services de notre api.

- Robot3T et Postman : pour verifier manuellement que notre application fonctionnait bien grace aux requetes post/put/get/delete

- React JS : On a utiliser cette bibliotheque pour developper notre front end. On profite des avantages du framework, à savoir une application très rapides grâce à la présence du DOM virtuel qui lui évite des opérations coûteuses, un code très propre et du JS beaucoup plus simple à écrire et plus lisible grâce au JSX.

- Node JS : Enfin node pour pouvoir executer nos différents services

- Docker : Une fois l'architecture mise en place nous avons utiliser docker afin de créer un container par service à l'aide d'un dockerfile sauf pour mongo nous avons directement utilisé l'image présente dans docker. Nous avons ensuite utiliser compose pour pouvoir créer et démarrer tous les services à partir d'une seule commande (build + up) grace a un fichier YAML qui nous permettait de configurer les services de notre application. On a donc 3 services (containers) c'est a dire mongodb, notre front et backend. Pour mongo on utilise l'image et le port 27017, pour le back et front les ports 3000 et 8000 et l'image definie dans leurs dockerfile respectifs. Enfin grace a l'option depends_on on peux indiquer que le container du back seras lancé apres le service mongo sinon la requete pour se connecter a la db va fail. On a donc ce schéma MongoDB -> Back -> Front. Finalement le docker-compose build va download les images et executer les commandes des 2 dockerfiles on peux ensuite lancer le up.
