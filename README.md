# Project Overview

## Project Name

Drink Buddy

## Project Description

Being a bartender can be hard to remember all of those drink recipes. Even harder is trying to find a book that does not have hundreds of recipes you will never use and takes too long to search through.
Need to add your own recipe or a customer favorite? Feel free to add your own recipes and build the database of quality actually used drink recipes.

## Netlify Deployed Site:

https://drink-buddy.netlify.app/

## Wireframe and Component Heirarchy

https://whimsical.com/drink-buddy-FfyiyPfRfKSM9F9xtuvyRD

## API and Data Sample

```json
{
  "records": [
    {
      "id": "recPs3sWbXfFm0rXN",
      "fields": {
        "Name": "Cosmopolitan",
        "drink-type": "Martini",
        "measurement1": "2 oz",
        "ingredient1": "Citron Vodka",
        "measurement2": "1/2 oz",
        "ingredient2": "Tripple Sec",
        "measurement3": "splash",
        "ingredient3": "cranberry juice",
        "garnish1": "lemon peel",
        "Instructions": "Mix Vodka, Tripple Sec and cranberry together in a shaker glass. Strain into a Martini Glass.",
        "glass-type": "Martini"
      },
      "createdTime": "2021-10-22T16:28:51.000Z"
    }
  ]
}
```

### MVP/PostMVP

#### MVP

- Completed ReadMe file with App Description
- Wireframe
- Whimical visual tree showing component hierarchy
- Use Airtable for Get and Post
- Utilize REact Router
- Minimum of 6 functioning Components useded appropriately
- Use Axios to POST/create new data on Airtable.
- Allow users to see a list of drinks
- Allow users to add thier own drink recipe
- Be Styled, through CSS, Styled Components or CSS-in-JS
- Use flexbox (`display: flex`) or CSS Grid
- Implement responsive design on 2 screen sizes, using a media query (desktop and mobile)
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `kebab-case` and `PascalCase` conventions in your code
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes and comments are acceptable).
- Deployed via [Netlify](https://app.netlify.com/signup).
- Minimum of 50 commits

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Add second API for drink photos
- Use local storage to save user favorites
- Be able to search by an individual liqour type

## Project Schedule

| Day           | Deliverable                                        | Status   |
| ------------- | -------------------------------------------------- | -------- |
| October 21-22 | Prompt / Wireframes / Priority Matrix / Timeframes | Complete |
| October 22    | Project Approval                                   | Complete |
| October 25    | Core Application Structure (HTML, CSS, etc.)       | Complete |
| October 22-27 | Pseudocode / actual code                           | Complete |
| October 26    | Initial Clickable Model / Deployment               | Complete |
| October 27    | MVP                                                | Complete |
| October 29    | Presentations                                      | Complete |

## Timeframes

| Component         | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------- | :------: | :------------: | :-----------: | :---------: |
| Brainstorming     |    H     |      1hrs      |    1.5hrs     |   1.5hrs    |
| ReadMe SetUp      |    H     |      2hrs      |     2hrs      |    2hrs     |
| WireFrame         |    H     |      1hr       |    1.5hrs     |   1.5hrs    |
| React App Set up  |    H     |      1hr       |     1hrs      |    1hrs     |
| New GitHub Repo   |    H     |      1hrs      |     .5hrs     |    .5hrs    |
| Adding Form       |    H     |      3hrs      |     4hrs      |    4hrs     |
| Working with API  |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Sorting the Data  |    H     |      2hrs      |     2hrs      |    2hrs     |
| Creating the Pull |    H     |      1hr       |     1hrs      |    1hrs     |
| Creating the Post |    H     |      1hr       |     2hrs      |    2hrs     |
| Deploying the App |    H     |      2hrs      |     .5hrs     |    .5hrs    |
| CSS Styling       |    M     |      8hrs      |     9hrs      |    9hrs     |
| ----------------- | -------- | -------------- | ------------- | ----------- |
| Total             |    H     |     26hrs      |    28.5hrs    |   28.5hrs   |

## SWOT Analysis

### Strengths: Determination to get it working!

### Weaknesses: Airtable. Also combining API's that are searchable and able to add to them.

### Opportunities: Being able to expand my React knowledge and experimenting on my own.

### Threats: Time. I plan to use some time reading more about React and its capabilities and best ways to maximize its use.

## Code Showcase:

### I was particularly proud of the code below because:

-Spent a lot of time trying to sort the API data but because it was an Array of Objects, it made it a little more difficult to pull of.

```
resp.data.records.sort((a, b) => {
        if (a.fields.Name < b.fields.Name) {
          return -1;
        }
        if (a.fields.Name > b.fields.Name) {
          return 1;
        } return 0;
      });
```
