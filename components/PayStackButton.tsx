"use client";
import React from "react";

import PaystackPop from "@paystack/inline-js";
import { useToast } from "@/hooks/use-toast";
const PaystackButton = ({ email, amount }) => {
  const { toast } = useToast();
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8f428b019d0d527181b15f687f51772ee3269fe1", // Replace with your Paystack public key
      email,
      amount: amount * 100, // Convert amount to kobo
      currency: "NGN", // Currency
      onSuccess: (transaction) => {
        toast({
          title: "Transaction was Successful",
        });
        console.log(transaction);
        // Post-payment logic, e.g., save the transaction to your backend
      },
      onCancel: () => {
        toast({
          title: "Payment was cancelled",
          description: "please try again later",
        });
      },
      onError: (error) => {
        toast({
          title: "Payment failed",
          description: "please try again later",
        });
        console.error("Payment Error:", error);
      },
    });
  };

  return (
    <button
      onClick={payWithPaystack}
      className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Pay Now
    </button>
  );
};

export default PaystackButton;
