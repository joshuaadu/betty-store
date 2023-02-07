# Dashboard Project Requirements

## Project structure

- components: Contains all shared components that are used across the entire application.
- config: Contains the application configuration files.
- features: Contains all the feature-based modules. We will analyze this one in more detail in the following section. A feature might have other folders, such as hooks, utils, and others, depending on the needs of the feature. The only required file is the index.ts file, which acts as the public API of a feature.
  - api
  - components
  - types
  - index.ts
- layouts: Contains different layouts for the pages.
- lib: Contains configurations for different libraries that are used in our application.
- pages: Contains the pages of our application. This is where Next.js will look for pages in the filesystem-based routing.
- providers: Contains all application providers. For example, if our application uses many different providers for styling, state, and so on, we can combine them here and export a single application provider with which we can wrap our \_app.tsx to make all the providers available on all the pages.
- stores: Contains all global state stores that are used in the application.
- testing: Contains test-related mocks, helpers, utilities, and configurations.
- types: Contains base TypeScript type definitions that are used across the application.
- utils: Contains all shared utility functions.

## [Rendering strategy](https://beta.nextjs.org/docs/rendering/fundamentals)

- Server-side rendering
- Client-side rendering
- Static generation

## State management

- Local state: This is the simplest type of state. It is the state that is being used in a single component only and is not required anywhere else. We will use the built-in [React hooks](https://beta.reactjs.org/learn/managing-state) to handle that.
- Global state: This is the state that is shared across multiple components in the application. It is used to avoid prop drilling. We will be using a lightweight library called [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) for this.
- Server state: This state is used to store data responses from the API. Things such as loading states, request de-duplications, polling, and others are very challenging to implement from scratch. Therefore, we will be using [React Query](https://tanstack.com/query/latest/docs/react/overview) to handle this elegantly so that we have less code to write.
- Form state: This should handle form inputs, validation, and other aspects. We will be using the [React Hook Form library](https://react-hook-form.com/) to handle forms in our application and [Zod](https://zod.dev/)
- URL state: This type of state is often overlooked yet very powerful. URL and query params can also be considered as pieces of state. This is especially useful when we want to deep-link some part of the view. Capturing the state in the URL makes it very easy to share it.

## Styling & Component UI

- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CheetSheet](https://nerdcave.com/tailwind-cheat-sheet)
- [HyperUI](https://www.hyperui.dev/)
- [MerakiUI](https://merakiui.com/)
- [DaisyUI](https://daisyui.com/)
- [Flowbite](https://flowbite.com/)
- [TailwindUIKit](https://tailwinduikit.com/)
- [headlessUI](https://headlessui.com/)
- [SailboatUI](https://sailboatui.com/)
- [Tremor: React Dashboard Components](https://www.tremor.so/)
- [React Select](https://react-select.com/home)
- [React Data Table Component](https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page)
- [React Datepicker](https://reactdatepicker.com/)
- [react-date-range](https://hypeserver.github.io/react-date-range/)

## Authentication

The authentication of our application will be [cookie-based](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), meaning that on a successful auth request, a cookie will be attached to the headers, which will handle user authentication on the server. We are choosing cookie-based authentication because it is more secure.
See [MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) to learn more.
NB: Other resources:
- [Email Only Authentication](https://www.youtube.com/watch?v=b6qHfPdv4Y8)
- [HTTP Networking](https://www.youtube.com/watch?v=2JYT5f2isg4&t=18s)

## Testing

- Unit tests: Unit tests only test the smallest units of an application in isolation. We will be using [Jest](https://jestjs.io/) to unit-test the shared components of our application.
- Integration tests: Integration tests test multiple units at once. They are very useful for testing the communication between multiple different parts of the application. We will be using [React Testing Library](https://testing-library.com/) to test our pages.
- End-to-end tests: End-to-end tests allow us to test our application’s most important parts end to end, meaning we can test the entire flow. Usually, the most important end-to-end tests should test the most critical features. For this kind of testing, we will be using [Cypress](https://www.cypress.io/).


## Tech

- [React](https://beta.reactjs.org/)
- [Nextjs 13](https://beta.nextjs.org/docs)
- [React TypeScript](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)


Reference: [React Application Architecture for Production](https://learning.oreilly.com/library/view/react-application-architecture/9781801070539/) by [Alan Alickovic](https://github.com/alan2207)
