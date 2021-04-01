import { useContext } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { formatCurrency } from '../../utils/formatter';

import { Container } from './styes';

interface TypesDict {
	[key: string]: ['income' | 'outcome', number];
}

export function Summary() {
	const { transactions } = useContext(TransactionsContext);

	const { income, outcome, total } = transactions.reduce(
		(acc, transaction) => {
			const TYPES: TypesDict = {
				deposit: ['income', transaction.amount],
				withdraw: ['outcome', -transaction.amount],
			};

			const [type, amountSigned] = TYPES[transaction.type];

			return {
				...acc,
				[type]: acc[type] + amountSigned,
				total: acc.total + amountSigned,
			};
		},
		{
			income: 0,
			outcome: 0,
			total: 0,
		},
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>{formatCurrency(income)}</strong>
			</div>

			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>{formatCurrency(outcome)}</strong>
			</div>

			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>{formatCurrency(total)}</strong>
			</div>
		</Container>
	);
}
