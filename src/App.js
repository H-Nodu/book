import './App.css';

import Button from '@material-ui/core/Button';
import Header from './components/header';

//クリックハンドラー
const onClickHandler = () => {
  window.alert("clickされた");
};

function App() {
  return (
    <div>
      <Header/>
      <Button variant="contained" color="primary" onClick={() => onClickHandler()}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
