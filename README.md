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

## Creator

Knz aka le grand kanosy en personne
