const command = "bash pecan/scripts/network";
const refreshFrequency = 5000; // ms

const render = ({ output, error }) => {
    if (error) {
        return (<div>{String(error)}</div>)
    }

    const up_down = output.match(/\d*\.\d*/g);
    return (
        <div class='screen'>
            <div class='pecannetwork'>
                ↓ {up_down[0]} ↑ {up_down[1]}
            </div>
        </div>
    );
};

export { command, refreshFrequency, render };
