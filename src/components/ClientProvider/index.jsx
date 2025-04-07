"use client";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { useEffect, useState } from "react";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import Loader from "../loader";
import { motion , AnimatePresence } from "framer-motion";


const variants = {
  hidden: { opacity: 0, x: -200 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 200 },
};

export default function ClientProvider({ children }) {
  const [queryClient] = useState(()=> new QueryClient());
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading time
    
    return () => clearTimeout(timeout);
  }, [pathname]);


  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        <Provider store={store}>
            {loading && <Loader />}
            <motion.div
            key={pathname}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
            >
              {children}

            </motion.div>
            <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </AnimatePresence>
    </QueryClientProvider>
    );
}