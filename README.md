# Google Calendar with Signwriting Sutton support
Mock of Google Calendar with native support to the Signwriting Sutton system. It'll be developed with the mobile first approach.

## Tecnologies
### Frontend
- Typescript
- Vue
- - Vuetify

### CI/CD
- GitHub Actions

#### Host
- GitHub Pages (initially, paid hoster to be chosen later)

## Road Map
- [X] Limit the month to be shown by the default, all others should be shown only if asked. E.g.: Current month being the default, all others would be loaded if the user requested by scrolling all the way up or down and beyond.
    - Current month is the default shown. I'm thinking about making the previous, the current and the next month available on loading, and all the others on deman.
- [X] Add multisign layout support. Currently the visual is breaking given each sign size and width. SignWriting component should handle those differences, and I may create helpers (components specialized in specific sign category) for it.
    - Adopted latest signwriting library. Newest one uses tff fonts instead of svg images. The fonts are all of the same size, but you can edit them individually. The fonts are used to get the symbol, and SVG components are used to overlap the fonts in a kartesian map to make it possible to construct the signs.
- [ ] Close this repository and deploy the code in another one, public.
- [ ] Add tests threshold.
- [ ] Add test coverage.
