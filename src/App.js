import { useEffect, useState } from 'react'
import './App.css'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((response) => response.json())
			.then((data) => setData([...data]))
	}, [])

	return (
		<div className='App'>
			<div className='one-block'>
				{data.map((element) => (
					<div className='as' 
					key={element.id}>
						{element.title}
						<div>
							<img className='photos' src={element.url} />
							{element.thumbnailUrl}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
