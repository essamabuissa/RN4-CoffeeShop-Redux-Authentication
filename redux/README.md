## Introduction

In this task, you're going to implement authentication in your coffee app.

## Setup

1. Fork this [repo](https://github.com/JoinCODED/RN4-CoffeeShop-Redux-Authentication)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

```shell
$ yarn
```

5. Run the project

```shell
$ yarn start
```

---

## Task

#### 1. Explore

No. Seriously. Take some time to explore the project. There are a lot of new things happening in this project.  
Pay particular attention to:

- What's happening in Redux?
- What components do you have and how do they work?
- What on earth is going on inside `Navigation`??

#### 2. Authenticate

Maybe your users would like to log in?

1. Wire up your `Login` form - the login url is `login/`
2. Wire up your `Signup` form - the signup url is `register/`
3. **BONUS:** handle the errors coming in from the backend
4. Make sure that your authentication is persistent (if I login, I should stay logged in)
5. Complete the `Profile` screen  
   (**note:** for now the only way you can actually see the profile screen is by making it the `initialRouteName` in the `UserStack`)
6. Wire up the `LogoutButton` - it should log the user out...

#### 3. Permissions

In this app, we want to draw users in - give them a chance to explore the app and let them shop without making them login.  
We only ask them to login when they try to buy something.

1. Only logged in users can checkout. The checkout button in `CoffeeCart` should send the user to the `Login` screen if they're not logged in.
2. Modify your `UserStack`:
   - Logged out users can access `Login` and `Signup` but **not** `Profile`
   - Logged in users can access `Profile` but **not** `Login` or `Signup`

#### 4. MEGA BONUS - Order History

Implement an order history feature:

- Checkout should add the current order to a history (**hint:** new reducer?)
- The `Profile` should show a list of previous orders
- Clicking an order takes the user to a detail screen that shows the items and date of the order
- The backend doesn't have any endpoints for making an order so the order history should be **locally persistent** as long as the user remains logged in.
