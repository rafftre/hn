import './RelatedStories.css';

import { BASE_URL, PROFILE_URL, TAG_URL } from '../../common/Constants';

function RelatedStories(props: any) {

  const stories: any[] = props.stories;
  if (!stories) {
    return (
      null
    );
  }

  return (
    <div className='related-stories'>
      <h2>Also Featured In</h2>

      <table className="code">
        <thead>
          <tr>
            <td>Related Stories</td>
            <td><a href={TAG_URL}>Subject Matter</a></td>
          </tr>
        </thead>
        <tbody>
          {stories.map((story) => {
            const firstTag = story.tags.length ? story.tags[0] : null;

            return (
              <tr key={story.id}>
                <td>
                  <a href={BASE_URL + story.slug}>{story.title}</a>
                  &nbsp;by&nbsp;
                  {story.profile ? (
                    <a href={PROFILE_URL + story.profile.handle}>@{story.profile.handle}</a>
                  ) : null}
                </td>
                <td>
                  {story.tags.length ? (
                    <a href={TAG_URL + firstTag}>#{firstTag}</a>
                  ): null}
                  </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RelatedStories;
