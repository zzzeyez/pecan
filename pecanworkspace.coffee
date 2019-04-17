command: "bash pecan/scripts/ws"

refreshFrequency: 1000 # ms

render: (output) ->
  "<div class='screen'><div class='pecanworkspace'>#{output}</div></div>"
