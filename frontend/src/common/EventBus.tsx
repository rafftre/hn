import { stringify } from "querystring";

interface EventListener {
  (event: string, value: any): void;
}

function createEventBus() {

  let subscriptions: Map<String, Set<EventListener>> = new Map<String, Set<EventListener>>();

  function emit(event: string, value: any) {
    const subscribers = subscriptions.get(event);
    if (subscribers) {
      for (const callback of subscribers) {
        callback(event, value);
      }
    }
  }

  function subscribe(event: string, callback: EventListener) {
    if (!subscriptions.has(event)) {
      subscriptions.set(event, new Set<EventListener>());
    }
    //console.log('adding subscription', event, callback); // FIXME: repetead add of fn to set

    const subscribers = subscriptions.get(event);
    subscribers?.add(callback);
    return () => {
      subscriptions.get(event)?.delete(callback);
    };
  }

  return {
    subscriptions,
    emit,
    subscribe
  };
}

const EVENT_BUS = createEventBus();

export { EVENT_BUS };
