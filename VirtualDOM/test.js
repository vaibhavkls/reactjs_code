function showClock() {
    const element = (
       <div>
        <h1>We show the current time on our site and</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
       </div>
    );
    ReactDOM.render(element, document.getElementById('mydiv'));
  }
  
  setInterval(showClock, 1000);