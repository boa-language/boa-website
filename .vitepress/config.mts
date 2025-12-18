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
          // mention that boa does not support 32 bits archs
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
          // floats
          // characters, escape sequences
          // strings, multiline strings
          // ranges
          // arrays
          // tuples
          // slices
          // options (mention only?)
          // results (mention only?)
          // implicit type conversions
          items: [
            { text: 'Void', link: '/language/primitive-types/void.md' },
            { text: 'Integers', link: '/language/primitive-types/integers.md' },
            { text: 'Floating-point numbers', link: '/language/primitive-types/floats.md' },
            { text: 'Booleans', link: '/language/primitive-types/booleans.md' },
            { text: 'References', link: '/language/primitive-types/references.md' },
            { text: 'Pointers', link: '/language/primitive-types/pointers.md' }
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
          items: [
            { text: 'Conditionals', link: '/language/control-structures/conditionals.md' },
            { text: 'Loops', link: '/language/control-structures/loops.md' }
          ]
        },
        {
          text: 'User-defined types',
          items: [
            { text: 'Structures', link: '/language/user-defined-types/structs.md' },
            { text: 'Enumerations', link: '/language/user-defined-types/enums.md' },
            { text: 'Unions', link: '/language/user-defined-types/unions.md' },
            // bitfields
            { text: 'Type aliases', link: '/language/user-defined-types/type-aliases.md' },
          ]
        },
        {
          text: 'Dispatch',
          // traits
          // static dispatch
          // dynamic dispatch
          items: []
        },
        {
          text: 'Destructuration and pattern matching',
          // destructuring assignment
          // pattern matching in control structures
          items: []
        },
        {
          text: 'Functions',
          items: [
            { text: 'Defining functions', link: '/language/functions/defining-functions.md' },
            { text: 'Calling functions', link: '/language/functions/calling-functions.md' },
            { text: 'Lambdas', link: '/language/functions/lambdas.md' }
          ]
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