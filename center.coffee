command: "date +\"%a, %b %d\""

refreshFrequency: 100000

render: (output) ->
  "<div class='screen'><div class='holder'><div class='center'>#{output}</div></div></div>"

