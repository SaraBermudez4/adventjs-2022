# Arreglando las cartas de Pap谩 Noel

## 馃敘 Instrucciones

Pap谩 Noel est谩 empezando a recibir un mont贸n de cartas pero tienen un mont贸n de problemas de formato. Para mejorar la lectura, va a escribir un programa que, dado un texto, lo formatea de acuerdo a las siguientes reglas:

- Eliminar espacios al inicio y al final
- Eliminar m煤ltiples espacios en blanco y dejar s贸lo uno
- Dejar un espacio despu茅s de cada coma
- Quitar espacios antes de coma o punto
- Las preguntas s贸lo deben terminar con un signo de interrogaci贸n
- La primera letra de cada oraci贸n debe estar en may煤scula
- Poner en may煤scula la palabra "Santa Claus" si aparece en la carta
- Poner un punto al final de la frase si no tiene puntuaci贸n
- Las cartas las escriben ingl茅s y aqu铆 tenemos un ejemplo:

```javascript
fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.
fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?");
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
```

**A tener en cuenta:**

- No te tienes que preocupar por los signos de puntuaci贸n que no sean coma, punto o interrogaci贸n.
- Aseg煤rate de respetar los saltos de l铆nea y espacios originales.