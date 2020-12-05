#!/usr/bin/env bash

[[ -f "${HOME}/.config/pecan.css" ]] && [[ ! -f "$PWD/pecan/pecan.css" ]] && ln -s "${HOME}/.config/pecan.css" "${PWD}/pecan/pecan.css" && osascript -e "tell application id \"tracesOf.Uebersicht\" to refresh"
[[ -f "${HOME}/.cache/wal/colors.css" ]] && [[ ! -f "$PWD/pecan/colors.css" ]] && ln -s "${HOME}/.cache/wal/colors.css" "${PWD}/pecan/colors.css" && osascript -e "tell application id \"tracesOf.Uebersicht\" to refresh"

exists () {
    type "$1" &> /dev/null ;
}

if exists /usr/local/bin/ifstat ; then
	echo "↓ $(bash $(dirname "$0")/down) ↑ $(bash $(dirname "$0")/up)"
else
	echo "↓ $(networksetup -getairportnetwork en0 | cut -c 24-)"
fi

