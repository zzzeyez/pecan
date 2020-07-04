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
        msg = '↓ ' + format_bandwidth(up_down[0]) + ' ↑ ' + format_bandwidth(up_down[1]);
    }

    return (
        <div class='screen'>
            <div class='pecannetwork'>
                {msg}
            </div>
        </div>
    );
};

const format_bandwidth = (bandwidth) => {
    return Math.round((bandwidth / 125)*100)/100 + ' Mbps'
}

export { command, refreshFrequency, render };