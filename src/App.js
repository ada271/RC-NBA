import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <Container className="text-center">
      <Header/>
    </Container>
  );
}

export default App;