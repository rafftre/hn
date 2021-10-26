
import { useEffect, useState } from 'react';
import './Post.css';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Profile from '../../components/profile/Profile';
import Reactions from '../../components/reactions/Reactions';
import RelatedStories from '../../components/related-stories/RelatedStories';
import Tags from '../../components/tags/Tags';

import ReactionsModel from '../../model/ReactionsModel';

import { API_URL, POST_ID } from '../../common/Constants';
import { EVENT_BUS } from '../../common/EventBus';

import * as data from '../../sample.json';

function Post() {

  const initialReactions = new ReactionsModel(POST_ID, 0, 0, 0, 0);
  const [reactions, setReactions] = useState(initialReactions);

  const relatedTag = data.relatedStories.find((story: any) => story.type === 'tag');
  const relatedStories = data.relatedStories.filter((story: any) => !story.type);

  const unsubscribe = EVENT_BUS.subscribe('reactions:increment', onReactionsIncrement);

  useEffect(() => {
    fetch(`${API_URL}/${POST_ID}`)
        .then(response => response.json())
        .then((resData: ReactionsModel) => setReactions(resData));
  }, []);

  useEffect(() => {
    return () => unsubscribe();
  }, [unsubscribe]);

  function onReactionsIncrement(e: string, val: any) {
    let body: any = {
      postId: reactions.postId,
      light: reactions.light,
      boat: reactions.boat,
      heart: reactions.heart,
      money: reactions.money,
    };
    body[val] += 1;

    fetch(`${API_URL}/${POST_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then((resData: ReactionsModel) => setReactions(resData));
  }

  return (
    <article className='post'>
      <Header post={data} reactions={reactions} />

      {data.profile ? (
        <aside>
          <Profile profile={data.profile} />
        </aside>
      ) : null}

      <div className='post-content'>
        <section>
          <div dangerouslySetInnerHTML={{__html: data.markup}}></div>

          {data.reactions ? (
            <Reactions reactions={reactions} size='lg' />
          ) : null}
        </section>

        {data.profile ? (
          <Footer profile={data.profile} />
        ) : null}

        <RelatedStories stories={relatedStories} />

        <Tags tags={data.tags} />
      </div>
    </article>
  );
}

export default Post;
