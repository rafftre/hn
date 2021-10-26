import Emoji from '../../model/Emoji';
import './Reactions.css';

import ReactionsModel from '../../model/ReactionsModel';

import { EMOJIS } from '../../common/Constants';

function Reactions(props: any) {
  
  const isLarge = props.size && props.size === 'lg';
  const reactions: ReactionsModel = props.reactions;

  function total(r: ReactionsModel) {
    if (r) {
      return (r.light + r.boat + r.heart + r.money) || 0;
    }
    return 0;
  }

  function update(id: string, e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (props.onIncrement) {
      props.onIncrement(id);
    }
  }

  return (
    <div className={`reactions ${isLarge ? 'reactions-lg' : ''}`}>
      <label>{total(reactions)}</label>

      <ul role='list'>
        {EMOJIS.map((emoji: Emoji) => {
          const isActive = reactions ? !!(reactions as any)[emoji.id] : false;

          return (
            <li key={emoji.id}>
              <a href='#' onClick={(e) => update(emoji.id, e)}>
                <img
                  className={`${isActive ? '' : 'not-active'}`}
                  src={emoji.icon}
                  alt={emoji.description}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Reactions;
