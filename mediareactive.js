(function(global) {
  function MediaReactive() {
    this.init();
    this.resizeCallbacks = [];
  }

  MediaReactive.prototype.init = function() {
    this.mediaQueryLists = {
      phone: window.matchMedia('(max-width: 639px)'),
      tablet: window.matchMedia('(min-width: 640px) and (max-width: 1023px)'),
      desktop: window.matchMedia('(min-width: 1024px)')
    };

    this.updateVisibility();
    this.addListeners();
  };

  MediaReactive.prototype.addListeners = function() {
    for (var key in this.mediaQueryLists) {
      if (this.mediaQueryLists.hasOwnProperty(key)) {
        this.mediaQueryLists[key].addListener(() => {
          this.updateVisibility();
          this.runResizeCallbacks();
        });
      }
    }
    window.addEventListener('resize', () => {
      this.runResizeCallbacks();
    });
  };

  MediaReactive.prototype.updateVisibility = function() {
    var elements = document.querySelectorAll('[data-media]');
    elements.forEach((element) => {
      var media = element.getAttribute('data-media');
      this.updateElementVisibility(element, media);
    });
  };

  MediaReactive.prototype.updateElementVisibility = function(element, media) {
    var mediaTypes = media.split(' ');
    var isVisible = mediaTypes.some((type) => {
      return this.mediaQueryLists[type] && this.mediaQueryLists[type].matches;
    });

    element.style.display = isVisible ? '' : 'none';
  };

  MediaReactive.prototype.isMedia = function(media) {
    var mediaTypes = media.split(' ');
    return mediaTypes.some((type) => {
      return this.mediaQueryLists[type] && this.mediaQueryLists[type].matches;
    });
  };

  MediaReactive.prototype.addResizeCallback = function(callback) {
    if (typeof callback === 'function') {
      this.resizeCallbacks.push(callback);
      callback();
    }
  };

  MediaReactive.prototype.runResizeCallbacks = function() {
    this.resizeCallbacks.forEach((callback) => callback());
  };

  global.MediaReactive = new MediaReactive();

  document.addEventListener('DOMContentLoaded', function() {
    global.MediaReactive.updateVisibility();
  });
})(window);
