# 3.2.-Landing-Page-Artista-digital

## Tabla de Recursos y Licencias

| Archivo | Autor | Fuente | Licencia |
|----------|----------|----------|----------|
| hero.webp | Auvryon | Pixabay | Licencia Pixabay |
| logo.svg | Creación propia | - | Autoría propia |
| imagen1.webp | Auvryon | Pixabay | Licencia Pixabay |
| imagen2.webp | Auvryon | Pixabay | Licencia Pixabay |
| imagen3.webp | Auvryon | Pixabay | Licencia Pixabay |
| cta.webp | Creación propia (IA) | Generación mediante IA | Autoría propia |


## Justificación Técnica de Formatos

### Hero (hero.webp)

Se ha seleccionado el formato WebP (.webp) para la imagen principal por ser un estándar de nueva generación que ofrece compresión con y sin pérdida en un único formato. Su principal ventaja es que permite un ahorro de peso respecto a formatos tradicionales como JPEG y PNG, manteniendo una calidad perceptual prácticamente idéntica. Además, cuenta con una amplia compatibilidad con los navegadores modernos, por lo que es una opción recomendada para proyectos web en producción. Gracias a estas características, se ha podido cumplir el requisito de mantener la imagen por debajo de 250 KB sin comprometer la calidad visual.

### Logo (logo.svg)

Se ha utilizado el formato SVG (Scalable Vector Graphics) porque es un gráfico vectorial definido mediante fórmulas matemáticas que describen puntos, trazados y áreas de relleno. Su principal ventaja es la escalabilidad infinita sin pérdida de resolución y su reducido peso de archivo para formas simples, por lo que resulta especialmente adecuado para logotipos web.

### CTA Animado (cta.webp)

La animación se ha creado a partir de tres imágenes estáticas con diferentes niveles de iluminación para generar un efecto de brillo progresivo. Posteriormente se han combinado en una animación en bucle y se han exportado en formato WebP animado para mejorar el rendimiento y reducir el tamaño del archivo.

## Herramientas Utilizadas

- Squoosh (para el redimensionado y optimización de imágenes en formato WebP)
- Visual Studio Code
- Pixabay (Para la imagen principal y las 3 imágenes de Galería de Trabajos)
- Gemini (Para crear las imágenes para la animacion del botón "Contacto")
- Ezgif (Para crear a partir de las imágenes una animación Webp)