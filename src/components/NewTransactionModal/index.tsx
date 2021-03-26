import Modal, { Props as ModalProps } from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
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
				<input placeholder="Categoria" />

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
