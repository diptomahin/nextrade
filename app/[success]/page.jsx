"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Success = () => {
  const pathname = usePathname();
  const session_id = pathname.split("/").pop();

  useEffect(() => {
    const handleStripeRedirect = async () => {
      if (session_id) {
        // Fetch checkout session details from Stripe
        try {
          const response = await axios.get(
            `http://localhost:5000/checkout-session/${session_id}`
          );
          console.log(response.data);
          if (response.data.status) {
            console.log(response.data);
          }
        } catch (error) {
          console.error("Error fetching checkout session:", error);
        }
      }
    };

    handleStripeRedirect();
  }, [session_id]);

  return <div>Success</div>;
};

export default Success;
