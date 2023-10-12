# sign-language-school-management
As the name states, it's a school management platfortm. What set this appart of all others is the native support to the Signwriting Sutton system.

It'll be developed with the mobile first approach.

## Tecnologies
### Frontend
- Typescript
- Vue

### Backend
- Python
- FastAPI

### Infra
#### CI/CD
- GitHub Actions

#### Host
- GitHub Pages (initially, paid hoster to be chosen later)

## Road Map
- [X] Limit the month to be shown by the default, all others should be shown only if asked. E.g.: Current month being the default, all others would be loaded if the user requested by scrolling all the way up or down and beyond.
    - Current month is the default shown. I'm thinking about making the previous, the current and the next month available on loading, and all the others on deman.
- [X] All activities should come from a store, such as a "ActivitiesStore".
    - This' not written in stone, the data model is showing up as I progress.
    - FINAL: Instead of activities, the main entity is CLASS. CLASS > TITLE/DATE/ACTIVITIES
- [ ] Add multisign layout support. Currently the visual is breaking given each sign size and width. SignWriting component should handle those differences, and I may create helpers (components specialized in specific sign category) for it.
- [ ] Close this repository and deploy the code in another one, public.
- [ ] Add tests threshold.
- [ ] Implement backend to create activities.
    - Should not consider courses and classes to be created independently yet.
- [ ] Design and implement "Create Activity" page.
- [ ] Research, Categorize, Design and implement other kinds of useful information to show on the calendar.
- [ ] Design and implement "status" (done, waiting, ...) to activities.
- [ ] Bug: When days are sharing day-ball, the latin alphabet layout breaks
- [ ] Add test coverage.