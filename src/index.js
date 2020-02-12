import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Charts from './components/Charts';
import Navbar from './components/Navbar';
import Forms from './components/Forms';

import './styles.scss';

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`
			)
			.then(res => {
				setCoinData(res.data);
			})
			.catch(err => console.log(err));
	}, [page]);

	const selectAPage = event => {
		setPage(Number(event.target.value));
	};

	return (
		<div className='App'>
			<Navbar />
			<Forms selectAPage={selectAPage} />
			<Charts coinData={coinData} />
		</div>
	);
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
