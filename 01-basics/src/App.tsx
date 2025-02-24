// import { BasicFunctions } from './typescript/BasicFunctions'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'
// import { Counter } from './components/Counter';

import { AuthProvider } from "./context/AuthContext"
// import { LoginPage } from './components/LoginPage';
// import { UsersPage } from './components/UsersPage';
import { FormsPage } from './components/FormsPage';

function App() {
  return (

    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
        <h1 className="text-4xl mb-5">React + TS</h1>

        {/* {<ObjectLiterals/>} */}
        {/* {<BasicTypes/>} */}
        {/* {<BasicFunctions/>} */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App