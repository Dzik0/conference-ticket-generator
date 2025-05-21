import Form from './Form.jsx';
import { useState } from 'react';

function App() {
  const [details, setDetails] = useState({});
  console.log(details);
  return (
    <div>
      <Form setDetails={setDetails} />
    </div>
  );
}
export default App;
