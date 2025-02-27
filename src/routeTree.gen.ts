/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SigninImport } from './routes/signin'
import { Route as MypageImport } from './routes/mypage'
import { Route as LoginImport } from './routes/login'
import { Route as CurationSelectImport } from './routes/curation-select'
import { Route as CurationMapsImport } from './routes/curation-maps'
import { Route as CurationDetailImport } from './routes/curation-detail'
import { Route as CurationCreateImport } from './routes/curation-create'
import { Route as IndexImport } from './routes/index'
import { Route as LoginOauth2CodeImport } from './routes/login/oauth2/code'
import { Route as LoginOauth2CodeGoogleImport } from './routes/login/oauth2/code/google'

// Create/Update Routes

const SigninRoute = SigninImport.update({
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const MypageRoute = MypageImport.update({
  path: '/mypage',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CurationSelectRoute = CurationSelectImport.update({
  path: '/curation-select',
  getParentRoute: () => rootRoute,
} as any)

const CurationMapsRoute = CurationMapsImport.update({
  path: '/curation-maps',
  getParentRoute: () => rootRoute,
} as any)

const CurationDetailRoute = CurationDetailImport.update({
  path: '/curation-detail',
  getParentRoute: () => rootRoute,
} as any)

const CurationCreateRoute = CurationCreateImport.update({
  path: '/curation-create',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LoginOauth2CodeRoute = LoginOauth2CodeImport.update({
  path: '/oauth2/code',
  getParentRoute: () => LoginRoute,
} as any)

const LoginOauth2CodeGoogleRoute = LoginOauth2CodeGoogleImport.update({
  path: '/google',
  getParentRoute: () => LoginOauth2CodeRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/curation-create': {
      id: '/curation-create'
      path: '/curation-create'
      fullPath: '/curation-create'
      preLoaderRoute: typeof CurationCreateImport
      parentRoute: typeof rootRoute
    }
    '/curation-detail': {
      id: '/curation-detail'
      path: '/curation-detail'
      fullPath: '/curation-detail'
      preLoaderRoute: typeof CurationDetailImport
      parentRoute: typeof rootRoute
    }
    '/curation-maps': {
      id: '/curation-maps'
      path: '/curation-maps'
      fullPath: '/curation-maps'
      preLoaderRoute: typeof CurationMapsImport
      parentRoute: typeof rootRoute
    }
    '/curation-select': {
      id: '/curation-select'
      path: '/curation-select'
      fullPath: '/curation-select'
      preLoaderRoute: typeof CurationSelectImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/mypage': {
      id: '/mypage'
      path: '/mypage'
      fullPath: '/mypage'
      preLoaderRoute: typeof MypageImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/login/oauth2/code': {
      id: '/login/oauth2/code'
      path: '/oauth2/code'
      fullPath: '/login/oauth2/code'
      preLoaderRoute: typeof LoginOauth2CodeImport
      parentRoute: typeof LoginImport
    }
    '/login/oauth2/code/google': {
      id: '/login/oauth2/code/google'
      path: '/google'
      fullPath: '/login/oauth2/code/google'
      preLoaderRoute: typeof LoginOauth2CodeGoogleImport
      parentRoute: typeof LoginOauth2CodeImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  CurationCreateRoute,
  CurationDetailRoute,
  CurationMapsRoute,
  CurationSelectRoute,
  LoginRoute: LoginRoute.addChildren({
    LoginOauth2CodeRoute: LoginOauth2CodeRoute.addChildren({
      LoginOauth2CodeGoogleRoute,
    }),
  }),
  MypageRoute,
  SigninRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/curation-create",
        "/curation-detail",
        "/curation-maps",
        "/curation-select",
        "/login",
        "/mypage",
        "/signin"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/curation-create": {
      "filePath": "curation-create.tsx"
    },
    "/curation-detail": {
      "filePath": "curation-detail.tsx"
    },
    "/curation-maps": {
      "filePath": "curation-maps.tsx"
    },
    "/curation-select": {
      "filePath": "curation-select.tsx"
    },
    "/login": {
      "filePath": "login.tsx",
      "children": [
        "/login/oauth2/code"
      ]
    },
    "/mypage": {
      "filePath": "mypage.tsx"
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/login/oauth2/code": {
      "filePath": "login/oauth2/code.tsx",
      "parent": "/login",
      "children": [
        "/login/oauth2/code/google"
      ]
    },
    "/login/oauth2/code/google": {
      "filePath": "login/oauth2/code/google.tsx",
      "parent": "/login/oauth2/code"
    }
  }
}
ROUTE_MANIFEST_END */
