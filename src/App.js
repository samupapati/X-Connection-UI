import Navbar from "./components/Navbar"
import Activies from "./components/Activies";
import Groups from "./components/Groups";
import Profile from "./components/profile/Profile";
import Chat from "./components/Chat";
import { styled } from "styled-components";

const Content = styled.div`
    position: relative;
    @media all and (min-width: 1132px){
    display: grid;
    justify-items: center;
    justify-content: center;
    padding-top: 16px;
    width: 100vw;
    grid-template-columns: 242px 1fr;
  }
  @media all and (min-width: 1420px){
    grid-template-columns: 242px 1fr 317px;
  }
`

const LeftBoxes = styled.div`
    position: fixed;
    left: 16px;
`

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content>
          <LeftBoxes>
              <Activies/>
              <Groups/>
          </LeftBoxes>
          <Profile/>
          <Chat/>
      </Content>
    </div>
  );
}

export default App;
