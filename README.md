# BookSwipe :books:

## Índice

- [Proyecto 📚](#proyecto-)
- [Instalación 🛠️](#instalación-)
  - [Requerimientos](#requerimientos-)
- [Estructura del proyecto](#estructura-del-proyecto-)
- [Tecnologías](#tecnologías-)
- [Uso](#uso-)
- [Contribución 🤝](#contribución-)
- [Autoría 👩‍💻](#desarrolladorx-)
- [Demo](#demo-)

## Proyecto

**BookSwipe** es una aplicación de intercambio de libros inspirada en la funcionalidad del match de otras apps como Tinder. Los usuarios pueden deslizar libros hacia la izquierda o derecha para indicar si están interesados o no. Si dos usuarios coinciden en sus gustos (es decir, ambos han dado like a los libros del otro), pueden iniciar un chat para coordinar el intercambio de libros.

El frontend está desarrollado en React utilizando styled-components, mientras que el backend está construido en Django con Django REST Framework y una base de datos PostgreSQL.


**Funcionalidades**

- Registro y autenticación de usuarios.
- Deslizamiento de libros para mostrar interés o no.
- Sistema de matches basado en los gustos de los usuarios.
- Chat entre usuarios con match para coordinar el intercambio de libros.
- Creación y eliminación de libros desde la página **BookShelf**.
- Visualización de libros en formato de tarjeta.
- Filtros para evitar que los usuarios vean sus propios libros en el swipe.

## Instalación 🛠️

### Requerimientos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Fire-Fairy84/book_swipe_front
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```


## 🧪 Testing


- **Ejecuta los tests unitarios y de integración:**
   ```bash
   npm test
   ```




## Estructura del proyecto

El proyecto sigue una estructura común para aplicaciones Django y React, con una API organizada en diferentes módulos para una gestión eficiente.

### Estructura de carpetas en Backend

```plaintext
/
├── book_swipe
│   ├── books/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   ├── users/
│   │   └── ...
│   ├── matches/
│   │   └── ...
│   ├── utils/
│   │   └── ...
│   ├── manage.py
│   ├── requirements.txt
│   └── README.md
```

### Estructura de carpetas en Frontend

```plaintext
├── bookswipe-frontend
│   ├── components/
│   │   ├── Button/
│   │   ├── BookCard/
│   │   ├── Navbar/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BookShelf.jsx
│   │   └── ...
│   ├── App.js
│   └── ...
```

## Tecnologías

**Backend**

- [Python 3.12](https://www.python.org/)
- [Django 5.1.1](https://www.djangoproject.com/)
- [Django REST Framework 3.15.2](https://www.django-rest-framework.org/)
- [PostgreSQL 15](https://www.postgresql.org/)
- [Pillow 10.0.1](https://python-pillow.org/) para manejo de imágenes
- [Pytest 7.4.2](https://docs.pytest.org/en/stable/)

**Backend** _(https://github.com/Fire-Fairy84/book_swipe_back)_

- [React.js 9.7.4](https://reactjs.org/)
- [Styled-components 6.1.13](https://styled-components.com/)
- [Axios 1.7.7](https://axios-http.com/es/docs/intro)
- [Vitest 0.34.4](https://vitest.dev/)
- [React Tinder Card 1.6.4](https://www.npmjs.com/package/react-tinder-card)

## Uso

Para iniciar la aplicación, asegúrate de que el servidor de backend esté corriendo:

```bash
python manage.py runserver
```

## Contribución 🤝

1. Haz un fork del repositorio.
2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m 'Agrega nueva funcionalidad'
   ```
4. Haz push de tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un pull request.

## Este proyecto ha sido creado por:

- **Esther P. Sarasua**(https://github.com/Fire-Fairy84)

## Demo

A continuación, algunas capturas de la aplicación:

1. Página de inicio.

![Home Page](./images/home.png)

2. Página de perfil.

![Profile Page](./images/profile.png)

3. Swipe de libros.

![Swipe Page](./images/swipe_page.png)

4. Estantería de libros.

![Book Shelf Page](./images/book_shelf.png)

5. Añadir nuevo libro.

![Add Book Page](./images/add_book.png)
