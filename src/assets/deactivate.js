//
// Shoelace dialogs are interactive by default, meaning you ca        n open and close them as expected without additional JavaScript. The overlay is also baked in, but hidden for this example.
//
// This code prevents the demo from being closed.
//
document.addEventListener('sl-request-close', event => event.preventDefault());