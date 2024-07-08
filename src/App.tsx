import useRouterElements from './useRouterElements'

function App() {
  const routeElements = useRouterElements()
  return <div className='min-h-screen bg-white '>{routeElements}</div>
}

export default App
