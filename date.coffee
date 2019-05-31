command: "date +\"%a, %b %d\" && sed -i \"\" \"s/zzzeyez/$USER/g\" \"pecan/scss/style.scss\""

refreshFrequency: 100000

render: (output) ->
  "<div class='screen'><div class='holder'><div class='pecandate'>#{output}</div></div></div>"
