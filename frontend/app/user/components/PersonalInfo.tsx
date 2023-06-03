type Props = {
  firstName: string;
  lastName: string;
  phone: string;
  savedDeliveryAddress: {
    address: string;
    city: string;
    zipCode: string;
  };
};

export default function PersonalInfo({
  firstName,
  lastName,
  phone,
  savedDeliveryAddress,
}: Props) {
  return (
    <div className='relative max-w-6xl lg:mt-8'>
      <div className='text-slate-600 font-semibold text-base ml-4 lg:ml-10 md:mt-6 p-4'>
        <p className=' mb-4'>
          <span className='text-slate-700 underline underline-offset-4 mr-2'>
            Name:
          </span>
          {firstName}
        </p>
        <p className=' mb-4'>
          <span className='text-slate-700 underline underline-offset-4 mr-2'>
            Surname:
          </span>{" "}
          {lastName}
        </p>
        <p className=' mb-4'>
          <span className='text-slate-700 underline underline-offset-4 mr-2'>
            Phone:
          </span>{" "}
          {phone ? phone : "Not provided"}
        </p>
        <p className='mb-4'>
          <span className='text-slate-700 underline underline-offset-4 mr-2'>
            Delivery address:
          </span>{" "}
          {savedDeliveryAddress
            ? `${savedDeliveryAddress.address}, ${savedDeliveryAddress.city}, ${savedDeliveryAddress.zipCode}`
            : "Not provided"}
        </p>
      </div>
    </div>
  );
}
