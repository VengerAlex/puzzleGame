import { EventListenerCallback } from "types";

export const createEvent = <T>(eventName: string) => {
  const subscribe = (listener: EventListenerCallback) => {
    document.addEventListener(eventName, listener as any);
  };

  const unsubscribe = (listener: EventListenerCallback) => {
    document.removeEventListener(eventName, listener as any);
  };

  const dispatch = (data: T) => {
    const customEvent = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(customEvent);
  };

  return { subscribe, unsubscribe, dispatch };
};
