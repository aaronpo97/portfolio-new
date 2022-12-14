import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface FormSegmentProps {
  id: string;
  errorMessage: string | undefined;
  formRegister: UseFormRegisterReturn;
  label: string;
  placeholder: string;
  type?: 'textInput' | 'textArea';
}

const FormSegment: FC<FormSegmentProps> = ({
  errorMessage,
  formRegister,
  id,
  label,
  placeholder,
  type = 'textInput',
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-bold uppercase">
          {label}
        </label>
        <span className="text-error-contents italic">{errorMessage}</span>
      </div>

      {type === 'textInput' ? (
        <input
          type="text"
          placeholder={placeholder}
          id={id}
          className={`input-bordered input w-full ${errorMessage ? 'input-error' : ''}`}
          {...formRegister}
        />
      ) : (
        <textarea
          className={`textarea-bordered textarea h-64 w-full resize-none ${
            errorMessage ? 'textarea-error' : ''
          }`}
          placeholder={placeholder}
          id={id}
          {...formRegister}
        ></textarea>
      )}
    </div>
  );
};

export default FormSegment;
