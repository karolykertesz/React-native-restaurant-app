# React Native Restaurant App

## The Application uses only React functional components ,React Hooks and Redux.

## React Native app built with Expo metro builder.

```
The Application was tested on IPhone 8 and IPhone 11 simulator, as well as on Nexus API 30 and on Nexus API 30 S Android simulator
For The Icons Ionic icons were used.
The Application using React native navitation version 5 ,Stack navigation , Tab navigation and Drawer navigation
```

# Get started

```
To be able to run the application user needs to have npm installed on his/her computer and also needs to install Expo from the expo - cli, after the installation the user could run npm start or expo start to start the react native application.
Also needs to install Xcode to be able to run Ios simulator as well as Android Studio to be able to run Android Simulator
```

# Before Start

```
Before the Application start a javascript class was used to generate fake data for the first screen,it contains  id, color, background image and title.
After new classes were initialized the data was passed to React native flatlist component and the data was rendered accordingly to every TouchableOpacity React native components were used to generate the main Category screen.
The images are online images on the Main category screen.
```

# Category Screen:

```
Two types of Button components were used here. For Android TouchableNativeFeedback and for Ios TouchableOpacity.
After clicking on the button the user gets navigated to Category Meals Screen
```

[![Main.png](https://i.postimg.cc/kgGDFF1n/Main.png)](https://postimg.cc/0zg89m13) | [![MainS.png](https://i.postimg.cc/rptm7y23/MainS.png)](https://postimg.cc/f3DD9NLf)



# Category Meals Screen

```
Here the application already fetching data from the redux store, the fake data was generated by using a new a javascript class.
The screen displays the photo of the meal, the preparation time, how difficult is to prepare the meal and if the meal cheap or expensive.
After clicking on the screen user gets navigated to Meal Detail Screen.

```

[![Category.png](https://i.postimg.cc/fRmpP1g5/Category.png)](https://postimg.cc/ZWYwBsmy)
[![category-S.png](https://i.postimg.cc/7LMv5j3b/category-S.png)](https://postimg.cc/cKHkj95N)

# Meal Detail Screen

```
On this screen the data displayed are: ingredients, steps to prepare the meal.
By clicking the star icon in the header the addfavorite action gets dispatched and the meal adds to redux store.

```

[![Detail.png](https://i.postimg.cc/cJqgxth0/Detail.png)](https://postimg.cc/MnDKtTgF)
[![DetailS.png](https://i.postimg.cc/QMktj4VJ/DetailS.png)](https://postimg.cc/1gXPHKG8)

# Favorite Screen

```
The user can reach the favorite Screen by navigating from the tab navigator, if no favorite meal was added the screen will be empty and a message will be displayed.
If a user added a favorite dish the data will be fetched by using the useSelector React Hook.

```

[![Favorite-S.png](https://i.postimg.cc/vHfDPZMK/Favorite-S.png)](https://postimg.cc/HVWpnHr0)
[![Favorites.png](https://i.postimg.cc/Gph2hPY0/Favorites.png)](https://postimg.cc/JsvmpkPK)

# Filters Screen

```
The filter screen does a few things.
There are four React native switch components on the screen with the switches the user can change the component state and the type of data will be fetched from the redux store.
In order to prevent the multiple rendering React useCallback hook was used so the React useEffect hook will be called only if the part of the has state changed.
By tapping the save icon the app will rerender and the addFilters action gets dispatched.
By dispatching the action the next rerender will be from the filteredMeals redux state.
```

[![FiltersS.png](https://i.postimg.cc/wvQ0cpMR/FiltersS.png)](https://postimg.cc/WFtGTxMs)
[![Filters.png](https://i.postimg.cc/VL6DM285/Filters.png)](https://postimg.cc/s1kYC61R)
