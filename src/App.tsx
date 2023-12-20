import JokeGenerator from "components/jokeGenerator"
import GlobalStyles from "./styles/GlobalStyles"
// import Layout from "components/layout";
// import { Route, Routes} from 'react-router-dom';

// import Home from './pages/home';
// import Users from "pages/users";


// import Homework29 from "./homeworks/homework29"
// import Lesson30 from "lessons/lesson30"
// import Homework31 from "homeworks/homework31"
// import Homework33 from "homeworks/homework33";

function App() {
  return (
    <>
      <GlobalStyles />
      <JokeGenerator />
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="*" element="Page is not found" />
        </Routes>      
      </Layout> */}
      {/* <Homework29/> */}
      {/* <Homework31 /> */}
      {/* <Homework33 /> */}
      {/* <Lesson30 /> */}
    </>
  )
}

export default App
