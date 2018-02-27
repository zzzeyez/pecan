command: "date +\"%I:%M%p\""

refreshFrequency: 1000 # ms

render: (output) ->
  "<div class='screen'><div class='right'>☾ #{output}</div></div>"

