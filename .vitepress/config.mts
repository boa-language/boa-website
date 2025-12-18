import { defineConfig } from 'vitepress';

export default defineConfig({
  srcDir: "docs",
  title: "Boa",
  description: "The Boa programming language.",
  head: [['link', { rel: 'icon', href: '/boa.png' }]],
  themeConfig: {
    logo: {
      src: '/boa.png'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/language/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: {
      '/language/': [ // /manual/ ?
        {
          text: 'Introduction',
          // what is Boa?
          // why another programming language?
          // goals
          // non-goals
          // hello world
          // comments
          // code style
          items: []
        },
        {
          text: 'Variables and constants',
          // variable declaration
          // constant declaration
          // mutability
          // _ wildcard
          items: []
        },
        {
          text: 'Primitive types',
          // void
          // floats
          // booleans
          // characters, escape sequences
          // strings, multiline strings
          // ranges
          // arrays
          // tuples
          // slices
          // options (mention only?)
          // results (mention only?)
          // pointers
          // implicit type conversions
          items: [
            { text: 'Integers', link: '/language/primitive-types/integers.md' },
            { text: 'Booleans', link: '/language/primitive-types/booleans.md' }
          ]
        },
        {
          text: 'User-defined types',
          // structs
          // enums
          // sum types
          // bitfields
          // traits ?
          // type aliases
          items: [
            { text: 'Structs', link: '/language/user-defined-types/structs.md' }
          ]
        },
        {
          text: 'Operators',
          // arithmetic operators
          // comparison operators
          // logical operators
          // bitwise operators
          // assignment operators
          // casting operators
          // table of precedence
          items: []
        },
        {
          text: 'Control structures',
          // match (mention only?)
          items: [
            { text: 'Conditionals', link: '/language/control-structures/conditionals.md' },
            { text: 'Loops', link: '/language/control-structures/loops.md' }
          ]
        },
        {
          text: 'Destructuration and pattern matching',
          // destructuring assignment
          // pattern matching in control structures
          items: []
        },
        {
          text: 'Functions',
          // named functions
          // unnamed functions (lambdas)
          // function calls, named arguments
          // first-class functions
          // UFCS
          items: []
        },
        {
          text: 'Generics',
          // generic functions
          // generic types
          // variadic generics
          items: []
        },
        {
          text: 'Error handling',
          items: []
        },
        {
          text: 'Attributes',
          // embed
          // derive
          // something for unions
          items: []
        },
        {
          text: 'Testing',
          // writing tests
          // running tests
          items: []
        },
        {
          text: 'Module system',
          // defining modules
          // exporting items
          // importing modules
          items: []
        },
        {
          text: 'Metaprogramming',
          // static reflection
          // code generation
          items: []
        },
        {
          text: 'Memory management',
          items: []
        },
        {
          text: 'C interoperability',
          // Memory layout of primitive types
          // Memory layout of user-defined types
          // calling C from Boa
          // exposing Boa to C
          items: []
        },
        {
          text: 'Documentation comments',
          // syntax
          // generating documentation
          items: []
        },
        {
          text: 'Compilation model',
          // compilation stages
          // intermediate representations
          items: []
        },
        {
          text: 'Language specification',
          items: []
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/boa-language' }
    ],
  },
});