import Reactions from '../reactions/Reactions';
import './Header.css';

function Header(props: any) {

  const post: any = props.post.default;
  if (!post) {
    return (
      null
    );
  }

  const publishedAt: Date = new Date(post.publishedAt * 1000);
  const dateFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });

  return (
    <header className='post-header'>
      <h1>{post.title}</h1>

      <div className='subheader'>
        <div className='subheader-left'>
          <div>{dateFormat.format(publishedAt)}</div>
          <div>{post.estimatedTime} min read</div>
        </div>

        <div className='subheader-right'>
          {post.reactions ? (
            <Reactions reactions={props.reactions} />
          ) : null}
        </div>
      </div>

      <div>
        <img src={post.mainImage} alt='one picture is worth a thousand words'/>
      </div>
    </header>
  );
}

export default Header;
