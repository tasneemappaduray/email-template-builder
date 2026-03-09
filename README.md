# Email Template Builder

A simplified Angular application that allows users to assemble email layouts from pre-built, reusable content blocks.

## Tech Stack

- **Framework**: Angular 17+ (standalone components)
- **Language**: TypeScript (strict mode)
- **Styling**: SCSS + Bootstrap 5 (grid and utilities only)
- **Component Docs**: Storybook for Angular
- **Testing**: Jasmine/Karma
- **State Management**: Angular Signals

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

### 3. Run Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006)

### 4. Run tests

```bash
ng test
```

---

## Approach & Decisions

- **Standalone components** were used throughout to keep the architecture modern and avoid NgModule boilerplate.
- **Angular Signals** power the reactive state in `TemplateService` — sidebar edits flow directly into `@Input()` bindings on preview components, triggering `OnPush` re-renders without manual change detection.
- **Design tokens** are centralised in `_variables.scss` and consumed by all block components via `@use` — no hard-coded colours anywhere.
- **Bootstrap 5** is used for grid and utility classes only. No Bootstrap JS or component classes are used.

---

## Assumptions & Trade-offs

- No persistence — block state lives in memory via Angular Signals and resets on page refresh.
- Storybook stories use `picsum.photos` for placeholder images in the `ImageBlock` stories.

---

## What I Would Improve Given More Time

- Export the assembled template as an HTML string for use in real email campaigns.
- Add more block types (e.g., Divider, Spacer, Social Links).
- Improve Storybook with a theme decorator to apply design tokens globally across all stories.
- Add e2e tests with Cypress or Playwright.
