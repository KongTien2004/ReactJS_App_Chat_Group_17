import Form from './modules/Form'
import Dashboard from './modules/Dashboard'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './modules/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute auth>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/sign_in"
        element={
          <ProtectedRoute>
            <Form isSignInPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users/sign_up"
        element={
          <ProtectedRoute>
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
