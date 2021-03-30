import { ChangeEvent, FormEvent, useState } from 'react';
import Modal, { Props as ModalProps } from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransationTypeContainer } from './styles';

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
	const [type, setType] = useState('deposit');
	const [fields, setFields] = useState({
		title: '',
		value: 0,
		category: '',
	});

	function handleChangeInput({ target: { name, value } }: ChangeEvent<HTMLInputElement>) {
		setFields({ ...fields, [name]: value });
	}

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
		console.log({ ...fields, type });
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			<button type="button" onClick={onRequestClose} className="react-modal-close">
				<img src={closeImg} alt="Fechar modal" />
			</button>

			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar Transação</h2>

				<input name="title" placeholder="Título" onChange={handleChangeInput} />
				<input name="value" type="number" placeholder="Valor" onChange={handleChangeInput} />

				<TransationTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={() => setType('withdraw')}
						isActive={type === 'withdraw'}
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransationTypeContainer>

				<input name="category" placeholder="Categoria" onChange={handleChangeInput} />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
