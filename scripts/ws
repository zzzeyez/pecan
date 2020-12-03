#!/usr/bin/env bash

ps cax | grep yabai > /dev/null
if [ $? -eq 0 ]; then
  /usr/local/bin/yabai -m query --spaces --space | grep index | sed 's/[^0-9]*//g'
else
  echo ""
fi

