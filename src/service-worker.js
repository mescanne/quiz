
self.addEventListener('message', (event) => {
  console.log('Service worker message', event);
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
