
# pecan

![Screenshot 3](/screenshots/1.jpg)

A bar for macOS. Reports — by default — the current workspace, cpu load, network bandwidth, date, battery percentage and time.

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

If `wal` is installed then `pecan` will grab it's colors from that by default.  To further edit the appearance you can edit a config at `~/.config/pecan.css` – the included `config.css` can be placed there to discover options.

```sh
mv "$HOME/Library/Application Support/Übersicht/widgets/pecan/config.css" "${HOME}/.config/pecan.css"
```

## Optional features

### Ifstat

Current download and upload speeds may be shown in the 2nd-to-left element via *Ifstat*. If *Ifstat* is not found, then the current WiFi network will be displayed instead. To install *Ifstat via* Homebrew:

```sh
brew install ifstat
```

### Yabai

Current workspace ID can be shown on the left element if [Yabai](https://github.com/koekeishiya/yabai) is installed, otherwise a power symbol will be shown instead. To install *Yabai*:

```sh
brew install yabai
```

### xanthia

If *xanthia* is installed then it will now use *pecan*'s config. Install [xanthia](https://github.com/zzzeyez/xanthia/blob/master/README.md#Installation).

