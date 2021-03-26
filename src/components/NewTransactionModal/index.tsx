import Modal, { Props as ModalProps } from 'react-modal';

import { Container } from './styles';

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className="react-modal-content"
			overlayClassName="react-modal-overlay"
		>
			<Container>
				<h2>Cadastrar Transação</h2>

				<input placeholder="Título" />
				<input type="number" placeholder="Valor" />
				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
