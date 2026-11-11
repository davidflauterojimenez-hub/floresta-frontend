import { HealthStatus } from '../components/HealthStatus'
import { PhaseBoard } from '../components/PhaseBoard'
import { useHealth } from '../hooks/useHealth'

const LEAF = (
  <svg viewBox="0 0 40 40" role="presentation" aria-hidden="true">
    <path
      d="M33 7C20 8 12 14 10 24c-1 5 3 9 8 8 10-2 16-10 15-25Z"
      fill="currentColor"
      opacity="0.9"
    />
    <path d="M12 32c5-8 11-13 19-17" stroke="#f2f5f0" strokeWidth="1.6" fill="none" />
  </svg>
)

export function HomePage() {
  const { data, loading, error, reload } = useHealth()

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="/">
          {LEAF}
          <span>
            Floresta
            <small>datos del barrio</small>
          </span>
        </a>
        <span className="pill">Fase 0 · Base técnica</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">La Floresta · Kennedy · Bogotá D.C.</p>
          <h1>Una base clara para los datos del barrio.</h1>
          <p className="lede">
            Aplicación de gestión territorial con React, FastAPI y PostGIS. Esta fase
            conecta el frontend con la API y comprueba el estado de la base de datos
            espacial.
          </p>
        </section>

        <HealthStatus data={data} loading={loading} error={error} onRetry={reload} />
        <PhaseBoard />
      </main>

      <footer>
        <p>
          Fuentes previstas: Datos Abiertos Bogotá, Mapas Bogotá e IDECA. Los
          registros de ejemplo se marcarán como SEMILLA_DE_PRUEBA y no se
          presentarán como datos oficiales.
        </p>
      </footer>
    </div>
  )
}
