const element = document.querySelector('.second__section');

const options = {
    root: null, // The element that is used as the viewport
    rootMargin: '0px', // Margin around the root.
    threshold: 0 // Number between 0 and 1 indicating at what percentage of the target's visibility the observer's callback should be executed.
  };


// Create the observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-bottom');
            observer.unobserve(entry.target);
        }
      });
  }, options);

  // Tell the observer which elements to track
observer.observe(element);