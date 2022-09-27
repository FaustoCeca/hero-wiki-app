import { AuthProvider } from "./auth/context"
import AppRouter from "./router/AppRouter"

const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default HeroesApp