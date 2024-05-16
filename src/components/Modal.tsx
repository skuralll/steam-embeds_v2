import { ReactNode } from 'react';
import { default as ReactModal } from 'react-modal';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, isOpen, setIsOpen }: Props) => {
  // Modalを中央に表示するためのスタイル
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0d141c',
      color: '#dadfe4',
      border: 'none',
      boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.2)',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={() => {
        setIsOpen(false);
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
