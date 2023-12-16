import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import App from "./App"


ReactDOM.createRoot(document.getElementById("root")!).render(

  // Provider - это компонент, оборачивающий все приложение, и принимающий в качестве пропсы заранее созданный store т.е. все компоненты в приложении могут иметь доступ к глобальному store. Следовательно, все компоненты имеют воз-ть запрашивать изменения в store (диспачить action) и имеют доступ к изменениям, которые произошли.

  <Provider store={store}>
    <App />
  </Provider>
)
