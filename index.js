const Notification = (props) => {
  //  Write your code here.
  const { className, image, children } = props;
  return (
    <div className={className}>
      <div className="arrange">
        <img src={image} />
        <p>{children}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Nofication</h1>
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      children="information Message"
      className="container1"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      children="Success Message"
      className="container2"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png "
      children="Success Message"
      className="container3"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      children="Success Message"
      className="container4"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
