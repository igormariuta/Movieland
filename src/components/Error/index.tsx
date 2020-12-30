import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = () => (
  <div className="text-white mb-3">
    <h4>Something went wrong</h4>
    <p>
      Go to <Link className='p-0 text-primary' to='/'>Home page</Link>
    </p>
  </div>
);

export default ErrorMessage;