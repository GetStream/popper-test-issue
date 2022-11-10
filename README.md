# PopperTestIssue

Demonstrational repository for the issue that the following error message is displayed when testing `stream-chat-angular` components:

`Error: NgxPopperjsModule does not have a module def (ɵmod property)`

The project uses Angular 14 + default Angular CLI test setup (Karma, Jasmine).

The workspace contains two Angular projects: an Angular library (`my-lib`) and a sample application (`sample-application`)

# To run

`yarn install`

Provide your Stream chat credentials in the `projects/my-lib/src/lib/chat/chat.component.ts` file

`yarn build`

`yarn test`

The `my-lib` library contains the following modules

- `MyChatModule` which has one component: `ChatComponent` that contains a [minimal Stream chat UI set up](https://getstream.io/chat/angular/tutorial/)
- `MySupportModule` which has one component: `SupportTicketsComponent` that uses the `MyChatModule` to display the chat UI

Each component has unit tests defined to showcase testing when using `stream-chat-angular` library.
