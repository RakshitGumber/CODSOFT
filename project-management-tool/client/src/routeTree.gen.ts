/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HowImport } from './routes/how'
import { Route as CoffeeImport } from './routes/coffee'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create/Update Routes

const HowRoute = HowImport.update({
  id: '/how',
  path: '/how',
  getParentRoute: () => rootRoute,
} as any)

const CoffeeRoute = CoffeeImport.update({
  id: '/coffee',
  path: '/coffee',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/coffee': {
      id: '/coffee'
      path: '/coffee'
      fullPath: '/coffee'
      preLoaderRoute: typeof CoffeeImport
      parentRoute: typeof rootRoute
    }
    '/how': {
      id: '/how'
      path: '/how'
      fullPath: '/how'
      preLoaderRoute: typeof HowImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/coffee': typeof CoffeeRoute
  '/how': typeof HowRoute
  '/auth/login': typeof AuthLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/coffee': typeof CoffeeRoute
  '/how': typeof HowRoute
  '/auth/login': typeof AuthLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/coffee': typeof CoffeeRoute
  '/how': typeof HowRoute
  '/auth/login': typeof AuthLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/coffee' | '/how' | '/auth/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/coffee' | '/how' | '/auth/login'
  id: '__root__' | '/' | '/about' | '/coffee' | '/how' | '/auth/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CoffeeRoute: typeof CoffeeRoute
  HowRoute: typeof HowRoute
  AuthLoginRoute: typeof AuthLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CoffeeRoute: CoffeeRoute,
  HowRoute: HowRoute,
  AuthLoginRoute: AuthLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/coffee",
        "/how",
        "/auth/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/coffee": {
      "filePath": "coffee.tsx"
    },
    "/how": {
      "filePath": "how.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
