# Unions

Unions represent a set of possible types for a value. By default, `union`s in Boa are *tagged* (like in Haskell, OCaml or Rust). It is however possible to mark them as *untagged*, mainly for C compatibility. It is also possible to specify the location of the *tag*, to map a C `struct` containing a *tag* and an `union` to a Boa `union`.

## Simple example

```boa{5-8}
struct FileEntry:
    name: string
    details: FileEntryDetails

union FileEntryDetails:
    File(contents: []u8, page_count: u32)
    Directory(children: []*FileEntry)
    SymLink(refers_to: *FileEntry)
```

## Creating an instance of an union

```boa{3-6}
let entry = FileEntry(
    name="hello_world.boa",
    details=File( // no need to write FileEntryDetails.File thanks to type inference
        contents=[],
        page_count=...
    )
)
```

## Accessing the contents of a tagged `union`

This section is only applicable to tagged `union`s. Untagged `union`s' fields can be accessed directly with the `.` operator, without any form of type checking.
