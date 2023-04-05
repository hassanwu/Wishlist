import './App.css';
import AddItem from './components/AddItem';
import List from './components/List';

import { useState } from 'react';
 
function App() { 

  const[Items, setItems] = useState([]);

  return (
    <>
      <section>
        <div className='subsection'>
          <h1 style={{fontFamily: 'MuseoModerno', textAlign: 'center'}}>WISHLIST</h1>
          <AddItem setitems={setItems} items={Items}/>
          <List setitems={setItems} items={Items}/>
        </div>
      </section>

    </>
  );
}

export default App;
