# Sandbox

Repo servant de documentation pour les composants, directives, pipes et autre créés lors de la migration. On y explique ce qu'ils font et comment les importer et les utiliser.

Divers outils sont égalements disponibles tels que la selection rapide de svg (copiés directement dans le presse-papier), les boutons et autres composants chartés.

## Installation

Afin de fonctionner correctement, le repo doit obligatoirement installé dans `bytel/docs/` et renommé `sandbox-dev`, ceci afin que les liens symboliques pointent bien vers les bons dossiers/fichiers.

## Contributeur

Pour installer toutes les dépendances : `yarn install --offline`

Pour lancer le serveur : `yarn start -o`

Pour builder une version accessible via l'url spécifiée plus haut : `yarn build --prod`

Une fois le build complété, ne pas oublier de commit les fichiers sur le repo de la boutique.
