import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <div>
      <div className="">
        <div className="w-full mx-auto p-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Contact Information
            </h1>

            {/* <!-- Shipping Address --> */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Shipping Address
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="first_name"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="last_name"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">
                  Address
                </label>
                <Input
                  type="text"
                  id="address"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">
                  City
                </label>
                <Input
                  type="text"
                  id="city"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    State
                  </label>
                  <Input
                    type="text"
                    id="state"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    ZIP Code
                  </label>
                  <Input
                    type="text"
                    id="zip"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Payment Information --> */}
            <div>
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
                Payment Information
              </h2>
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-white mb-1">
                  Card Number
                </label>
                <Input
                  type="text"
                  id="card_number"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    Expiration Date
                  </label>
                  <Input
                    type="text"
                    id="exp_date"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-white mb-1">
                    CVV
                  </label>
                  <Input
                    type="text"
                    id="cvv"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-primary dark:text-white dark:hover:bg-teal-900">
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
