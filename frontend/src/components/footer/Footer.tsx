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
      <div className='post-footer-aside'>
        <a href={PROFILE_URL + profile.handle}>
          <img src={profile.avatar} alt={'picture of ' + profile.displayName}/>
        </a>
      </div>

      <div className='post-footer-content'>
        <p>
          by {profile.displayName} <a href={PROFILE_URL + profile.handle}>@{profile.handle}</a>.
          &nbsp;
          <em>{profile.bio}</em>
        </p>

        <button type='button'>
          <span className={profile.adIcon}></span>
          {profile.adText}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
