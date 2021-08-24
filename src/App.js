import './App.css';

// 各種インポート
import Button from '@material-ui/core/Button';
import Header from './components/organisms/header';
import PageRouter from './components/templates/router';

function App() {

  // イベント
  var event = {
    
    // クリックイベント
    click: function(){
      alert("clickされた");
    }
  };

  return (
    <div>
      <PageRouter/>
      <Header/>
      <Button variant="contained" color="primary" onClick={event.click}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
