const MODULES = [
  { id: 1, title: 'Centros educativos', detail: 'Puntos de colegios y jardines dentro del barrio', phase: 'Fase 2' },
  { id: 2, title: 'Polígono del barrio', detail: 'Límite geográfico y validación espacial', phase: 'Fase 1' },
  { id: 3, title: 'Centros de policía (CAI)', detail: 'Ubicación de los CAI que atienden el sector', phase: 'Fase 3' },
  { id: 4, title: 'Datos sobre robos', detail: 'Registros delictivos georreferenciados', phase: 'Fase 4' },
  { id: 5, title: 'Datos de la localidad', detail: 'Contexto de Kennedy: población y territorio', phase: 'Fase 5' },
  { id: 6, title: 'Datos catastrales', detail: 'Predios y fichas catastrales de Mapas Bogotá', phase: 'Fase 6' },
  { id: 7, title: 'Sistema de transporte', detail: 'Rutas, paradas y estaciones del barrio', phase: 'Fase 7' },
]

export function PhaseBoard() {
  return (
    <section className="modules">
      <div className="section-head">
        <p className="eyebrow">Hoja de ruta</p>
        <h2>Siete módulos CRUD</h2>
        <p>La Fase 0 deja lista la base técnica; los módulos se construyen uno a uno.</p>
      </div>

      <ul className="module-grid">
        {MODULES.map((module) => (
          <li key={module.id} className="module-card">
            <span className="module-card__id">{String(module.id).padStart(2, '0')}</span>
            <div>
              <h3>{module.title}</h3>
              <p>{module.detail}</p>
              <span className="tag">{module.phase} · Pendiente</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
