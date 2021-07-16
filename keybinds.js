console.log("Loaded HBO Player Keybinds");

// Generates an `action` that will result in a button being clicked
// NOTE(alvaro): Since the button may not exist when we load this script, we
// refer to it by selector, and select it on keypress
function clickButtonAction(selector) {
  return () => {
    const button = document.querySelector(selector);
    if(!button) {
      console.warn("no button found");
      return null;
    }
    return button.click();
  }
}

// Bind an `action` to a key, represented by its own string (e.g: "f")
function keyBind(key, action) {
  if(!action) {
    console.error(`Action is null when setting keybind for "${key}"`);
    return;
  }
  console.log(`Adding keybind for ${key}`);
  addEventListener("keypress", e => {
    if(e.key === key) {
      action(e);
    }
  });
}

// We find dynamically the buttons on keypress to avoid issues with content
// that loads afterwards
keyBind("f", clickButtonAction("#vjs_video_3 > div.vjs-control-bar > button.vjs-fullscreen-control.vjs-control.vjs-button"));
keyBind("k", clickButtonAction("#vjs_video_3 > div.vjs-control-bar > button.vjs-play-control.vjs-control.vjs-button"));
keyBind("h", clickButtonAction("#vjs_video_3 > div.vjs-control-bar > button.backward-button.vjs-control.vjs-button"));
keyBind("l", clickButtonAction("#vjs_video_3 > div.vjs-control-bar > button.forward-button.vjs-control.vjs-button"));
keyBind("m", clickButtonAction("#vjs_video_3 > div.vjs-control-bar > div.vjs-volume-menu-button.vjs-menu-button.vjs-menu-button-popup.vjs-control.vjs-button.vjs-volume-menu-button-vertical"));
