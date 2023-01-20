import { AuthProvider, MeterProvider } from "./context"
import { AppRouter } from "./routers"

const App = () => {
  return (
    <>
      <AuthProvider>
        <MeterProvider>
          <AppRouter />
        </MeterProvider>
      </AuthProvider>
    </>
  )
}

export default App