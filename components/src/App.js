import BlurryLoadableImg from './lib/BlurryLoadableImg/index';

function App() {

  return (
    <div className="App">
      <BlurryLoadableImg 
        url='https://static.wixstatic.com/media/11062b_536b8e53eb3c4dcb9c22d6637f2151eb~mv2.jpg/v1/fit/w_924,h_520/11062b_536b8e53eb3c4dcb9c22d6637f2151eb~mv2.jpg'
        color='aqua'
        title='img title'
        wrapperCustomClassNames={[]} 
        imgCustomClassNames={[]}
      />
    </div>
  );
}

export default App;