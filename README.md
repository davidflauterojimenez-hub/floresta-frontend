# Floresta Frontend

Interfaz web para gestionar los datos del barrio **La Floresta**, localidad de
**Kennedy**, Bogotá D.C. Construida con **React 19**, **TypeScript** y **Vite**.

> **Estado:** Fase 0 completada (proyecto base que consume `/health`).
> Los módulos CRUD y el mapa se agregan en las fases 1 a 7.

## Requisitos

- Node.js 20+ (probado con Node 24)
- npm
- El backend `floresta-backend` corriendo en `http://localhost:8000`

## Puesta en marcha

1. Instala dependencias:

   ```powershell
   npm install
   ```

2. Copia las variables de entorno (opcional, hay valores por defecto):

   ```powershell
   Copy-Item .env.example .env
   ```

3. Arranca el servidor de desarrollo:

   ```powershell
   npm run dev
   ```

4. Abre <http://localhost:5173>. La tarjeta **Estado del sistema** consulta
   `GET /health` del backend y muestra la conectividad con PostGIS.

## Scripts

| Comando           | Descripción                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Servidor de desarrollo con HMR       |
| `npm run build`   | Verificación TypeScript y build      |
| `npm run preview` | Sirve el build de producción         |
| `npm run lint`    | Análisis estático con oxlint         |

## Estructura

```
src/
  components/   componentes presentacionales (un componente por archivo)
  pages/        páginas de la aplicación
  services/     llamadas a la API (sin lógica de UI)
  hooks/        estado y efectos reutilizables
  types/        contratos TypeScript
  styles/       hojas de estilo por dominio (cada archivo < 100 líneas)
```

Principios aplicados: cada componente tiene una sola responsabilidad, la
página compone componentes, el hook encapsula el ciclo de vida de la petición y
el servicio concentra el acceso HTTP (bajo acoplamiento, fácil de sustituir).

## Variables de entorno

| Variable       | Valor por defecto         | Uso                    |
| -------------- | ------------------------- | ---------------------- |
| `VITE_API_URL` | `http://localhost:8000`   | URL base de la API     |

CORS ya está habilitado en el backend para `http://localhost:5173`.

## Fuentes de datos previstas

- Datos Abiertos Bogotá: <https://datosabiertos.bogota.gov.co>
- Mapas Bogotá: <https://mapas.bogota.gov.co>
- IDECA: <https://www.ideca.gov.co>

Los datos de ejemplo se marcarán como `SEMILLA_DE_PRUEBA`.

## Licencia

MIT. Ver [LICENSE](LICENSE).
