import { EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, "", href);
  // create personalized event
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  // dispatch event
  window.dispatchEvent(navigationEvent);
}

export function Link({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; //primary click
    const isModifierPressed =
      event.metaKey || event.ctrlKey || event.altKey || event.shiftKey; // modifier key pressed
    const isManageableEvent = target === undefined || target === "_self"; // target is undefined or _self

    if (isMainEvent && !isModifierPressed && isManageableEvent) {
      event.preventDefault(); // prevent default behavior
      navigate(to); // navigate with SPA
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props}></a>;
}
