import { getApiUrl } from '../services/healthService'
import type { HealthResponse } from '../types/health'

interface HealthStatusProps {
  data: HealthResponse | null
  loading: boolean
  error: string | null
  onRetry: () => void
}

function describe(
  data: HealthResponse | null,
  loading: boolean,
  error: string | null,
): string {
  if (loading) return 'Comprobando el estado del sistema…'
  if (error) return 'Sin conexión con la API'
  if (!data) return 'Sin datos de estado'
  return data.status === 'ok'
    ? 'API y PostGIS operativos'
    : 'API activa, PostGIS no disponible'
}

export function HealthStatus({ data, loading, error, onRetry }: HealthStatusProps) {
  const tone = loading ? 'pending' : error || data?.status === 'degraded' ? 'warn' : 'ok'

  return (
    <section className={`health health--${tone}`} aria-live="polite">
      <div className="health__head">
        <div>
          <p className="eyebrow">Estado del sistema</p>
          <h2>{describe(data, loading, error)}</h2>
        </div>
        <span className={`dot dot--${tone}`} aria-hidden="true" />
      </div>

      <dl className="health__grid">
        <div>
          <dt>API</dt>
          <dd>{getApiUrl()}</dd>
        </div>
        <div>
          <dt>Base de datos</dt>
          <dd>{data ? data.database : '—'}</dd>
        </div>
        <div>
          <dt>Versión</dt>
          <dd>{data ? data.version : '—'}</dd>
        </div>
      </dl>

      {error ? <p className="health__error">{error}</p> : null}

      <button type="button" className="button" onClick={onRetry} disabled={loading}>
        {loading ? 'Comprobando…' : 'Volver a comprobar'}
      </button>
    </section>
  )
}
