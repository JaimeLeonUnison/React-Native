// import { BasicFunctions } from './typescript/BasicFunctions'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'
// import { Counter } from './components/Counter';

import { AuthProvider } from "./context/AuthContext"
import { LoginPage } from './components/LoginPage';

function App() {
  return (

    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>

        {/* {<ObjectLiterals/>} */}
        {/* {<BasicTypes/>} */}
        {/* {<BasicFunctions/>} */}
        {/* <Counter /> */}
        <LoginPage />
      </div>
    </AuthProvider>
  )
}

export default App