import { execScript } from 'utools-utils/preload'

function beforeExec(app: string, script: string) {
  return `
    tell application "System Events"
      if (name of processes) does not contain "${app}" then
        tell application "YesPlayMusic"
          activate
        end tell
        repeat until application "${app}" is running
        end repeat
        delay 0.5
      end if

      tell process "${app}"
        ${script}
      end tell
    end tell`
}

async function runControl(menuItem: string) {
  const script = `
    tell menu "Controls" of menu bar item "Controls" of menu bar 1
      click menu item ${menuItem}
    end tell`
  await execScript(beforeExec('YesPlayMusic', script))
}

export async function playPause() {
  await runControl(`1`)
}

export async function prev() {
  await runControl(`"Previous"`)
}

export async function next() {
  await runControl(`"Next"`)
}

export async function like() {
  await runControl(`"Like"`)
}

export async function volumeUp() {
  await runControl(`"Increase Volume"`)
}

export async function volumeDown() {
  await runControl(`"Decrease Volume"`)
}

export async function toggleRepeat() {
  await runControl(`"Repeat"`)
}

export async function toggleShuffle() {
  await runControl(`"Shuffle"`)
}

export async function toggleLyric() {
  const script = `
    tell application "System Events"
      if (name of processes) contains "LyricsX" then
        do shell script "killall LyricsX"
      else
        tell application "LyricsX"
          activate
        end tell
      end if
    end tell`
  await execScript(script)
}
