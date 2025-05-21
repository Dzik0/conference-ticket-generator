import Form from './Form.jsx';
import FinalTicket from './FinalTicket.jsx';
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState({});
  console.log(details);
  return (
    <div className="max-w-[700px]">
      {/* <Form setDetails={setDetails} /> */}
      <FinalTicket />
    </div>
  );
}
export default App;
