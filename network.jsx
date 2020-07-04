const command = "bash pecan/scripts/network";
const refreshFrequency = 5000; // ms

const render = ({ output, error }) => {
    let msg;
    if (error) {
        msg = String(error);
    } else if (output.length === 0) {
        msg = 'Loading...';
    } else {
        const up_down = output.match(/\d*\.\d*/g);
        msg = '↓ ' + up_down[0] + ' ↑ ' + up_down[1];
    }

    return (
        <div class='screen'>
            <div class='pecannetwork'>
                {msg}
            </div>
        </div>
    );
};

export { command, refreshFrequency, render };
