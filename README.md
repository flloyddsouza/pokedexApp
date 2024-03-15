
# Pokedex - App

Pokedex App is build using React native.

List all Generation - I Pokemon, by fetching data from a GraphQL : `https://beta.pokeapi.co/graphql/v1beta`

Has the ability to favourite a pokemon, state management is achieved by Async Storage Library

Uses Apollo Client for retreiving data

Uses react-native-fast-image for Image caching.

Uses react-native-linear-gradient for pokemon card UI.


## Step 1: Install npm packages 

First, you will need to install npm packages

To install, run the following command from the _root_ of this project:

```bash
# using npm
npm install

```
Additionally for iOS, we need to install pods, 

To install, navigate to ios directory, and run the command below:

1. To navigate to the ios folder.
```bash cd ios ``` 

2. To install Bundler
```bundle install ``` 

3. To install the iOS dependencies managed by CocoaPods.
```bundle exec pod install``` 
 

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of this project:

```bash
# using npm
npm start

```

## Step 3: Start Pokedex App

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of this project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

```

### For iOS

```bash
# using npm
npm run ios

```

If everything is set up _correctly_, you should see Pokedex running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your Pokedex — you can also run it directly from within Android Studio and Xcode respectively.

## Running Unit Tests

To run the Unit Tests, run the following command from the _root_ of this project:

```bash
# using npm
npm test

```