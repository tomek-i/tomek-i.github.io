import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useContactForm } from './useContactForm';

const notifySuccess = () => toast('Email sent.');
const notifyError = () => toast('There was an issue sending the email.');
interface ContactFormProps {
  onCancelClick: () => void;
}
//TODO: read https://www.carlrippon.com/successful-submission-in-react-hook-form/
export const ContactForm: React.FC<ContactFormProps> = ({ onCancelClick }) => {
  const { setShowContactFormModal } = useContactForm();

  type FormValues = {
    name: string;
    email: string;
    content: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (!process.env.REACT_APP_API_EMAILJS_SERVICEID) {
      throw Error('Secret not set API_EMAILJS_SERVICEID');
    }
    if (!process.env.REACT_APP_API_EMAILJS_TEMPLATEID) {
      throw Error('Secret not set API_EMAILJS_TEMPLATEID');
    }
    if (!process.env.REACT_APP_API_EMAILJS_PUBLIC) {
      throw Error('Secret not set API_EMAILJS_PUBLIC');
    }
    emailjs
      .send(
        process.env.REACT_APP_API_EMAILJS_SERVICEID,
        process.env.REACT_APP_API_EMAILJS_TEMPLATEID,
        data,
        process.env.REACT_APP_API_EMAILJS_PUBLIC
      )
      .then(
        (_result) => {
          notifySuccess();
        },
        (_error) => {
          notifyError();
          //TODO: add logging
        }
      )
      .finally(() => setShowContactFormModal(false));
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col flex-auto p-6 space-y-4 w-[600px]"
    >
      {/* Row 1 of form */}

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
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
      </div>
      <div>
        <input
          type="email"
          readOnly={isSubmitting}
          {...register('email', {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          className="w-full p-2 border rounded"
          placeholder="Email address"
        />
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}
      </div>

      <textarea
        rows={3}
        readOnly={isSubmitting}
        {...register('content', {
          required: true,
        })}
        className="p-2 border rounded"
        placeholder="Message"
      />
      {errors.content && (
        <span className="errorMessage">Please enter a message</span>
      )}

      <div className="flex">
        {isSubmitted && (
          <div className="success">Form submitted successfully</div>
        )}
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
