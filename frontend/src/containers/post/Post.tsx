/* eslint-disable react-hooks/exhaustive-deps */

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

import * as data from '../../sample.json';

function Post() {

  const initialReactions = new ReactionsModel(POST_ID, 0, 0, 0, 0);
  const [reactions, setReactions] = useState(initialReactions);

  const relatedStories = data.relatedStories.filter((story: any) => !story.type);

  useEffect(() => {
    loadPostReactions();
    return () => {setReactions(initialReactions)}
  }, []);

  function handleReactionsIncrement(key: string) {
    function increment(r: any) {
      r[key] += 1;
      updatePostReactions(r);
    }

    if (!reactions.postId) {
      initPostReactions((empty: any) => increment(empty));
    } else {
      increment({
        postId: reactions.postId,
        light: reactions.light,
        boat: reactions.boat,
        heart: reactions.heart,
        money: reactions.money,
      });
    }
  }

  function loadPostReactions() {
    fetch(`${API_URL}/${POST_ID}`)
        .then(raw => {
          raw.json().then((res: ReactionsModel) => setReactions(res))
        })
        .catch(err => console.log(err));
  }

  function updatePostReactions(payload: any) {
    fetch(`${API_URL}/${POST_ID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(raw => {
          raw.json().then((res: ReactionsModel) => setReactions(res))
        })
        .catch(err => console.log(err));
  }

  function initPostReactions(callback: any) {
    fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(initialReactions)
      })
        .then(raw => {
          raw.json().then((res: ReactionsModel) => callback(res))
        })
        .catch(err => console.log(err));
  }

  return (
    <article className='post'>
      <Header post={data} reactions={reactions} onReactionsIncrement={handleReactionsIncrement} />

      {data.profile ? (
        <aside>
          <Profile profile={data.profile} />
        </aside>
      ) : null}

      <div className='post-content'>
        <section>
          <div dangerouslySetInnerHTML={{__html: data.markup}}></div>

          {data.reactions ? (
            <Reactions reactions={reactions} onIncrement={handleReactionsIncrement} size='lg' />
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
