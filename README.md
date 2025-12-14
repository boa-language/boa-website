# Boa's website

This is Boa's official website. It uses [VitePress](https://vitepress.dev), a Markdown-based static site generator. It is currently hosted [there](https://boa-language.vercel.app/).

## Building and running the Boa website

- Install [Bun](https://bun.com/).
- Clone this repository:

    ```sh
    git clone https://github.com/boa-language/boa-website.git
    ```

- Run the development server:

    ```sh
    bun docs:dev
    ```

- Build for production:

    ```sh
    bun docs:build
    ```

    The generated bundle is located in the `.vitepress/dist` folder.
