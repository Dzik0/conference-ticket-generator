import Form from './Form.jsx';
import FinalTicket from './FinalTicket.jsx';
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState({});
  const [registered, setRegistered] = useState(false);

  return (
    <div className="max-w-[750px]">
      {!registered ? (
        <Form setDetails={setDetails} setRegistered={setRegistered} />
      ) : (
        <FinalTicket details={details} />
      )}
    </div>
  );
}
export default App;
