[DEMO](https://wordle-guesser.netlify.app/ "DEMO")

React toolkit example.

Folder Structure:

    /src
        -index.tsx
        >app: (Global app setup and Layout configuration used by the entire app.)
            store.ts
            rootReducer.ts
            App.tsx
        >common: hooks, generic components, utils, etc (Reusable helpers and components)
        >features: contains all "feature folders" (Components related to the specific feature and its slice logic.)
