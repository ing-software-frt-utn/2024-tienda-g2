import { ReactNode } from 'react';
import { Modal } from 'react-responsive-modal';
import { CloseIcon } from './CloseIcon';
import 'react-responsive-modal/styles.css';
import './popupstyles.css';

interface Props {
    openValue: boolean;
    closeFunction: () => void;
    children: ReactNode | ReactNode[];
}

const closeIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-12 h-12 text-red-500">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

export const GenericModal = ({ openValue, closeFunction, children }: Props) => {
    return (
        <Modal
            open={openValue}
            onClose={closeFunction}
            closeIcon={closeIcon}
            classNames={{
                overlay: 'customOverlay',
                overlayAnimationIn: 'customEnterOverlayAnimation',
                overlayAnimationOut: 'customLeaveOverlayAnimation',
                modalAnimationIn: 'customEnterModalAnimation',
                modalAnimationOut: 'customLeaveModalAnimation',
                modal: 'customModal',
            }}
            animationDuration={500}>
            {children}
        </Modal>
    );
};
