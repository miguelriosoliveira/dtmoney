import { useState } from 'react';
import Modal, { Props as ModalProps } from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransationTypeContainer } from './styles';

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
	const [type, setType] = useState('deposit');

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

			<Container>
				<h2>Cadastrar Transação</h2>

				<input placeholder="Título" />
				<input type="number" placeholder="Valor" />

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

				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
