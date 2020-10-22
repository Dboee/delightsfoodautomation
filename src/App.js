import React from 'react';
import './App.css';
import firebase from './firebase';
import {OppskriftInput} from './oppskrift-input.component';

function App() {
  
  const [oppskrifter, setOppskrifter] = React.useState([]);
  const [newOppskriftName, setNewOppskriftName] = React.useState();

  
  React.useEffect(() => {
    const fetchData =  async () => {
      const db = firebase.firestore()
      const data = await db.collection("oppskrifter").get()
      setOppskrifter(data.docs.map(doc => ({...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])
  
  
  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("oppskrifter").add({name:newOppskriftName})
  }


  return (
    <ul>
    <input value={newOppskriftName} onChange={e => setNewOppskriftName(e.target.value)} />
    <button onClick={onCreate}>Legg til</button>
      {oppskrifter.map(oppskrift => (
        <li key={oppskrift.name}>
          <OppskriftInput oppskrift={oppskrift}/>
        </li>
      ))}
    </ul>
  );
}

export default App;
