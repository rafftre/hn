import './Tags.css';

import { TAG_URL } from '../../common/Constants';

function Tags(props: any) {

  const tags: any[] = props.tags;
  if (!tags) {
    return (
      null
    );
  }

  return (
    <div className='tags'>
      <h2>Tags</h2>

      <div className='container'>
        {tags.map((tag) =>
          <a className='code' href={TAG_URL + tag} key={tag}>#{tag}</a>
        )}
      </div>
    </div>
  );
}

export default Tags;
