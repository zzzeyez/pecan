const command = 'date +\"%a, %b %d\"';
const refreshFrequency = false; // ms

const render = ({ output }) => <div class='screen'><link rel="stylesheet" type="text/css" href="/pecan/style.css" /><div class='pecanbackground' /	></div>;

export { command, refreshFrequency, render };

