command: "bash pecan/scripts/network"

refreshFrequency: 5000 # ms

render: (output) ->
  "<div class='screen'><div class='pecannetwork'>#{output}</div></div>"
