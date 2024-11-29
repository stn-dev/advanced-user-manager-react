import style from '../src/App.module.css'
import { Tables } from './components/table/Tables'

function App() {

  return (
    <>
      <div className={style.container} >
        <h1>user manager</h1>
        <Tables />
      </div>
    </>
  )
}

export default App
