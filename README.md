# BulletinBuilder
## Build LDS Sunday bulletins simply and cleanly.
I've been thinking about this a lot and trying to figure out what the "ward bulletin" of the future looks like, and how to transition from where we are now (different templates in every ward, lots of wasted paper, etc) to something a little better.

Short term goals

- Build and manage bulletins
- Generate printable bulletins using simple templates

Long term goals

- Create QR code, which when scanned allows viewing bulletin on mobile device
- Able to generate speaking notes for those conducting (releases, callings, etc)

# Testing the code

To run this, you will need some front-end web tools like node.js, grunt and bower.

Navigate to where you want the project to be, then run the following:

- `git clone https://github.com/jordanroskelley/BulletinBuilder.git`
- `npm install`
- `bower install`
- `grunt debug`

This should download and set up everything, then, open a browser and go to `localhost:8000`