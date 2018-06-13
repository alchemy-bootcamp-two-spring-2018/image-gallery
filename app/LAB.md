Image Gallery
===

## CodeWars Kata

Complete [today's Kata](https://www.codewars.com/kata/reversed-strings)

## Lab

This is a paired, multi-day lab. For day one, build out:

1. Router Infrastructure
1. Album List
1. Album Detail with placeholders for:
    1. View 1 (Thumbnail)
    1. View 2 (Gallery)
    1. View 3 (List)
    1. New Image
    
## Data

### Albums

id, title, description

### Images

id, album_id, title, description, url

## Routes

route | description
---|---
`/` | Home page (provide link to `/albums`
`/about` | About page (make something up)
`/albums` | List of albums
`/albums/:id/thumbnail` | Album detail with thumbnails of images
`/albums/:id/gallery` | Album detail with gallery image viewer
`/albums/:id/list` | Album detail with text list of images
`/albums/:id/new` | Prompt for new image

## Components

component | job
---|---
`App` | top-level app component. common menu
`Albums` | displays list of alblums
`AddAlbum` | Displayed in-line in the list of albums
`AlbumDetail` | Displays name of album plus description, has sub-router for views
`ThumbnailViewer` | <placeholder>, will display thumbnails with image title
`GalleryViewer` | <placeholder>, will display big image with buttons for prev and next
`ListViewer` | <placeholder>, will display tabular data amount images
`NewImage` | <placeholder>, will display form for adding new image
    
