const element = (
  <div className="bg-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="heading">Naveen T</h1>
      <p className="paragraph">
        Vishnu institute of Computer Education and Technology Bhimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="gift-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
