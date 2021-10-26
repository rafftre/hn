import './Footer.css';

import { PROFILE_URL } from '../../common/Constants';

function Footer(props: any) {

  const profile: any = props.profile;
  if (!profile) {
    return (
      null
    );
  }

  return (
    <footer className='post-footer'>
      <a href={PROFILE_URL + profile.handle}>
        <img src={profile.avatar} alt={'picture of ' + profile.displayName}/>
      </a>

      <p>
        by {profile.displayName} <a href={PROFILE_URL + profile.handle}>@{profile.handle}</a>.
        {profile.bio}
        <button type='button'>
          <span className={profile.adIcon}></span>
          {profile.adText}
        </button>
      </p>
    </footer>
  );
}

export default Footer;
