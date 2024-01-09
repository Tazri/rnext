# Module 1 : React Installation & Development Environment Setup

## 🗒️ Table of Content

- 🚀 [Setup and Run Rreact Application Using Vite](#🚀-setup-and-run-react-application-using-vite)
- [🎨 Extention and Theme](#🎨-extention-and-theme)
- [⚙️ VS Code Setting](#⚙️-vs-code-setting)
- [⌨️ Shortcut Keys](#⌨️-shortcut-keys)

## 🚀 Setup and Run React Application using vite

**Here I note down two way to setup react project :**

<details>
<summary>1. Using NPM</summary>

**Create vite application :**

```bash
# simply
npm create vite@latest

# with name and application
npm create vite@latest applicationName -- --template vue/react/next/svelt
```

**Then go to the project file and install all package :**

```bash
npm install

# or

npm i
```

**Run project as developer mode :**

```bash
npm run dev

# or
vite
```

**Build project :**

```bash
npm run build
```

</details>

<details>
<summary>2. Yarn</summary>

**Create vite application :**

```bash
# simply
yarn create vite

# with name and application
yarn create vite applicationName --template vue/react/next/svelt
```

**Then go to the project file and install all package :**

```bash
yarn install

# or

yarn
```

**Run project as developer mode :**

```bash
yarn run dev

# or
vite
```

**Build project :**

```bash
yarn run build
```

</details>

## 🎨 Extention and Theme

**Important extention for helping write react code :**

<details>
<summary>1. Path Autocomplete</summary>
Provides path completion for visual studio and vs code for web.
</details>

<details>
<summary>2. Auto Rename tag</summary>
Auto rename paired HTML/XML tag.
</details>

<details>
<summary>3. ES Lint</summary>
Integrates ESlint javascript into vs code.
</details>

<details>
<summary>4. Prettier</summary>
Code formatter using prettier.
</details>

## ⚙️ VS Code Setting

If need to add vs code setting in specific workspace then create `.vscode` folder and create `settings.json` file where contain setting. This setting will overwrite the global setting.

**VS code setting from lws with ESLint and prettier setting :**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.tslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.run": "onSave",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "path-autocomplete.extensionOnImport": true,
  "path-autocomplete.excludedItems": {
    "*/.js": {
      "when": "**"
    },
    "*/.jsx": {
      "when": "**"
    }
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false
}
```

## ⌨️ Shortcut Keys

| Keys         | Description                    |
| ------------ | ------------------------------ |
| `ctrl` + `,` | Open the vs code setting file. |
| `ctrl` + `~` | Open the terminal in vs code.  |
