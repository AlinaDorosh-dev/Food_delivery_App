/**
 * @fileoverview Alert reusable component to display an alert message.
 */
import { BsExclamationOctagonFill } from "react-icons/bs";

type Props = {
  message: string | null;
};

export default function InfoAlert({ message }: Props) {
  return (
    <div className='text-red-800 text-xs  p-2 mb-2 bg-red-100'>
      <BsExclamationOctagonFill className='inline-block mr-3 ml-2 mb-1' />
      {message}
    </div>
  );
}
