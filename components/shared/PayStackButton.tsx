"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import PaystackPop from "@paystack/inline-js";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation'
import { useCart } from "@/context/StateContext";
import { createOrder } from "@/sanity/orders";
const PaystackButton = ({ amount }) => {
  const { toast } = useToast();
  const { user } = useUser();
  const router = useRouter();
  const email = user?.primaryEmailAddress?.emailAddress;
  const { cartItems, setCartItems} = useCart();
  const payWithPaystack = () => {
    if (!user) {
      toast({
        title: "Login to Continue",
      });
    } else if (amount == 0) {
      toast({
        title: "No item in your cart",
      });
    } else {
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_8f428b019d0d527181b15f687f51772ee3269fe1", // Replace with your Paystack public key
        email,
        amount: amount * 100, // Convert amount to kobo
        currency: "NGN", // Currency
        onSuccess: async(transaction) => {
         
          try {
            await createOrder(email,cartItems,amount);
            setCartItems([]);
            router.push('/orders')
           } catch (error) {
             console.log(error)
           }

          // Post-payment logic, e.g., save the transaction to your backend
        },
        onCancel: async() => {
          toast({
            title: "Transaction was Successful",
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
    }
  };

  return (
    <>
      {user ? (
        <button
          onClick={payWithPaystack}
          className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Pay Now
        </button>
      ) : (
        <button className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <Link href="/sign-up">Log In</Link>
        </button>
      )}
    </>
  );
};

export default PaystackButton;
