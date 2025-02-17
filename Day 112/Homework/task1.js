const fetchCryptoData = async (crypto) => {
	const url = ``;
	try {
		const response = await fetch(url);
		const data = await response.json();
		if (data.length > 0) {
			renderCryptoData(data[0]);
		} else {
			document.getElementById('cryptoData').innerHTML = '<p class="error">Cryptocurrency not found. Please try again.</p>';
		}
	} catch (error) {
		document.getElementById('cryptoData').innerHTML = '<p class="error">Error fetching data. Please try again later.</p>';
	}
};

const renderCryptoData = (crypto) => {
	const cryptoDataElement = document.getElementById('cryptoData');
	const { name, current_price, market_cap, price_change_percentage_24h } = crypto;
	cryptoDataElement.innerHTML = `
		<div class="crypto-card">
			<h2>${name}</h2>
			<p><strong>Price:</strong> $${current_price}</p>
			<p><strong>Market Cap:</strong> $${market_cap.toLocaleString()}</p>
			<p><strong>24h Change:</strong> ${price_change_percentage_24h.toFixed(2)}%</p>
		</div>
	`;
};

document.getElementById('searchBtn').addEventListener('click', () => {
	const cryptoInput = document.getElementById('cryptoInput').value.trim().toLowerCase();
	if (cryptoInput) {
		fetchCryptoData(cryptoInput);
	} else {
		document.getElementById('cryptoData').innerHTML = '<p class="error">Please enter a cryptocurrency name.</p>';
	}
});
