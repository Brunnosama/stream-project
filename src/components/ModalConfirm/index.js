import { Button, Modal } from 'react-bootstrap';

export function ModalConfirm({
    show,
    onHide,
    onConfirm,
    modalTitle = 'Do you want to proceed?',
    modalContent = 'This action is irreversible!',
    cancelLabel = 'Confirm',
    confirmLabel = 'Cancel'
}) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalContent}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {confirmLabel}
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    {cancelLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}