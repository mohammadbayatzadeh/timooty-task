import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, []);
  return <div></div>;
};

export default NotFound;
