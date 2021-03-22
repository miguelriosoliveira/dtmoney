import axios from 'axios';
import { useEffect } from 'react';

import { Container } from './styles';

export function TransactionTable() {
	useEffect(() => {
		// axios.get()
	}, []);

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Desenvolvimento de Site</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr>

					<tr>
						<td>Aluguel</td>
						<td className="withdraw">-R$ 1.100,00</td>
						<td>Casa</td>
						<td>17/02/2021</td>
					</tr>
				</tbody>
			</table>
		</Container>
	);
}
