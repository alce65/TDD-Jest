# Desarrollo con TDD para React y Angular

## DESCRIPCIÓN

En este curso se enseñará a desarrollar aplicaciones con React y Angular siguiendo la metodología Test-Driven Development (TDD). Se abordará cómo escribir pruebas antes de desarrollar el código, garantizando implementaciones más robustas, mantenibles y adaptables. Utilizando herramientas como Jest y Testing Library, se dominará el ciclo del TDD, aplicando buenas prácticas en la construcción de componentes, lógica de negocio y pruebas de integración.

El curso está diseñado con un enfoque práctico, permitiendo trabajar en proyectos reales y desarrollar funcionalidades completas mientras se refuerzan las habilidades en pruebas unitarias y refactorización. Al finalizar, se dispondrá de las herramientas necesarias para implementar TDD en proyectos empresariales, mejorando la calidad del código y la productividad del equipo.

## OBJETIVOS

- Comprender los principios fundamentales de la metodología TDD y sus beneficios.
- Configurar entornos de pruebas con Jest y Testing Library para proyectos de React y Angular.
- Aplicar el ciclo básico de TDD (Red, Verde, Refactor) para el desarrollo de lógica de negocio y componentes.
- Escribir pruebas unitarias y de integración centradas en la experiencia del usuario.
- Realizar pruebas efectivas para aplicaciones con lógica de estado y servicios externos.
- Refactorizar código de manera segura y continua, siguiendo los principios de TDD.
- Incorporar buenas prácticas de TDD en el desarrollo de aplicaciones web modernas.

## DURACIÓN

30 horas

## REQUISITOS DE LOS ASISTENTES

- Experiencia en desarrollo de aplicaciones usando Angular y React.
- Conocimientos básicos de JavaScript y manejo de su entorno de desarrollo.
- Familiaridad con conceptos de pruebas de software.

## CONTENIDOS

### INTRODUCCIÓN AL TDD

- Conceptos básicos del Test-Driven Development (TDD).
- Ciclo TDD: Escribir un test que falle, implementar el código mínimo, refactorizar.
- Beneficios del TDD en proyectos modernos.
- Comparativa con metodologías tradicionales.

### HERRAMIENTAS IMPRESCINDIBLES PARA TDD

- Jest
  - Instalación y configuración inicial para React y Angular.
  - Estructura básica de un test en Jest.
  - Ejecución y reporte de pruebas.
- Testing Library
  - Introducción a React Testing Library y Angular Testing Library.
  - Testing centrado en la experiencia del usuario.
  - Instalación y configuración básica.

## ESCRIBIENDO EL PRIMER TEST CON JEST

- Configuración inicial en React y Angular.
- Escribir tests básicos para funciones puras y lógica de negocio.
- Ejemplo práctico: Validaciones simples de datos.

## TESTING DE COMPONENTES CON TESTING LIBRARY

- Principios de pruebas basadas en el DOM.
- Testing de renderizado y props en React y Angular.
- Interacción con eventos del usuario (clics, cambios, etc.).
- Ejemplo práctico: Componente de formulario básico.

## MOCKING Y SIMULACIONES

- Uso de mocks en Jest para simular dependencias:
  - Servicios y módulos en React y Angular.
- Pruebas de interacciones con APIs o servicios externos.
- Ejemplo práctico: Mocking de un servicio REST.
  TDD EN APLICACIONES MÁS COMPLEJAS
- Escribir tests para lógica de estado:
  - Redux en React.
  - NgRx en Angular.
- Pruebas de integración entre componentes y servicios.
- Ejemplo práctico: Gestión de un carrito de compras.

## REFACTORIZACIÓN IMPULSADA POR TDD

- Mejora continua del código durante el ciclo TDD.
- Aplicación de principios SOLID en React y Angular.
- Ejemplo práctico: Refactorización de un componente con lógica compleja.
  CASOS PRÁCTICOS Y PROYECTO FINAL
- Desarrollo de una funcionalidad completa aplicando TDD:
  - Ejemplo en React: Componente de búsqueda con API.
  - Ejemplo en Angular: Gestión de listas dinámicas.
- Revisión de buenas prácticas y discusión de resultados.

## Desarrollo del curso

### Día 1 (M 22/04)

- INTRODUCCIÓN: Tests unitarios y TDD
  - Conceptos básicos del Test-Driven Development (TDD).
  - Ciclo TDD: Escribir un test que falle, implementar el código mínimo, refactorizar.
  - Beneficios del TDD en proyectos modernos.
  - Comparativa con metodologías tradicionales.
- HERRAMIENTAS IMPRESCINDIBLES PARA TDD
  - Jest
    - Instalación y configuración inicial para React y Angular.
    - Estructura básica de un test en Jest.
    - Ejecución y reporte de pruebas.
    - Configuración inicial en React y Angular.

### Día 2 (X 23/04)

- Escribir tests básicos para funciones puras

  - Refactorización de los tests
  - Refactorización del código: reducción de la complejidad ciclomática

- MOCKING Y SIMULACIONES

  - Uso de mocks en Jest para simular dependencias:
    - Servicios y módulos en React y Angular.
  - Pruebas de interacciones con APIs o servicios externos.
  - Ejemplo práctico: Mocking de un servicio REST.

- Lógica de negocio: servicios en React
  - Mocking de módulos y funciones globales (fetch).
  - Ejemplo práctico: Mocking de un servicio REST.

### Dia 3 (L 28/04) // Clase suspendida por motivos técnicos

### Día 3 (M 29/04)

- Lógica de negocio: servicios en React (continuación)
  - Mocking de módulos y funciones globales (fetch)
  - Ejemplo práctico: Mocking de un servicio REST
    - método gatWithAxios: mockear el módulo axios
    - método getUser (with fetch): mockear el módulo fetch
    - gestión de errores unificada: clase HttpError
    - método createUser (with fetch): aplicar TDD
- Servicios en Angular
  - Inyección de dependencias y entorno de testing.
  - Ejemplo práctico: Storage Service y LocalStorage (1).

### Día 4 (X 30/04)

- Servicios en Angular (continuación)
  - Ejemplo práctico: Storage Service y LocalStorage (2).
- Dependencias entre servicios
  - Ejemplo práctico: State Service y Storage Service.

### Día 5 (L 05/05)

- Servicios en Angular (continuación)

  - Ejemplo práctico: Repo Service y HTTP Client.
    - Uso de environment variables en Angular (Problema con jest)
    - HTTP Client Mocking

- Testing Library

  - Introducción a React Testing Library y Angular Testing Tools.
  - Testing centrado en la experiencia del usuario.
  - Instalación y configuración básica.
  - Ejemplo práctico: jsdom y testing library en Vanilla JS.

- TESTING DE COMPONENTES CON TESTING LIBRARY

  - Principios de pruebas basadas en el DOM.
  - Testing de renderizado y props en React.

### Día 6 (M 06/05)

- TESTING DE COMPONENTES CON TESTING LIBRARY (continuación)

  - Interacción con eventos del usuario (clics, cambios, etc.).
  - Ejemplo práctico: Componente de formulario básico.

- TESTING DE COMPONENTES EN ANGULAR
  - Testing de componentes en Angular.
  - Testing de formularios en Angular.
  - Ejemplo práctico: Componente de formulario básico.
