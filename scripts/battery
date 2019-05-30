#!/bin/bash

if pmset -g batt | grep AC &> /dev/null; then
    echo "⚡"
else
    echo "♥"
fi

battery="$(pmset -g batt | grep -o '[0-9]*%')"

if [[ "${#battery}" -gt 3 ]] ; then
	echo "$battery" | tr -d '%'
else
	echo "$battery"
fi
