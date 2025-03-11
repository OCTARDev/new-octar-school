"use client";
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = Cookies.get("user"); // Read cookie
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  console.log(user);
  
  return (
    <div>about</div>
  )
}
