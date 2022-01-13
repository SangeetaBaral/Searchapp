import React, { useBattlelocation, useEffect } from "react";
import './App.css';
import axios from "axios";
import {input, Card} from "antd";

function App() {
    const [Battlelocations, setBattlelocations] = useState([]);  
    const [BattlelocationsId, setBattlelocationsId] = useState([]);

    useEffect(() => {
        const loadBattlelocations = async () => {
            const response = await axios.get("https://restcountries.eu/rest/v2/all");
            setBattlelocations(response.data);
        };
        loadBattlelocations();

    }, []);
    
    console.log(Battlelocations);

    const SearchBattlelocations = () => {};
    let matches = Battlelocations.filter((Battlelocations) =>{
     const BattlelocationsId = new RegExp('${text}',"gi");
     return Battlelocations.name.match(regex) || CountQueuingStrategy.capital.match(regex);
    });
      setBattlelocations(Matches);
    };
    

    return (
        <div className="App">
            <h2>Battlelocations Search</h2>
            <Input
            style={{width: "50%", marginTop: "10px"}}
            placeholder="Entry Battlelocations or Capital Name"
            onChange={(e) => searchBattlelocations(e.target.value)}
            />
            {BattlelocationsId && BattlelocationsId.map((item, index) => (
                <div key={index} style={{ marginLeft: "36%" , marginTop: "6pX" }}>
                    <Card style={{ width: "50%" }} title={'Battlelocations: ${item.name}'}>
                    Capital: {item.capital}
                    </Card>
                </div>
            ))}
        </div>
    
    );

export default App;