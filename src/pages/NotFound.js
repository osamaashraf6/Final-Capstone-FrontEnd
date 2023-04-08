import React from 'react';

const NotFound = () => (
  <div className="mt-5" style={{ width: '70%', margin: 'auto' }}>
    <div className="text-center">
      <h5>The Page not Found</h5>
      <p>
        Oops, you found the page which does not exist! Our guard dog is
        working hard to fix that but in the meantime, please let him enjoy his
        coffee
      </p>
    </div>
    <div>
      <img
        src="https://dashboard.microverse.org/assets/this-is-fine-58d6f8740ed69396a34da5c219fc18a6b2b9b17c1907eef01f6efab4797087df.png"
        alt="Page not found"
      />
    </div>
  </div>
);

export default NotFound;
