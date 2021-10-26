import Social from '../../model/Social';
import './Profile.css';

import { PROFILE_URL, SOCIALS } from '../../common/Constants';

function Profile(props: any) {

  const profile: any = props.profile;
  if (!profile) {
    return (
      null
    );
  }

  return (
    <div className='profile'>
      <a href={PROFILE_URL + profile.handle}>
        <img src={profile.avatar} alt={'picture of ' + profile.displayName}/>
      </a>

      <h2>
        <a className='em' href={PROFILE_URL + profile.handle}>@{profile.handle}</a>
      </h2>
      
      <h3>{profile.displayName}</h3>

      <p>{profile.bio}</p>
      
      <ul role='list'>
        {SOCIALS.map((social: Social) => (
          <li key={social.id}>
            <a href={social.url + profile[social.id]}>
              <img src={social.icon} alt={social.id + ' icon'} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
