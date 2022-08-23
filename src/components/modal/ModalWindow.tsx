export interface IModalWindow {
    setActive: (arg: boolean) => void;
    children?: React.ReactNode;
    className?: string;
    active: boolean;
  }
  
  export const ModalWindow: React.FC<IModalWindow> = ({
      setActive,
      className,
      children,
    active,
  }) => {
    return (
      <div
        className={active ? `modal  active` : `modal `}
        onClick={() => setActive(false)}
      >
        <div
          className={
            active
              ? `modal__content ${className || ''} active`
              : `modal__content ${className || ''}`
          }
          onClick={(e) => e.stopPropagation()}
        >
          {/* Так не сработает закрытие окна при клике на него*/} {children}
        </div>
      </div>
    );
  };
  