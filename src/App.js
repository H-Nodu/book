import './App.scss';

// 各種インポート
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import PageRouter from './components/templates/router';

function App() {

  return (
    <div>
      <Header />
      <PageRouter />
      <Footer />
    </div>
  );
}

export default App;
