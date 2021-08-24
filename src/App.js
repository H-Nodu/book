import './App.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Header from './components/header';

//クリックハンドラー
const onClickHandler = () => {
  window.alert("clickされた");
};

function App() {
  return (
    <div>

      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>

      <Header/>
      <CircularProgress color="secondary" />
      <Button variant="contained" color="primary" onClick={() => onClickHandler()}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
