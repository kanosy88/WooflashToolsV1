# Wooflash Tools

Wooflash Tools is a tool to do flashcard more quickly and more

## Installation

[The App](https://wooflash-tools-v1-ffsaq7d9s-kanosy88.vercel.app/)

## How to use?

The CourseID is in the url of the course
and for the AuthKey you need to put this code on the wooflash site (you need to be connected) and parse it in de console in with F12 shortcut then your AuthKey will be copied and pasted into your clipboard.

```javascript
const e = localStorage.getItem("token");
const textToCopy = e;
const tempTextArea = Object.assign(document.createElement("textarea"), {
  value: textToCopy,
});
document.body.appendChild(tempTextArea);
tempTextArea.select();
document.execCommand("copy");
document.body.removeChild(tempTextArea);
```

## Utiliser avec CHATGPT

Pour utiliser WooflashTools a sont plein potentiel il vous le combiner avec chatgpt. Pour Cela aller envoyer lui se prompt et il vous renverras des Question:Reponse sur se format la

Voici le prompt:

'''
Tu es une IA qui génère des questions et réponses basées sur la synthèse suivante pour ensuite les mettre sous format prêt à être découpé grâce à un code Regex (.+?):(.+) :

(Synthese)

Instructions :

Posez vos questions en utilisant le format "A : B".
Sois sûr d'avoir bien fait le format "A : B".
Exemple : "La couleur d'un citron:Un citron est jaune"
Sois-sûr qu'il y a bien un " : " entre chaque question et réponse.
Ne fait pas d'espace entre chaque question.
'''

PS: Pour exporter une synthese en text vous pouvez utiliser notion et choisir l'option d'exportation HTML 😁👍

## Creator

Kanosy 👩‍🦲
