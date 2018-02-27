command: "echo '↓' && bash Pecan/scripts/down && echo '↑' && bash Pecan/scripts/up"

refreshFrequency: 1000 # ms

render: (output) ->
  "<div class='left2'>#{output}</div>"

