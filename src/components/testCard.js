import React from "react";

const TestForm = () => {
  return (
    <div class="w3-container">
      <h2>Card Content</h2>
      <p>Add containers inside the card to create different sections:</p>

      <div className="w3-card-4" style={{ width: "50%" }}>
        <header className="w3-container w3-blue">
          <h1>Header</h1>
        </header>

        <div className="w3-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <footer className="w3-container w3-blue">
          <h5>Footer</h5>
        </footer>
      </div>
    </div>
  );
};

export default TestForm;
