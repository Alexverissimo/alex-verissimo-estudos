import {useState,useEffect} from 'react'
import piadasData from "../piadas.json"
function Piadas() {
    const[piadas,setPiadas] = useState([]);
    const[newJoke,setNewJoke] = useState('');
    const[newResponse,setNewResponse] = useState('');
    const [showResponse, setShowResponse] = useState({});
    useEffect(()=>{
        setPiadas(piadasData.slice(0,10));
    },[])

    const handleSUbmit = (e)=>{
        e.preventDefault();
        if(piadas.length >= 10) {
            alert('Apague uma piada');
        }
        else if (newJoke.trim() && newResponse.trim()) {
            setPiadas([...piadas,{id:'10',joke:newJoke,response:newResponse}]);
            setNewJoke('');
            setNewResponse('');
        }
    };
    const handleDeleteJoker = (index) =>{
         setPiadas(piadas.filter((_, i) => i !== index));
    };
    const toggleResponse = (index)=>{
        setShowResponse({
            ...showResponse,
            [index]:!showResponse[index]
        })
    }
  return (
    <div>
        <h1>teste</h1>
      {(
        piadas.map((piada,index)=>(
            <div key={piada.id}>
                <p>{piada.joke}</p>
                {showResponse[index] && <p>{piada.response}</p>}
                <button onClick={()=>{toggleResponse(index)}}>
                    {showResponse[index] ? ('ocultar piada') : ('mostrar')}
                </button>
                <button onClick={()=>handleDeleteJoker(index)}>Apagar piada</button>
            </div>
        ))
      ) }
      <div>
      <form onSubmit={handleSUbmit} >
        <input style={{padding:'10px',width:'200px',borderRadius:"5%"}} value={newJoke} placeholder="Digite uma nova piada" onChange={(elementValue)=>setNewJoke(elementValue.target.value)} type="text" />
        <input style={{padding:'10px',width:'200px',borderRadius:"5%"}} value={newResponse} onChange={(elementValue)=>setNewResponse(elementValue.target.value)} placeholder="Digite a resposta da piada" type="text" />
        <button onClick={handleSUbmit} type="submit" style={{ backgroundColor: 'green' }}>Adicionar piada</button>
      </form>
    </div>
    </div>
  )
}

export default Piadas
