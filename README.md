# Libres Para Prosperar — Instalación rápida

Incluye:
- `index.html` — Landing + bloque de **lista de espera** (PipelinePro: HkKK9MwaPAwqPRE7s1G1)
- `talleres.html` — Resumen + botón **Entrar al Taller**
- `taller-acceso.html` — **Formulario PipelinePro** para gatear el acceso (Hv49mCWtpSgYqiam4Jwy)
- `taller-completo.html` — Taller interactivo (inputs bonitos, guardado local, PDF, email)
- `privacidad.html` — Política de Privacidad
- `styles.css` — Estilos del sitio
- `.htaccess` — Fuerza `index.html` como documento por defecto (para Apache/cPanel)

## Publicación rápida
1. Sube **todo** el contenido del ZIP a la raíz de tu hosting.
2. Si usas Apache/cPanel, deja el archivo `.htaccess` tal cual (asegura que cargue el landing).
3. En PipelinePro, configura la **redirección post‑submit** del formulario de acceso a:
   - `/taller-completo.html` (o `https://tudominio.com/taller-completo.html`)

## Sugerencias
- Si usas Netlify/Vercel/GitHub Pages, no necesitas `.htaccess`. Asegúrate de no tener redirecciones hacia `/taller-completo.html`.
