const command = 'date +\"%a, %b %d\"';
const refreshFrequency = 100000; // ms

const render = ({ output }) => <div class='screen'><div class='holder'><div class='pecandate'>{`${output}`}</div></div></div>;

export { command, refreshFrequency, render };
