export const ROUTE_INDEXES = {
  HOME: 0,
  ABOUT_ME: 1,
  TECHNOLOGIES: 2,
  CONTACT: 3,
}

export interface Route {
  path: string;
  index: number;
}

export interface Routes {
  [key: string]: Route;
}

export const ROUTES: Routes = {
  '/': {
    path: '/',
    index: ROUTE_INDEXES.HOME,
  },
  '/sobre-mi': {
    path: '/sobre-mi',
    index: ROUTE_INDEXES.ABOUT_ME,
  },
  '/tecnologias': {
    path: '/tecnologias',
    index: ROUTE_INDEXES.TECHNOLOGIES,
  },
  '/contacto': {
    path: '/contacto',
    index: ROUTE_INDEXES.CONTACT,
  },
}