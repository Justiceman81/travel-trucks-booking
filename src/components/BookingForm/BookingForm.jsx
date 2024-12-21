import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

const BookingForm = () => {
  const RentRequestSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Must be at least 2 characters")
      .max(50, "Must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required"),
    date: Yup.string().required("Period is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    date: "",
    message: "",
  };
  const handleSubmit = (values, actions) => {
    toast("We will contact you soon!");
    actions.resetForm();
  };

  return (
    <div className={styles.formWrap}>
      <h2 className={styles.formTitle}>Book your campervan now</h2>
      <p className={styles.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RentRequestSchema}
      >
        {({ values, setFieldValue }) => (
          <Form className={styles.form}>
            <div className={styles.inputWrap}>
              <Field
                className={styles.field}
                type="text"
                name="username"
                placeholder="Name*"
              />
              <ErrorMessage
                className={styles.errorMsg}
                name="username"
                component="span"
              />
            </div>
            <div className={styles.inputWrap}>
              <Field
                className={styles.field}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                className={styles.errorMsg}
                name="email"
                component="span"
              />
            </div>

            <DatePicker
              className={styles.inputDate}
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              placeholderText="Booking date*"
              dateFormat="yyyy-MM-dd"
            />
            <ErrorMessage
              className={styles.errorDateMsg}
              name="date"
              component="span"
            />

            <Field
              className={styles.fieldMsg}
              name="message"
              as="textarea"
              placeholder="Comment"
            />
            <button className={styles.submitBtn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
