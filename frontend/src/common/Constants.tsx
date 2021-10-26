import boat from '../icons/boat.png';
import heart from '../icons/heart.png';
import light from '../icons/light.png';
import money from '../icons/money.png';

import github from '../icons/github-new.png';
import twitter from '../icons/twitter-new.png';
import youtube from '../icons/youtube-new.png';

import Emoji from '../model/Emoji';
import Social from '../model/Social';

const API_URL = 'https://r3hn.herokuapp.com/api/v1/reactions';
const POST_ID = 'lFthoYgwXZzfpNWyr5FD';

const BASE_URL = 'https://hackernoon.com/';
const PROFILE_URL = BASE_URL + 'u/';
const TAG_URL = BASE_URL + 'tagged/';

const EMOJIS: Emoji[] = [
  new Emoji('heart', 'love', heart),
  new Emoji('light', 'enlightening', light),
  new Emoji('boat', 'sail', boat),
  new Emoji('money', 'take my money', money)
];

const SOCIALS: Social[] = [
  new Social('github', 'https://github.com/', github),
  new Social('twitter', 'https://twitter.com/', twitter),
  new Social('youtube', 'https://www.youtube.com/channel/', youtube),
];

export { API_URL, POST_ID, BASE_URL, PROFILE_URL, TAG_URL, EMOJIS, SOCIALS };
