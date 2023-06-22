import * as music from './music'
import {
  ImmutableListItem,
  ImmutableListTemplate,
  NoneTemplate,
  templateBuilder
} from 'utools-utils'

const none: Array<NoneTemplate> = [
  {
    code: 'music-play-pause',
    enter: () => music.playPause()
  },
  {
    code: 'music-prev',
    enter: () => music.prev()
  },
  {
    code: 'music-next',
    enter: () => music.next()
  },
  {
    code: 'music-like',
    enter: () => music.like()
  },
  {
    code: 'music-up',
    enter: () => music.volumeUp()
  },
  {
    code: 'music-down',
    enter: () => music.volumeDown()
  },
  {
    code: 'music-repeat',
    enter: () => music.toggleRepeat()
  },
  {
    code: 'music-shuffle',
    enter: () => music.toggleShuffle()
  },
  {
    code: 'music-lyric',
    enter: () => music.toggleLyric()
  }
]

class MusicCommandList implements ImmutableListTemplate {
  code = 'music-list'
  list: Array<ImmutableListItem>

  constructor() {
    this.list = [
      {
        title: 'Play Pause',
        description: '开始或暂停播放',
        icon: 'logo.png',
        handler: () => music.playPause()
      },
      {
        title: 'Previous',
        description: '上一首',
        icon: 'logo.png',
        handler: () => music.prev()
      },
      {
        title: 'Next',
        description: '下一首',
        icon: 'logo.png',
        handler: () => music.next()
      },
      {
        title: 'Like',
        description: '喜欢歌曲',
        icon: 'logo.png',
        handler: () => music.like()
      },
      {
        title: 'Volume Up',
        description: '音量加',
        icon: 'logo.png',
        handler: () => music.volumeUp()
      },
      {
        title: 'Volume Down',
        description: '音量减',
        icon: 'logo.png',
        handler: () => music.volumeDown()
      },
      {
        title: 'Toggle Repeat',
        description: '开关循环播放',
        icon: 'logo.png',
        handler: () => music.toggleRepeat()
      },
      {
        title: 'Toggle Shuffle',
        description: '开关随机播放',
        icon: 'logo.png',
        handler: () => music.toggleShuffle()
      },
      {
        title: 'Toggle Lyric',
        description: '开关歌词',
        icon: 'logo.png',
        handler: () => music.toggleLyric()
      }
    ]
  }
}

window.exports = templateBuilder()
  .none(...none)
  .immutableList(new MusicCommandList())
  .build()
