import React from 'react';
import firebase from './firebase';

export const OppskriftInput = ({oppskrift}) => {
    const[name, setName] = React.useState(oppskrift.name)
    
    const onUpdate =()=>{
        const db = firebase.firestore()
        db.collection("oppskrifter").doc(oppskrift.id).set({...oppskrift, name});
    }

    const onDelete =()=>{
        const db = firebase.firestore()
        db.collection('oppskrifter').doc(oppskrift.id).delete()
    }


    return (
      <div>
        <input 
            value={name} 
            onChange={(e) => {setName(e.target.value);
            }}
        />
        <button onClick={onUpdate}>Oppdater</button>
        <button onClick={onDelete}>Slett</button>
      </div>
    );
}


