# 3.2.-Landing-Page-Artista-digital

## Tabla de Recursos y Licencias

| Archivo | Autor | Fuente | Licencia |
|----------|----------|----------|----------|
| hero.webp | Auvryon | Pixabay | Licencia Pixabay |
| logo.svg | Creación propia | - | Autoría propia |
| imagen1.webp | Auvryon | Pixabay | Licencia Pixabay |
| imagen2.webp | Auvryon | Pixabay | Licencia Pixabay || audio.mp3 | BusinessStar | Pixabay | Licencia Pixabay |
| imagen3.webp | Auvryon | Pixabay | Licencia Pixabay |
| cta.webp | Creación propia (IA) | Generación mediante IA | Autoría propia |
| cta.webp | Creación propia (IA) | Generación mediante IA | Autoría propia |
| presentacion.mp4 | olenchic | Pixabay | Licencia Pixabay |
| poster.webp | Extraído de presentacion.mp4 | Creación propia | Autoría propia |
| audio.mp3 | BusinessStar | Pixabay | Licencia Pixabay |



## Justificación Técnica de Formatos

### Hero (hero.webp)

Se ha seleccionado el formato WebP (.webp) para la imagen principal por ser un estándar de nueva generación que ofrece compresión con y sin pérdida en un único formato. Su principal ventaja es que permite un ahorro de peso respecto a formatos tradicionales como JPEG y PNG, manteniendo una calidad perceptual prácticamente idéntica. Además, cuenta con una amplia compatibilidad con los navegadores modernos, por lo que es una opción recomendada para proyectos web en producción. Gracias a estas características, se ha podido cumplir el requisito de mantener la imagen por debajo de 250 KB sin comprometer la calidad visual.

### Logo (logo.svg)

Se ha utilizado el formato SVG (Scalable Vector Graphics) porque es un gráfico vectorial definido mediante fórmulas matemáticas que describen puntos, trazados y áreas de relleno. Su principal ventaja es la escalabilidad infinita sin pérdida de resolución y su reducido peso de archivo para formas simples, por lo que resulta especialmente adecuado para logotipos web.

### CTA Animado (cta.webp)

La animación se ha creado a partir de tres imágenes estáticas con diferentes niveles de iluminación para generar un efecto de brillo progresivo. Posteriormente se han combinado en una animación en bucle y se han exportado en formato WebP animado para mejorar el rendimiento y reducir el tamaño del archivo.

### Vídeo (presentacion.mp4)

Se ha utilizado el formato MP4 junto al códec H.264 por ofrecer un balance óptimo entre calidad y compresión. Es uno de los formatos de distribución multimedia más habituales y cuenta con una compatibilidad prácticamente universal en navegadores y dispositivos modernos. Además, se ha optimizado para reducir su peso y mejorar el rendimiento de la página web.

### Poster (poster.webp)

La imagen de precarga se ha obtenido a partir de un fotograma del vídeo y se ha exportado en formato WebP para reducir su tamaño y mejorar el rendimiento de la página.

### Audio Ambiental (audio.mp3)

Se ha utilizado el formato MP3 por ser un formato de compresión con pérdida y compatibilidad universal. Ofrece un balance óptimo entre calidad y tamaño de archivo, siendo uno de los formatos de distribución más habituales y compatible con el 100% de los navegadores y dispositivos modernos. El audio se ha recortado a 15 segundos y se le han aplicado efectos de Fade In y Fade Out para mejorar la experiencia de reproducción.



## Herramientas Utilizadas

- Squoosh para el redimensionado y optimización de imágenes en formato WebP
- Visual Studio Code
- Pixabay para la imagen principal y las 3 imágenes de Galería de Trabajos
- Gemini para crear las imágenes para la animacion del botón "Contacto"
- Ezgif para crear a partir de las imágenes una animación Webp
- FreeConvert para la compresión y optimización del vídeo
- Online MP3 Cutter para el recorte del audio a una duración exacta de 15 segundos.
- Online Audio Converter para la conversión y exportación del audio en formato MP3.