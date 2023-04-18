import { useForm } from "react-hook-form";

interface ContactFormProps {
  onCancelClick: () => void;
}
export const ContactForm: React.FC<ContactFormProps> = ({ onCancelClick }) => {
  type FormValues = {
    name: string;
    email: string;
    content: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: any) => {
    const { name, email, subject, message } = data;

    //TODO: send email
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
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
          {...register("name", {
            required: { value: true, message: "Please enter your name" },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
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
          {...register("email", {
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
        {...register("content", {
          required: true,
        })}
        className="p-2 border rounded"
        placeholder="Message"
      />
      {errors.content && (
        <span className="errorMessage">Please enter a message</span>
      )}

      <div className="flex">
        <button
          className="px-4 py-2 mr-auto border rounded hover:bg-white hover:text-black"
          type="button"
          onClick={onCancelClick}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 border rounded hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
