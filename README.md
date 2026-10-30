# About

Welcome to our webring! This is a cozy little corner of the internet, feel free to explore and find cool stuff :D

# How to contribute

If you want to add your site, open a pull request on a new branch and insert your website into `sites.txt`. You will also need to add links to the webring on your site by sending a `GET` request to `https://webring-mysh.vercel.app/navigate` with the following params: `origin` and `direction`. 

`direction` must be `"left"` or `"right"`. This specifies which direction in the webring your users will navigate to.
`origin` must be the URL of your page.

If you implemented this correctly, you don't have to be limited to arrows/buttons for navigation around the webring! You can let users navigate on scroll, on hover, or more! It's up to your imagination at this point :D
...and that's it! Welcome to our webring! 
Also feel free to add multiple sites to the webring. They can be as small or as large as you want.