import { NextPage } from "next";

import CheckoutForm from "../components/CheckoutForm";

const BillPayPage: NextPage = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Make a payment.</h2>
          <p className="mt-4 text-lg text-left text-gray-500">
            Please enter the amount you'd like to pay in the field below and click the `Pay` button.
          </p>
          <p className="mt-4 text-lg text-left text-gray-500">
            You'll be redirected to a secure payment portal hosted by Stripe, where you'll be able
            to pay with a credit card, Apple Pay or Google Pay.
          </p>
        </div>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default BillPayPage;
