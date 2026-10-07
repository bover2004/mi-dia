# Mi Día: cómo publicarla e instalarla en el iPhone

Tiempo total: unos 15 minutos. Coste: 0 €.

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera: el diseño (CSS), la estructura (HTML) y la lógica (JavaScript). |
| `manifest.webmanifest` | La "ficha" de la app: nombre, icono y que se abra a pantalla completa. Es lo que hace que el iPhone la trate como una app. |
| `sw.js` | El *service worker*: guarda la app en el iPhone para que abra sin internet. |
| `icons/` | Los iconos de la pantalla de inicio. |

## Paso 1: crear una cuenta en GitHub

1. Entra en https://github.com y pulsa **Sign up**.
2. Elige bien tu **nombre de usuario**: formará parte de la dirección de tu app (`https://TUUSUARIO.github.io/mi-dia/`).

## Paso 2: crear el repositorio

Un repositorio es una carpeta en GitHub donde viven los archivos de tu proyecto.

1. Arriba a la derecha, pulsa **+** y luego **New repository**.
2. En **Repository name** escribe `mi-dia`.
3. Déjalo en **Public**. GitHub Pages gratis necesita que sea público. El código se verá, pero tus datos no, porque se guardan solo en tu iPhone.
4. Pulsa **Create repository**.

## Paso 3: subir los archivos

1. En la página del repositorio, pulsa **uploading an existing file** (o **Add file → Upload files**).
2. Descomprime el zip y arrastra **el contenido** de la carpeta `mi-dia`: `index.html`, `manifest.webmanifest`, `sw.js`, `GUIA.md` y la carpeta `icons` entera. No arrastres la carpeta `mi-dia` en sí.
3. Abajo, pulsa **Commit changes**. Un *commit* es guardar una versión del proyecto.

Comprueba que `index.html` aparece en la lista principal del repositorio, y no dentro de otra carpeta.

## Paso 4: activar GitHub Pages

1. En el repositorio, ve a **Settings**.
2. En el menú de la izquierda, entra en **Pages**.
3. En **Source** elige **Deploy from a branch**.
4. En **Branch** elige `main` y la carpeta `/ (root)`, y pulsa **Save**.
5. Espera 1 o 2 minutos y recarga la página. Arriba aparecerá: *Your site is live at https://TUUSUARIO.github.io/mi-dia/*

## Paso 5: instalarla en el iPhone

1. Abre esa dirección en **Safari**. Tiene que ser Safari; desde otros navegadores el iPhone no siempre deja instalarla.
2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Baja y toca **Añadir a pantalla de inicio**.
4. Confirma el nombre "Mi Día" y toca **Añadir**.

Ya tienes el icono. Se abre a pantalla completa, sin barra de Safari, y funciona sin internet.

## Cómo usar el reporte semanal

En la pestaña **Semana**, pulsa **Copiar semana para Claude**. Abre la app de Claude, pega y envía. Claude te devolverá qué ha ido bien, qué mejorar y un objetivo para la próxima semana.

## Tus datos

- Se guardan **solo en tu iPhone**, dentro de la app instalada. No se suben a ningún sitio.
- Si borras la app de la pantalla de inicio, **se borran los datos**.
- La app abierta en Safari y la app instalada tienen datos **separados**. Usa siempre la del icono.
- En **Semana → Copia de seguridad**, pulsa **Exportar copia** de vez en cuando y guárdala en Archivos o iCloud. Con **Importar copia** la recuperas.

## Cómo hacer cambios en la app

1. Edita `index.html` (puedes hacerlo directamente en GitHub: abre el archivo y pulsa el lápiz).
2. Abre `sw.js` y cambia `mi-dia-v1` por `mi-dia-v2` (y así cada vez). Así el iPhone sabe que hay versión nueva.
3. Pulsa **Commit changes**. En 1 o 2 minutos estará publicado.
4. En el iPhone, cierra la app del todo y ábrela otra vez (a veces hay que hacerlo dos veces).

## Si algo falla

- **Sale un error 404**: espera un par de minutos más, o revisa que `index.html` está en la raíz del repositorio y no dentro de otra carpeta.
- **El icono sale como una captura de la web**: falta la carpeta `icons` o no está en la raíz. Súbela, borra el icono del iPhone y vuelve a añadirlo.
- **No veo los cambios nuevos**: ¿has subido el número de versión en `sw.js`? Cierra y abre la app dos veces.
