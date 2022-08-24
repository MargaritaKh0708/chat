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
       {children}
      </div>
    </div>
  );
};
