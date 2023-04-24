import { Timeline } from '../../types';
import { useForm } from '../hooks/useFormHook';

interface TimelineFormProps {}
export const TimelineForm: React.FC<TimelineFormProps> = () => {
  const cb = () => {
    console.log('form callback', { values });
  };
  const { values, handleChange, handleSubmit } = useForm<Timeline>(cb);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* company */}
        <fieldset>
          <input
            type="text"
            name="company.name"
            onChange={handleChange}
            value={values.company.name}
            required
          />

          <input
            type="text"
            name="company.website"
            onChange={handleChange}
            value={values.company.website}
            required
          />
          <textarea
            name="company.description"
            //   onChange={handleChange}
            value={values.company.description}
            required
          />
          <fieldset>
            <input type="text" name="company.location.long" />
            <input type="text" name="company.location.lat" />
          </fieldset>
          <fieldset>
            <input type="text" name="company.address.street" />
            <input type="text" name="company.address.city" />
            <input type="text" name="company.address.country" />
            <input type="text" name="company.address.postcode" />
            <input type="text" name="company.address.state" />
          </fieldset>
        </fieldset>

        <fieldset>
          {/* job */}
          <input
            name="job.summary"
            onChange={handleChange}
            value={values.job.summary}
            required
          />
          <input
            name="job.image"
            onChange={handleChange}
            value={values.job.image}
            required
          />
          <input
            name="job.role"
            onChange={handleChange}
            value={values.job.role}
            required
          />
          <input
            name="job.responsibilities"
            onChange={handleChange}
            value={values.job.role}
            required
          />

          <fieldset>
            <input
              name="job.dates.start"
              onChange={handleChange}
              value={values.job.dates.start}
              required
            />
            <input
              name="job.dates.end"
              onChange={handleChange}
              value={values.job.dates.end}
              required
            />
          </fieldset>
        </fieldset>
        {/*TODO: add tags */}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
