import { NewtonsCradle } from '@uiball/loaders'
import '../index.css'

const Loader = () => {
  return (
    <div className="container-loader">
      <NewtonsCradle
        size={100}
        speed={1.4}
        color="#fff"
      />
      <p className='text-loading'>Cargando...</p>
    </div>
  )
}

export default Loader