import "./App.css";
import { Layout } from "./layout/Layout";
import { FeedPage } from "./pages/FeedPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
      <Layout>
        <SignUpPage/>
      </Layout>
  );
}

export default App;
