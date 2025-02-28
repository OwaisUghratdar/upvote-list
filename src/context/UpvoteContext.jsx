import React, { createContext, useContext, useState, useEffect } from "react";

const UpvoteContext = createContext();

export const UpvoteProvider = ({ children }) => {

  // State to track number of Upvotes in each UpvoteList
  const [upvoteCounts, setUpvoteCounts] = useState(() => {
    return JSON.parse(localStorage.getItem("upvoteCounts")) || {};
  });
  
  // State to track whether Upvotes are toggled in each UpvoteList
  const [selectedLists, setSelectedLists] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedLists")) || {};
  });

  // Save Upvotes to local storage on change
  useEffect(() => {
    localStorage.setItem("upvoteCounts", JSON.stringify(upvoteCounts));
  }, [upvoteCounts]);
  
  // Save selected lists to local storage
  useEffect(() => {
    localStorage.setItem("selectedLists", JSON.stringify(selectedLists));
  }, [selectedLists]);

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

  const toggleSelection = (listId) => {
    setSelectedLists((prev) => ({
      ...prev,
      [listId]: !(prev[listId] || false)
    }));
  };

  // Clear all upvotes from all lists
  const clearAll = () => {
    setUpvoteCounts({});
    setSelectedLists({});
  };

  return (
    <UpvoteContext.Provider value={{ 
      upvoteCounts, 
      selectedLists,
      addUpvote, 
      removeUpvote,
      toggleSelection,
      clearAll
    }}>
      {children}
    </UpvoteContext.Provider>
  );
};

export const useUpvote = () => {
  return useContext(UpvoteContext);
};