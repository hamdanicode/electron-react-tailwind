import { Router, Route } from 'electron-router-dom'

// import { MainScreen, AboutScreen, SearchScreen } from './screens'

export function AppRoutes() {
  return (
    <Router
      main_window={
        <>
          <Route path="/" element={<div>Main</div>} />
          <Route path="/search" element={<div>Search</div>} />
        </>
      }
      about={<Route path="/" element={<div>About</div>} />}
    />
  )
}