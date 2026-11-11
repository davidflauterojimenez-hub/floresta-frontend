import { useEffect, useState } from 'react'
import { fetchHealth } from '../services/healthService'
import type { HealthResponse } from '../types/health'

interface HealthState {
  data: HealthResponse | null
  loading: boolean
  error: string | null
}

const INITIAL_STATE: HealthState = { data: null, loading: true, error: null }

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : 'Error desconocido'
}

export function useHealth() {
  const [state, setState] = useState<HealthState>(INITIAL_STATE)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    fetchHealth(controller.signal)
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((error: unknown) => {
        if (controller.signal.aborted) return
        setState({ data: null, loading: false, error: describeError(error) })
      })
    return () => controller.abort()
  }, [attempt])

  const reload = () => {
    setState((current) => ({ ...current, loading: true, error: null }))
    setAttempt((current) => current + 1)
  }

  return { ...state, reload }
}
