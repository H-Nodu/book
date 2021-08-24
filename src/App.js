import './App.css';

// 各種インポート
import Button from '@material-ui/core/Button';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import PageRouter from './components/templates/router';

import FullScreenDialog from './components/organisms/full_screen_dialog';

function App() {

  // イベント
  var event = {

    // クリックイベント
    click: function () {
      alert("clickされた");
    }
  };

  return (
    <div>
      <Header />
      <PageRouter />
      <Button variant="contained" color="primary" onClick={event.click}>
        Hello World
      </Button>
      <FullScreenDialog />
      <Footer />
    </div>
  );
}

export default App;
