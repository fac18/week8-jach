# Santa Claus's Little Helpers

* Alex
* Ayub
* Pat
* Roshan

![](https://media.giphy.com/media/l0IypZQvIY9xkaLSw/giphy.gif)

---
## Installation:

* Clone the repo
* In the root directory, create a .env file with the PostgreSQL URL DB_URL
* To build the database npm run db_init
* npm start
* In browser open localhost:2262



---

## Project requirements

* Build an app using the Express framework.
* Use a PostgreSQL database to store and retrieve your data.
* Use the retrieved data to populate a Handlebars template for server-side rendering to be displayed on the front-end.

Stretch Goals

* Authorisation (editing to header partial for when logged in vs not)
* Animated svg



---

![](https://i.imgur.com/IAIcKvs.jpg)


---

![](https://i.imgur.com/HhMLUbG.jpg)


---

## File structure - MVC Model

![](https://i.imgur.com/UUoUrgN.png)

---

## Mobbed the creation of files

![](https://i.imgur.com/SjnvlVV.png)


---


## Accessibility
![](https://i.imgur.com/lggdreB.png)


---

## Helper functions

```javascript=
//goodBad.js
module.exports = array => {
  const totalGoodPoints = array.reduce((acc, currNum) => {
    return acc + parseInt(currNum);
  }, 0);
  return totalGoodPoints;
};

```

---

## Using helpers and handlebars to display our database
```javascript=
{{#each users}}

    <tr>
        <td> {{capitaliseFirstLetter name}} </td>
        <td> {{gift}} </td>
        <td> {{goodBad behaviour}} </td>
        <td><a href="/delete-user/{{name}}"><button id="delete-button">X</button></a></td>
    </tr>

{{/each}}
```


---

## Delete user

```javascript=
const deleteUserData = require("../model/queries/deleteData");

exports.deleteUser = (req, res) => {
  const nameUser = req.params.name;
  deleteUserData(nameUser)
    .then(() => {
      res.redirect("/presents");
    })
    .catch(err => {
      console.log("this is err", err.message);
      throw err;
    });
};
```

---

## Error handling

```javascript=
exports.client = (req, res) => {
  res.status(404).render("error", {
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found :(",
    imageUrl: "https://gph.is/2ify9JA"
  });
};
```

---

## Use of promises

```javascript=
 postData({
    name: req.body.username,
    behaviour: goodOrBad,
    category: req.body.category
  })
    .then(() => {
      res.redirect("/presents");
    })
    .catch(error => {
      throw error;
    });
```

---

## Issues with data base integration
### Banging our heads for hours
![](https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif)
___

## Pat brought the Christmas magic

![](https://media.giphy.com/media/d4aTLaZv6yeFPfgI/giphy.gif)

---
