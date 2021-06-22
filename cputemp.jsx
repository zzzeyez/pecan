const command = "bash pecan/scripts/cputemp";
const refreshFrequency = 5000; // ms

const render = ({ output }) => {
  return (
  <div class='screen'>
  <div class='pecan-cpu-temp'>
  {`${output}`}
  </div>
  </div>
  );
  }

export { command, refreshFrequency, render };
