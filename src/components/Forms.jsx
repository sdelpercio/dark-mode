import React from 'react';

const Forms = ({ selectAPage }) => {
	const totalPages = [];
	for (let i = 1; i < 69; i++) {
		totalPages.push(i);
	}

	return (
		<form>
			<p style={{ marginTop: '50px' }}>Page</p>
			<select style={{ width: '100px' }} onChange={selectAPage}>
				{totalPages.map(page => (
					<option key={page} value={page}>
						{page}
					</option>
				))}
			</select>
		</form>
	);
};

export default Forms;
