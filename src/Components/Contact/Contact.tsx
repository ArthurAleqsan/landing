import IconRow from "../Common/IconRow";
import styles from "./styles.module.scss";
import EmailIcon from "./../../assets/icons/email.svg";
import PhoneIcon from "./../../assets/icons/phone.svg";
import { FC, useState } from "react";
import { isEmail, WEB_SITE_ID } from "../../utils/constants";
import { API } from "../../Services/Api";

type Props = {
  primary_color: string;
  email: string;
};

const Contact: FC<Props> = ({ primary_color, email }) => {
  const [values, setValues] = useState<any>({
    name: "",
    email: "",
    message: "",
    subject: "BadaBing email",
  });
  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let isInvalid = false;
    const keys: string[] = Object.keys(values);
    const temp: any = {
      name: "",
      email: "",
      message: "",
    };
    keys.forEach((key: string) => {
      if (!values[key]) {
        isInvalid = true;
        console.log("from if", key);
        temp[key] = `Field ${key} can not be empty.`;
      }
    });
    setErrors(temp);
    if (!isEmail(values.email)) {
      isInvalid = true;
      setErrors({
        ...errors,
        email: "Email is not valid.",
      });
    }
    if (!isInvalid) {
      setErrors({
        name: "",
        email: "",
        message: "",
      });
      API.POST(`websites/${WEB_SITE_ID}/contact-us`, values).then((res) =>
        console.log(res)
      );
    }
  };
  return (
    <section id="Contact" className={styles.container}>
      <h1 className={styles.container__title}>Contact</h1>
      <div className={styles.container__contactsContainer}>
        <div className={styles.container__contactsContainer__block}>
          <IconRow icon={EmailIcon} size="lg" text={email} />
          <IconRow icon={PhoneIcon} size="lg" text="+353 88 224 0046" />
        </div>
        <div className={styles.container__contactsContainer__block}>
          <div className={styles.container__form}>
            <span className={styles.container__form__title}>
              If you have any inquiries please get in touch via the form below.
            </span>
            <div className={styles.container__form__inputContainer}>
              <input
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <span className={styles.errors}>{errors.name}</span>
            </div>
            <div className={styles.container__form__inputContainer}>
              <input
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                type="email"
              />
              <span className={styles.errors}>{errors.email}</span>
            </div>
            <div className={styles.container__form__inputContainer}>
              <textarea
                name="message"
                value={values.message}
                placeholder="Message"
                onChange={handleChange}
              />
              <span className={styles.errors}>{errors.message}</span>
            </div>
            <button
              className={styles.container__form__button}
              onClick={handleSubmit}
              style={{ background: primary_color }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
