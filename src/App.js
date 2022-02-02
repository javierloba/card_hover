import './App.css';
import image from './img/pepsi.png';

function App() {
  return (
    <div className='card'>
      <div className='circle'></div>
      <div className='content'>
        <h2>Pepsi Cola</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis augue nulla, pulvinar ac eros in, efficitur pulvinar nisi.</p>
        <a href='#'>Buy Now</a>
      </div>
      <img src={image} />
    </div>
  );
}

export default App;
