function app() {
  const time = new Date().toLocaleDateString();
  const buttonStyle = { color: 'red', fontSize: 20 };
  const alertHandler = () => {
    alert('HEY');
  };
  return (
    <div>
      <h1 style={buttonStyle}>{time}</h1>
      <button type="submit" onClick={alertHandler}>
        Submit
      </button>
      <Tweet />
    </div>
  );
}
//Create another component

function Tweet() {
  return (
    <div>
      <h2>Tweet</h2>
      <p>This stuff is pretty cool and dandy</p>
    </div>
  );
}
