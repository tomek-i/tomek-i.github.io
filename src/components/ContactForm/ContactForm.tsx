import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useContactForm } from './useContactForm';

const notifySuccess = () => toast.success('Email sent.');
const notifyError = () => {
  toast.error('There was an issue sending the email.');
};
interface ContactFormProps {
  onCancelClick: () => void;
}

// TODO: extract component into a FormErrorMessage component
interface ErrorMessageProps {
  message: string | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;
  return <span className="text-sm text-red-400">{message}</span>;
};

const checkEnvVariables = () => {
  const requiredEnvVars = [
    'REACT_APP_API_EMAILJS_SERVICEID',
    'REACT_APP_API_EMAILJS_TEMPLATEID',
    'REACT_APP_API_EMAILJS_PUBLIC',
  ];

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Secret not set ${envVar}`);
    }
  });
};

export const ContactForm: React.FC<ContactFormProps> = ({ onCancelClick }) => {
  useContactForm();

  type FormValues = {
    name: string;
    email: string;
    content: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      checkEnvVariables();
      await emailjs.send(
        process.env.REACT_APP_API_EMAILJS_SERVICEID!,
        process.env.REACT_APP_API_EMAILJS_TEMPLATEID!,
        data,
        process.env.REACT_APP_API_EMAILJS_PUBLIC!
      );
      notifySuccess();
    } catch (error) {
      notifyError();
      console.error('Error sending email:', error);
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col flex-auto p-6 space-y-4 w-[600px]"
    >
      <div>
        <input
          type="text"
          readOnly={isSubmitting}
          {...register('name', {
            required: { value: true, message: 'Please enter your name' },
            maxLength: {
              value: 30,
              message: 'Please use 30 characters or less',
            },
          })}
          className="w-full p-2 border rounded"
          placeholder="Name"
        />
        <ErrorMessage message={errors.name?.message} />
      </div>
      <div>
        <input
          type="email"
          readOnly={isSubmitting}
          {...register('email', {
            required: 'Please enter a valid email address',
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          className="w-full p-2 border rounded"
          placeholder="Email address"
        />
        <ErrorMessage message={errors.email?.message} />
      </div>

      <textarea
        rows={3}
        readOnly={isSubmitting}
        {...register('content', {
          required: 'Please enter a message',
        })}
        className="p-2 border rounded"
        placeholder="Message"
      />
      <ErrorMessage message={errors.content?.message} />

      <div className="flex">
        <button
          className="px-4 py-2 mr-auto border rounded hover:bg-white hover:text-black"
          type="button"
          onClick={onCancelClick}
        >
          Cancel
        </button>
        <button
          disabled={isSubmitting}
          className="px-4 py-2 border rounded hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
