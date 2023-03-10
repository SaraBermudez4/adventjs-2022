# Pap谩 Noel es Scrum Master

## 馃敘 Instrucciones

Papa No茅l est谩 un poco preocupado porque los preparativos est谩n llevando mucho tiempo. Hace poco se ha sacado una certificaci贸n de Scrum y ha decidido usar la metodolog铆a para organizar el trabajo de sus elfos.

Le dicen la duraci贸n esperada de las tareas con un string con el formato `hh:mm:ss` y en el mismo formato cu谩nto tiempo llevan trabajando en ella.

Pero Papa No茅l no se entera r谩pidamente si falta o mucho para que termine, as铆 que nos ha pedido que hagamos un programa que nos indique la porci贸n de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura `03:00:00` y llevan trabajando `01:00:00` entonces ya han completado `1/3` de la tarea. En c贸digo:

```javascript
getCompleted('01:00:00', '03:00:00'); // '1/3'
getCompleted('02:00:00', '04:00:00'); // '1/2'
getCompleted('01:00:00', '01:00:00'); // '1/1'
getCompleted('00:10:00', '01:00:00'); // '1/6'
getCompleted('01:10:10', '03:30:30'); // '1/3'
getCompleted('03:30:30', '05:50:50'); // '3/5
```

**Ten en cuenta**:

- El formato de la hora es `hh:mm:ss`.
- El formato de la salida es un string `a/b` donde  `a` es la porci贸n de la tarea que ya se ha completado y `b` es la porci贸n de la tarea que falta por completar.
- La porci贸n siempre se muestra con la menor fracci贸n posible. (por ejemplo, nunca se mostrar铆a `2/4` porque se puede representar como `1/2`).
- Si ya se ha completado la tarea, la fracci贸n ser铆a `1/1`.
- Ningun elfo ha sido maltratado durante la ejecuci贸n de este reto ni han tenido que usar Scrum de verdad.