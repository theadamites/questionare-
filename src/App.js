
import './App.css';
import React, { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    satisfaction: '',
    easeOfUse: '',
    information: '',
    technicalIssues: '',
    support: '',
    communication: '',
    featuresUseful: '',
    featuresConfusing: '',
    likelihoodToRecommend: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {

    console.log(feedback);
    // You can send the feedback data to a server or perform any other action here
  };

  return (
    <div className="App">
      <h1>Rutgers Feedback Form</h1>
      <label>
         By: Adam Elgendy
        </label>
      <form onSubmit={handleSubmit}>
      <label>
          First Name:
          <input type="text" name="firstName" value={feedback.firstName} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={feedback.lastName} onChange={handleChange} />
        </label>
        <label>
          Major:
          <input type="text" name="major" value={feedback.major} onChange={handleChange} />
        </label>
        <label>
          Campus:
          <input type="text" name="campus" value={feedback.campus} onChange={handleChange} />
        </label>
      <label>
          How satisfied were you with the overall user experience of the Rutgers web registration services?
          <select name="satisfaction" value={feedback.satisfaction} onChange={handleChange}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <label>
          Did you find the registration process easy to navigate and understand?
          <input type="radio" name="easeOfUse" value="yes" checked={feedback.easeOfUse === 'yes'} onChange={handleChange} /> Yes
          <input type="radio" name="easeOfUse" value="no" checked={feedback.easeOfUse === 'no'} onChange={handleChange} /> No
          <input type="radio" name="easeOfUse" value="maybe" checked={feedback.easeOfUse === 'maybe'} onChange={handleChange} /> Maybe
        </label>
    
        <label>
          Were you able to find the information you needed to complete your registration?
          <input type="text" name="information" value={feedback.information} onChange={handleChange} />
        </label>
        <label>
          Did you encounter any technical issues while using the web registration services? If so, please describe.
          <input type="text" name="technicalIssues" value={feedback.technicalIssues} onChange={handleChange} />
        </label>
        <label>
          How would you rate the responsiveness and helpfulness of the support team, if you needed to contact them?
          <input type="text" name="support" value={feedback.support} onChange={handleChange} />
        </label>
        <label>
          Did you receive clear and timely communication about registration deadlines and requirements?
          <input type="text" name="communication" value={feedback.communication} onChange={handleChange} />
        </label>
        <label>
          Were there any features or functionalities that you found particularly useful or convenient?
          <input type="text" name="featuresUseful" value={feedback.featuresUseful} onChange={handleChange} />
        </label>
        <label>
          Were there any features or functionalities that you found confusing or difficult to use?
          <input type="text" name="featuresConfusing" value={feedback.featuresConfusing} onChange={handleChange} />
        </label>
        <label>
          How likely are you to recommend the Rutgers web registration services to a friend or colleague?
          <input type="text" name="likelihoodToRecommend" value={feedback.likelihoodToRecommend} onChange={handleChange} />
        </label>
        <label>
          Is there anything else you would like to share about your experience with the Rutgers web registration services?
          <input type="text" name="additionalComments" value={feedback.additionalComments} onChange={handleChange} />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default App;
