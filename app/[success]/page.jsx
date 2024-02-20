"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Success = () => {
  const [purchaseLoading, setPurchaseLoading] = useState(true);
  const [purchasedProduct, setPurchasedProduct] = useState(() => {
    if (typeof window !== "undefined") {
      // Check if window is defined (i.e., if code is running in the browser)
      const storedProduct = sessionStorage.getItem("purchaseProduct");
      return storedProduct ? JSON.parse(storedProduct) : null;
    } else {
      return null; // Return null if running in a non-browser environment
    }
  });
  const pathname = usePathname();
  const session_id = pathname.split("/").pop();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (sessionStorage.getItem("purchaseCompleted")) {
      return setPurchaseLoading(false);
    }
    const handleStripeRedirect = async () => {
      if (session_id) {
        // Fetch checkout session details from Stripe
        try {
          const response = await axios.post(
            "https://nex-trade-server.vercel.app/v1/api/checkout-session",
            {
              email: user?.email,
              sessionId: session_id,
            }
          );
          if (response.data.success) {
            // Set the stringified object in the session storage
            sessionStorage.setItem(
              "purchaseProduct",
              JSON.stringify(response.data.product)
            );
            sessionStorage.setItem("purchaseCompleted", "true");
            setPurchasedProduct(response.data.product);
            setPurchaseLoading(false);
          }
        } catch (error) {
          console.error("Error fetching checkout session:", error);
        }
      }
    };

    handleStripeRedirect();
  }, [loading, session_id, user?.email]);

  const handlePurchaseAnother = () => {
    sessionStorage.removeItem("purchaseCompleted");
    sessionStorage.removeItem("purchaseProduct");
    setPurchasedProduct(null);
  };

  if (purchaseLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[70vh] w-full flex flex-col gap-10 items-center justify-center py-20">
      <h1 className="text-5xl font-semibold text-white">
        Thanks For Subscribing Our {purchasedProduct && purchasedProduct?.name}
      </h1>
      <div className="flex items-center gap-5">
        <Link href="/">
          <DarkButton onClick={handlePurchaseAnother}>Go Home</DarkButton>
        </Link>
        <Link href="/dashboard/market">
          <DarkButton onClick={handlePurchaseAnother}>
            Explore Market
          </DarkButton>
        </Link>
      </div>
    </div>
  );
};

export default Success;
