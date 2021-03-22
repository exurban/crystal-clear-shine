import React, { useState } from "react";

const CheckoutForm = () => {
  const [loading] = useState(false);
  const [invoiceAmount, setInvoiceAmount] = useState(45);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    e.preventDefault();
    if (e.target.value.length < 1) {
      setInvoiceAmount(0);
    } else {
      setInvoiceAmount(parseInt(e.target.value));
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    console.log(`process payment for ${invoiceAmount}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 grid grid-cols-2 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <input
        type="text"
        name={"invoiceAmount"}
        value={invoiceAmount}
        onChange={handleInputChange}
        className="py-3 px-4 block w-full shadow-sm focus:ring-brand-200 focus:border-brand-200 border-gray-300 rounded-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center py-3 px-6 ml-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-500 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-200"
      >
        Pay ${invoiceAmount}
      </button>
    </form>
  );
};

export default CheckoutForm;
