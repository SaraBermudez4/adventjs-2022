# ¿Cuántas cajas de regalo puede llevar Papá Noel?

## 🔢 Instrucciones

Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. **Cada regalo está representado por una cadena** Santa Claus tiene un trineo que puede llevar un **peso limitado**, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un **límite de peso máximo** que puede llevar. El límite de peso máximo de cada reno es **igual a dos veces el número de letras en su nombre**.

Tu tarea es implementar una función `distributeGifts(packOfGifts, reindeers)` que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. **Las cajas de regalos no se pueden dividir**.

```javascript
const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];
// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers); // 2
```

**Cosas a tener en cuenta**:

- Las cajas de regalos no se pueden dividir.
- Los nombres de los regalos y los renos siempre serán mayores que 0.
