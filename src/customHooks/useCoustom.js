import React, { useState, useEffect } from "react";

function useCoustom(url) {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const makeAppCall = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPostData(data);
      setLoading(false);
      setIsError(false);
    } catch (e) {
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    makeAppCall();
  }, []);
  return [postData, loading, isError];
}

export default useCoustom;
