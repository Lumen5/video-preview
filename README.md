Overview
--------

One of the most important things that we do at Lumen5 is create realistic previews of what the final rendered video will look like. This task is to create a simple prototype of the preview using using either webgl or the canvas API.

Running The Project
-------------------

This project was made with react-create-app, so it's well-documented elsewhere, but run this to get started:

```
npm install
npm run start
```

You can view the app at `localhost:3000`

Task
----

There is a data-structure defined in `src/VideoData.js`. It describes a scene, which we've rendered for you. Your job is to use the data in this data structure to create a preview (a somewhat accurate representation of the video) inside the `<canvas>` element on the page.

A description of the meaning of the fields can also be found in `src/VideoData.js`.

The accuracy of the preview isn't super-critical right now, just get it as close as you can. Timing, exact positioning, perfect animation replication, etc. can all be slightly off from the rendered video. We are more interested in your approach than pixel perfect duplication.

An example of how to use `VideoData` has already been completed by rendering some rough text inside the canvas using the font from `VideoData.font`.

You may use any library you wish.

A good starting spot is to look at the code in `src/VideoPreview.js`, it is already starting to work with the canvas element.
