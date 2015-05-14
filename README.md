# BulletinBuilder
## Build LDS Sunday bulletins simply and cleanly.
I've been thinking about this a lot and trying to figure out what the "ward bulletin" of the future looks like, and how to transition from where we are now (different templates in every ward, lots of wasted paper, etc) to something a little better.

Short term goals

- Build and manage bulletins
- Generate printable bulletins using simple, clean templates
- Events have dates, so we know when they're over (and stop printing them)
- Get things set up on my github.io for a live demo (will update this with link when that happens)

Long term goals

- Create QR code, which when scanned allows viewing bulletin on mobile device
- Able to generate speaking notes for those conducting (releases, callings, etc)

Wish list

- Integration with church data to prefill leadership, ward missionaries, meetinghouse address, ward name, etc
	- Will require user authentication, etc
- Able to pick speaker from auto-complete (ie, names spelled correctly)
- Get official hymn data from church web service (including optionally, lyrics for baptisms or stake conferences)

# Getting the code

First things first, this is very much a work in progress.

To run this, you will need some front-end web tools like node.js, grunt and bower.

Navigate to where you want the project to be, then run the following:

- `git clone https://github.com/jordanroskelley/BulletinBuilder.git`
- `npm install`
- `bower install`
- `grunt debug`

This should download and set up everything, then, open a browser and go to `localhost:8000`