import React, { useState } from 'react';

function Average() {
    const [responseData, setResponseData] = useState(null); 

    const fetchData = async () => {
        try {
            const fetchedResponse = await fetch('/api/numbers/p'); 
            const data = await fetchedResponse.json(); 
            setResponseData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Average calculator</h1>
                <button onClick={fetchData}>Fetch Data</button>
                {
                    responseData && (
                        <div>
                            <h2>Window Prev State:</h2>
                            <p>{JSON.stringify(responseData.windowPrevState)}</p>
                            <h2>Window Curr State:</h2>
                            <p>{JSON.stringify(responseData.numbers)}</p>
                            <h2>Average:</h2>
                            <p>{responseData.avg}</p>
                        </div>
                    )
                }
            </header>
        </div>
    );
}

export default Average;
