# Flix.com

## Log in
As a logged-out subscribed user, I want to log in, so that I can have access to my favorite movies

**Scenario:**
 Given that I am a user that has a subscription and I am logged out, if I am present on the log in screen, I should see two fields, a username field and a password one, underneath them there should be a log in button. If I enter them properly, I should see the flix.com home screen.

**Acceptance Criteria:**
 User should be presented with a log screen, on that should be two fields for the username and the password respectively. When the user enters them properly, they should be redirected to the home screen and see a list of movies.
 
## Play
As a logged-in subscribed user, I want to start streaming a movie, so that I can watch the movie

**Scenario:**
 Given that I am a user that has a subscription and I am logged in, if I am present on the home screen, I should be able to select a movie I wanna watch. That should take me to the video player and start streaming the movie.

**Acceptance Criteria:** 
User on the home screen should see a list of movie posters, upon clicking on the one he wants to watch, he should be redirected to the video player, he should be presented with a loader and controls, the movie he selected should start playing.

## Add to watch later
Given that I am a user that has a subscription and I am logged in, if I am present on the home screen, I should be able to press a star or heart button on the movie/series poster. That should put that movie in my watch list and have it display on top of other suggestions when I head to the home screen.

**Scenario:**
 Given that I am a user that has a subscription and I am logged in, if I am present on the home screen, I should be able to select a movie to add to watch later, I should see it on the very top of the home screen afterwards.

**Acceptance Criteria:**
User on the home screen should see a list of movie posters, upon hovering on a movie, he should be presented with a star or plus button to add the movie. If he clicks on it, the movie should appear on his favorites/watch later list. The movie should be on top of his top picks list next time he opens the home screen.

## Rate
As a logged-in subscribed user, I want to rate a movie, so that I can get more customized suggestions

**Scenario:**
Given that I am a user that has a subscription and I am logged in, if I am present on the more info page for a movie, I should have some sort of rating mechanism, if I rate it highly, I should have the movie tags added to the list of tags that I am interested in.

**Acceptance Criteria:**
User on the home screen should see a list of movie posters, upon hovering on a movie, he should be presented with a more info button. If user clicks it, he should see a modal that has a brief description of that movie and a 5-star rating system for him to rate the movie. If the user rates it over 3 stars, the movie tags should get a higher score in his liked genres in the database. The opposite is true if he rates it below 3 stars.

## Log out
 As a logged-in subscribed user, I want to log out, so that no one can know I watch Mean Girls on repeat.
 
**Scenario:**
Given that I am a user that has a subscription and I am logged in, if I am present anywhere on the web app , I should see a drop down for settings and options, and it should have a button for log out. That should take me to the log-in screen and clear my token from the cookies.

**Acceptance Criteria:**
User anywhere on the app (Outside the full-screen video player) should see a drop down for settings, when he opens there should be a log out button. On clicking, he should be logged out of all tabs on that device.