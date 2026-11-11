import type { HealthResponse } from '../types/health'

const API_URL = (import.meta.env.VITE_API_URL ?? 'http://localhost:8000').replace(
  /\/$/,
  '',
)

export function getApiUrl(): string {
  return API_URL
}

export async function fetchHealth(signal?: AbortSignal): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`, {
    signal,
    headers: { Accept: 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`La API respondió con estado ${response.status}`)
  }

  return (await response.json()) as HealthResponse
}
