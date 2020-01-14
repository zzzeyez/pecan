const command = "bash pecan/scripts/network";
const refreshFrequency = 5000; // ms

const render = ({ output }) => <div class='screen'><div class='pecannetwork'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
