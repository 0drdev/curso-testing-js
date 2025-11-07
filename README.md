# curso-testing-js

Curso de Introducción al Testing con JavaScript

## Contenido del Curso

### Metodologías

- **TDD (Test Driven Development)**: Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el código (primero los expects).

- **BDD (Behavior Driven Development)**: Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las pruebas.

### AAA "Mantra" para hacer pruebas

- **Arrange (Preparar) | Given (Dado algo)**: Preparar el entorno y datos necesarios para la prueba.
- **Act (Ejecutar) | When (Cuando resolver hipótesis)**: Ejecutar la acción o código que se está probando.
- **Assert (Afirmar) | Then (Entonces)**: Verificar que el resultado cumple con las expectativas.

### Conceptos

- **Falso Positivo**: Cuando una prueba indica un error, pero todo está bien. Por ejemplo, testeando el método suma de 1 + 1 y pongo el expect en 5, es un falso positivo, luego la prueba está mal.

- **Falso Negativo**: Son más comunes, ya que parece que todo está normal, pero no se ha identificado el error. El set de pruebas debería ser más amplio; esto sucede cuando caemos en tan solo probar el Happy Path, probar las condiciones en las que sabemos que el sistema funciona. Por ejemplo, en el SUT de dividir las primeras pruebas salían bien porque no se tomó en cuenta la división entre cero 0, luego se hizo la prueba y el refactor. En caso de falso negativo lo mejor es aplicar TDD.

- **Sistema Legacy**: Son sistemas que te piden agregar pruebas a algo funcional, incluso en paralelo; hay que refactorizar los métodos enormes a pequeños para hacer unit test de pocos a muchos métodos; legacy no lleva una buena arquitectura.

- **Clean Architecture**: Este patrón lleva buenas prácticas desde el principio, cada método está bien dividido y con responsabilidades acertadas, es mucho más fácil de agregar el set de pruebas.

## Demos

El directorio `demos/` contiene ejemplos prácticos de testing en JavaScript con archivos de código y sus correspondientes tests.

### Ejecutar Tests y Cobertura

Para ejecutar los tests, navega al directorio `demos/` y usa:

```bash
pnpm test
```

Para generar un reporte de cobertura de código, que muestra qué porcentaje del código está cubierto por las pruebas:

```bash
pnpm run test:coverage
```

La cobertura de código es una métrica importante que indica qué partes del código han sido ejecutadas durante las pruebas. Ayuda a identificar áreas del código que no están siendo probadas y pueden contener bugs ocultos.
