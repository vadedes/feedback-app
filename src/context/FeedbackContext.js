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

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //we cant just push the new feedback directly since it would replace all the feedback that's currently posted
    //we just add the new feedback and spread the existing feedbacks at the end
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
