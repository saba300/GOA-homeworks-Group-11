document.getElementById('searchBtn').addEventListener('click', function() {
	const username = document.getElementById('username').value;
	if (username === '') {
		alert('Please enter a GitHub username');
		return;
	}
	fetch(`https://api.github.com/users/${username}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('User not found');
			}
			return response.json();
		})
		.then(data => {
			const userInfo = document.getElementById('user-info');
			userInfo.innerHTML = `
				<img src="${data.avatar_url}" alt="Profile Picture" class="profile-img">
				<h2>${data.login}</h2>
				<p>${data.bio || 'No bio available'}</p>
				<p><strong>Public Repos:</strong> ${data.public_repos}</p>
				<a href="${data.html_url}" target="_blank">View Profile</a>
			`;
		})
		.catch(error => {
			const userInfo = document.getElementById('user-info');
			userInfo.innerHTML = `<p class="error">${error.message}</p>`;
		});
});
