// import JokeGenerator from "components/jokeGenerator"
import Weather from "pages/weather"
import GlobalStyles from "./styles/GlobalStyles"
import CatFacts from "components/catFacts"
import { Route, Routes} from 'react-router-dom';
import WeatherHome from "pages/weather/components/home";
import Weathers from "pages/weather/components/weathers";

// import Layout from "components/layout";
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
      <Weather>
        <Routes>
          <Route path="/" element={<WeatherHome />} />
          <Route path="/weathers" element={<Weathers />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Weather>

      {/* <CatFacts /> */}
      {/* <JokeGenerator /> */}
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
