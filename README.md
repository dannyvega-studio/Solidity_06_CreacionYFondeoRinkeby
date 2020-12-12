# DAPPS # Solidity #Truffle
Se realiza la creacion de una cuenta en Rinkeby y se le agregaran fondos. (Dividido en 4 COMMITS en este mismo repositorio)

Paso - 1

Primero se creara la estructura con el constructor y la declaracion/conversion de unidades en eth

![](img/truffle11.png)![](img/truffle12.png)![](img/truffle13.png)

NOTA: tener mucho cuidado de usar toString en lugar de toNumber ya que al usar cantidades grandes (como en este caso el valor del ETH 1,000,000,000,000,000,000 al momento de compilar y ejecutar aparecera un error de que excede los 53 bytes).

La comprobacion de que todo esta funcionando correctamente es al ejecutar el comando "truffle test" para hacer uso del archivo "crowd_funding_test.js" nos debera mostrar en consola que paso de manera exitosa como se ve a continuacion.

![](img/truffle10.png)