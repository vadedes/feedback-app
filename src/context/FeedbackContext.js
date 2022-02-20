import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is feedback item 1.',
    },
    {
      id: 2,
      rating: 9,
      text: 'This is feedback item 2.',
    },
    {
      id: 3,
      rating: 8,
      text: 'This is feedback item 3.',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add new feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //we cant just push the new feedback directly since it would replace all the feedback that's currently posted
    //we just add the new feedback and spread the existing feedbacks at the end
    setFeedback([newFeedback, ...feedback]);
  };

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update the feedback data when edited instead of adding a new one
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
    //reset the form when editing so we can continue adding new comments and don't get stuck in edit mode
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        //top portion are states(red), bottom portion are functions(blue)
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
