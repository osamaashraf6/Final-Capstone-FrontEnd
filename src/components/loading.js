/* eslint-disable react/prop-types */
const Loading = ({ message }) => (
  <div className="d-flex m-5 justify-content-center">
    <h4 className="no-class">{message}</h4>
    {message === 'Loading...' && (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )}
  </div>
);

export default Loading;
