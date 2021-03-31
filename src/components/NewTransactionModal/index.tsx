import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

import { Container, RadioBox, TransationTypeContainer } from './styles';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
	const [formData, setFormData] = useState({
		title: '',
		value: 0,
		type: 'deposit',
		category: '',
	});

	function handleChangeInput({ target: { name, value } }: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [name]: value });
	}

	function handleClickType(type: 'deposit' | 'withdraw') {
		return () => setFormData({ ...formData, type });
	}

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();
		api.post('transactions', formData);
		onRequestClose();
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
						onClick={handleClickType('deposit')}
						isActive={formData.type === 'deposit'}
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type="button"
						onClick={handleClickType('withdraw')}
						isActive={formData.type === 'withdraw'}
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
