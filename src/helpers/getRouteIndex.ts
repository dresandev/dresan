import { ROUTES } from '@constants/routes'

export const getRouteIndex = (): number => {
  if (typeof window === 'undefined') return 0

  if (!ROUTES[window.location.pathname]) return 0

  return ROUTES[window.location.pathname].index
}