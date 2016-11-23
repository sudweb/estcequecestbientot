# Est-ce que c'est bientôt Sud Web ?

Sud Web a lieu chaque année dans le Sud de la France, certains trouvent le temps long, et se demandent si c'est bientôt Sud Web. Cette page tente de répondre avec humour à cette question existentielle.

Le site tire partie du gestionnaire de contenu statique Jekyll et est hébergé sur Github Pages. La mise à jour peut donc se faire directement dans votre navigateur web.

## Mettre à jour la réponse

La réponse est stocké dans le fichier [`assets/data.csv`](assets/data.csv), vous êtes invité à proposer des nouvelles entrées en respectant le format.

* `active` : définit si le message est affiché ou non (permet de désactiver des messages)
* `begin` : date à partir de laquelle le message sera affiché, au format `dd/mm/yyyy`
* `end` : date après laquelle le message ne sera plus affiché, au format `dd/mm/yyyy`
* `text` : le texte affiché en grand
* `cta_text` : le texte affiché sur le bouton
* `cta_url` : l'URL vers laquelle le bouton renvoie	
* `cta_title` : le texte alternatif du bouton
* `weight`: si plusieurs messages sont valides en même temps, permet de déterminer celui à afficher. S'il reste encore plusieurs messages, on tire au sort ! 

Votre soumission sera ensuite examinée via une PR et fusionnée si elle nous paraît appropriée.

Vivement Sud Web !

## Développement

### Dépendances

* [Bundler](http://bundler.io/)
* [Node](https://nodejs.org/en/)

### Installation et lancement local

* Installation des dépendances relatives à Jekyll
  ```bash
  bundle install 
  ```
* Dépendances Front-Office
  ```
  npm install -g bower && bower install;
  ```
* Lancement local
  ```
  bundle exec jekyll serve
  ```

### Comment ça marche ?

Un message par défaut est défini [dans la configuration](_config.yml) au cas où Javascript ne serait pas disponible sur le navigateur. S'il est disponible, au chargement de la page, le fichier CSV est chargé et parsé par la librairie [Papa Parse](http://papaparse.com/). Nous appliquons ensuite une logique pour choisir les messages valides puis nous utilisons [doT](http://olado.github.io/doT/index.html) pour injecter un message dans la page. Si aucun message n'est valide (actif, avec des dates de début et de fin cohérentes), alors nous affichons le message par défaut.

