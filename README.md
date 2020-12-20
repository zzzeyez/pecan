
# pecan

![Screenshot 1](/screenshots/1.jpg)

A bar for macOS. Reports — by default — the current workspace, cpu load, network bandwidth, date, battery percentage and time.

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/zzzeyez/)

## Instructions

*pecan* requires [Übersicht](http://tracesof.net/uebersicht/).

Once Übersicht is installed, download this repository to wherever your widgets are stored (by default ~/Library/Application Support/Übersicht/widgets/).

This can be done via the terminal like so:

```sh
brew tap caskroom/cask
brew cask install ubersicht
git clone https://github.com/zzzeyez/pecan.git "$HOME/Library/Application Support/Übersicht/widgets/pecan"
```

If Übersicht is running, then the bar should appear.

## Customization & Themes

![Screenshot 4](/screenshots/4.jpg)

This is a picture of my current config with all optional features enabled.

To edit the appearance you can place a config at `~/.config/pecan.css` – the included `config.css` can be placed there to discover options.

```sh
mv "$HOME/Library/Application Support/Übersicht/widgets/pecan/config.css" "${HOME}/.config/pecan.css"
```

## Optional features

![Screenshot 2](/screenshots/2.jpg)

This is *pecan*'s default appearance with *ifstat*, *yabai*, [*xanthia*](https://github.com/zzzeyez/xanthia/) and [*landscape*](https://github.com/zzzeyez/landscape/) installed.

### Ifstat

*Ifstat* displays current upload and download speeds.  Current download and upload speeds may be shown in the 2nd-to-left element via *Ifstat*. If *Ifstat* is not found, then the current WiFi network will be displayed instead. To install *Ifstat via* Homebrew:

```sh
brew install ifstat
```

### Yabai

*Yabai* is a window manager.  Current workspace ID can be shown on the left element if [*Yabai*](https://github.com/koekeishiya/yabai) is installed, otherwise a power symbol will be shown instead. To install *Yabai*:

```sh
brew install yabai
```

### xanthia

*xanthia* is a notification system.  If *xanthia* is installed then it will display notifications on the left (useful for showing current song playing, chat notifications, etc.)  *xanthia* will use *pecan*'s config at `~/.config/pecan.css`. Install [*xanthia*](https://github.com/zzzeyez/xanthia/blob/master/README.md#Installation).

### landscape

*landscape* is a workspace selector.  If *landscape* is installed then it will display clickablle images of available workspaces on the left. *landscape* will use *pecan*'s config at `~/.config/pecan.css`.  Install [*landscape*](https://github.com/zzzeyez/xanthia/blob/master/README.md#Installation).

### pywal

![Screenshot 3](/screenshots/3.jpg)

This is *pecan* with all optional features and [*pywal*](https://github.com/dylanaraps/pywal/tree/master/pywal) installed.

*Pywal* is a system colorscheme manager.  If *Pywal* is installed then *pecan* will grab it's colors from that by default.

