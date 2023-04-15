## [david-phx.github.io/portfolio](https://david-phx.github.io/portfolio/)

[![Deploy to GitHub Pages](https://github.com/david-phx/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/david-phx/portfolio/actions/workflows/deploy.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/david-phx/portfolio/badge/master)](https://www.codefactor.io/repository/github/david-phx/portfolio/overview/master)

## Create a React Project Using Vite and Deploy It to GitHub Pages


### Create the Project

Scaffold the project using Vite (note the extra double dash required for npm 7+):

    $ npm create vite@latest project-name -- --template react

Install the dependencies:

    $ cd project-name
    $ npm install

If the app is going to be deployed to a folder, set base in [vite.config.js](vite.config.js):

    export default defineConfig({
        ...
        base: '/project-name/',
        ...
    })

To run the development server:

    $ npm run dev

To build the app and test it locally:

    $ npm run build
    $ npm run preview

* [Guide: Scaffolding Your First Vite Project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
* [Guide: Building for Production](https://vitejs.dev/guide/build.html)


### Install and Setup Additional Packages if Required

I'm using Tailwind CSS and React Router in this project.

Install Tailwind CSS:

    $ npm install -D tailwindcss postcss autoprefixer
    $ npx tailwindcss init -p

Configure template paths in [tailwind.config.cjs](tailwind.config.cjs):

    module.exports = {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        ...
    }

* [Guide: Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

Install React Router:

    $ npm install react-router-dom

If the app is going to be deployed to a folder, make sure to set basename for the router in [src/main.jsx](src/main.jsx):

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BrowserRouter basename='/project-name/'>
                ...


### Create Deployment Workflow

Create a new file [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

    name: Deploy to GitHub Pages

    on:
      # Runs on pushes and pull requests to "main" branch
      push:
        branches: [ main ]
      pull_request:
        branches: [ main ]

      # Allow to run manually from the Actions tab
      workflow_dispatch:

    # Set permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
    permissions:
      contents: read
      pages: write
      id-token: write

    # Allow one concurrent deployment
    concurrency:
      group: 'pages'
      cancel-in-progress: true

    jobs:
      build:
        name: Build
        runs-on: ubuntu-latest

        steps:
          - name: Checkout
            uses: actions/checkout@v3

          - name: Setup Node.js
            uses: actions/setup-node@v3
            with:
              node-version: 18

          - name: Install dependencies
            run: npm ci

          - name: Build project
            run: npm run build

          - name: Setup Pages
            uses: actions/configure-pages@v3

          - name: Upload Pages artifact
            uses: actions/upload-pages-artifact@v1
            with:
              path: ./dist

      deploy:
        name: Deploy
        needs: build
        runs-on: ubuntu-latest

        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}

        steps:
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v1

https://vitejs.dev/guide/static-deploy.html#github-pages


### Setup GitHub Repository

Create the local repository:

    $ git init
    $ git add --all
    $ git commit -m "Initial commit"

Go to https://github.com/new and create a new GitHub repository. Make sure it's Public, otherwise you won't be able to deploy it to GitHub pages.

In the repository's Pages configuration choose "GitHub Actions" as the source of deployment.

After creating the repository, follow the provided instructions and push your project to GitHub.


*To be continued...*
