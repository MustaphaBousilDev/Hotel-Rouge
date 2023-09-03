import { classNames } from '@/lib/formatters/stringFormat';
import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { CgSpinner } from 'react-icons/cg';
import swal from 'sweetalert'
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSubmitting?: boolean;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}
const OpenSweet=()=>{
  swal({
    title: "Confirmation",
    text: "Êtes-vous sûr que vous voulez ajouter ce compte ?",
    icon: "info",
    buttons: true,
    infoMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "info",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}
const SubmitButton: FC<Props> = ({
  isSubmitting,
  children,
  disabled,
  className,
  type = 'submit',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={OpenSweet}
      className={classNames(
        'flex w-full items-center rounded-lg bg-blue-600 px-5 py-2.5',
        'text-center text-sm font-medium text-white',
        'focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 enabled:hover:bg-blue-700',
        'disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto',
        className ?? ''
      )}
      disabled={isSubmitting || disabled}
      {...props}
    >
      {isSubmitting && <CgSpinner className='mr-2 animate-spin' />}
      {children}
    </button>
  );
};
export default SubmitButton;
