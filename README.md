# Sandbox

Repo servant de documentation pour les composants, directives, pipes et autre créés lors de la migration. On y explique ce qu'ils font et comment les importer et les utiliser.

Divers outils sont égalements disponibles tels que la selection rapide de svg (copiés directement dans le presse-papier), les boutons et autres composants chartés.

## Installation

Afin de fonctionner correctement, le repo doit obligatoirement installé dans `boutique/doc/` et renommé sandbox, ceci afin que les liens symboliques pointent bien vers les bons dossiers/fichiers.

Une fois le repo chargé, la derniere version buildée est accessible via l'url : http://local.bouyguestelecom.fr/doc/sandbox/dist/

## Contributeur

Pour installer toutes les dépendances : `yarn install`

Pour lancer le serveur : `yarn start`

Pour builder une version accessible via l'url spécifiée plus haut : `yarn build --base-href /doc/sandbox/dist/`
