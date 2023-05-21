import { useState } from "react";
import InfoAlert from "./InfoAlert";
import { BsEye, BsEyeSlash } from "react-icons/bs";

type Props = {
  label: string;
  type: string;
  formik: any;
  placeholder: string;
  autoFocus?: boolean;
};

export default function FormSection({
  label,
  formik: { values, errors, touched, handleChange, handleBlur },
  type,
  placeholder,
  autoFocus = false,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className='mb-4 relative'>
      <label
        className='block text-slate-600 text-sm font-bold mb-2'
        htmlFor={label}
      >
        {capitalize(label)}
      </label>
      {errors[label] && touched[label] ? (
        <InfoAlert message={errors[label]} />
      ) : null}
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-2 leading-tight focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50 '
        id={label}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={values[label]}
        onChange={handleChange}
        onBlur={handleBlur}
        autoFocus={autoFocus}
      />
      {type === "password" ? (
        <div className='absolute right-2 bottom-3'>
          <button
            className='focus:outline-none focus:ring-1 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-50'
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? (
              <BsEyeSlash className='inline-block mr-2 ml-2 mb-1  text-slate-700 font-semibold'
              size={20} />
            ) : (
              <BsEye className='inline-block mr-2 ml-2 mb-1  text-slate-700 font-semibold' size={20}/>
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}