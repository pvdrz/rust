const QUERY = ['A<B<C<D>,  E>', 'p<> u8'];

const PARSED = [
    {
        elems: [],
        foundElems: 0,
        original: 'A<B<C<D>,  E>',
        returned: [],
        typeFilter: -1,
        userQuery: 'a<b<c<d>,  e>',
        error: 'Unexpected `<` after `<`',
    },
    {
        elems: [
            {
                name: "p",
                fullPath: ["p"],
                pathWithoutLast: [],
                pathLast: "p",
                generics: [],
            },
            {
                name: "u8",
                fullPath: ["u8"],
                pathWithoutLast: [],
                pathLast: "u8",
                generics: [],
            },
        ],
        foundElems: 2,
        original: "p<> u8",
        returned: [],
        typeFilter: -1,
        userQuery: "p<> u8",
        error: null,
    },
];
