import React, { createContext, useContext, useState, useEffect } from "react";

const UpvoteContext = createContext();

export const UpvoteProvider = ({ children }) => {
  const [upvoteCounts, setUpvoteCounts] = useState(() => {
    return JSON.parse(localStorage.getItem("upvoteCounts")) || {};
  });

  // Save to local storage on state changes
  useEffect(() => {
    localStorage.setItem("upvoteCounts", JSON.stringify(upvoteCounts));
  }, [upvoteCounts]);

  const addUpvote = (listId) => {
    setUpvoteCounts((prev) => ({
      ...prev,
      [listId]: (prev[listId] || 0) + 1
    }));
  };

  const removeUpvote = (listId) => {
    setUpvoteCounts((prev) => ({
      ...prev,
      [listId]: Math.max((prev[listId] || 0) - 1, 0)
    }));
  };

  // Clear all upvotes from all lists
  const clearAll = () => {
    setUpvoteCounts({});
  };

  return (
    <UpvoteContext.Provider value={{ 
      upvoteCounts, 
      addUpvote, 
      removeUpvote,
      clearAll
    }}>
      {children}
    </UpvoteContext.Provider>
  );
};

export const useUpvote = () => {
  return useContext(UpvoteContext);
};