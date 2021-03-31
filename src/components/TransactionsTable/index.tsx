import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

interface Transaction {
	title: string;
	value: number;
	type: 'deposit' | 'withdraw';
	category: string;
	createdAt: Date;
}

export function TransactionTable() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions').then(response => setTransactions(response.data));
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
					{/* <tr>
						<td>Desenvolvimento de Site</td>
						<td className="deposit">R$ 12.000,00</td>
						<td>Desenvolvimento</td>
						<td>20/02/2021</td>
					</tr> */}

					{transactions.map(({ title, value, type, category, createdAt }) => (
						<tr>
							<td>{title}</td>
							<td className={type}>{value}</td>
							<td>{category}</td>
							<td>{createdAt}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	);
}
