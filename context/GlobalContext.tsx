"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/app/actions/getUnreadmessCount";
import { GlobalContextType } from "@/types";



// create context
const GlobalContext = createContext<GlobalContextType>({
  unreadCount: 0,
  setUnreadCount: ()  => {},
});

// cretae provider
export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [unreadCount, setUnreadCount] = useState(0);
    const {data: session} = useSession()
    useEffect(() => {
        if (session && session.user) {
            getUnreadMessageCount().then((res) => {
                if (res.count) {
                    setUnreadCount(res.count)
                }
            }) 
        }
    }, [getUnreadMessageCount, session])
  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
