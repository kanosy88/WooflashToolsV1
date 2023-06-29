﻿# Wooflash Tools

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
You're an AI that generates questions and answers based on the following synthesis, and then puts them into a format ready to be cut using a Regex code (.+?):(.+) :

(Synthesis)

Instructions :

Ask your questions using the "A : B" format.
Be sure to use the "A : B" format.
Example: "The color of a lemon:A lemon is yellow".
Make sure there's a ":" between each question and answer.
Don't put spaces between questions.
Answer in french.
'''

PS: Pour exporter une synthese en text vous pouvez utiliser notion et choisir l'option d'exportation HTML 😁👍

## Creator

Kanosy 👩‍🦲
