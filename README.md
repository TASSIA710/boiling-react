# boiling-react

Boilerplate code for React.



## Installation

```
npm install @tassilo/boiling-react
```



## Usage

`YourApplication.ts`
```typescript
import {Application, Route} from "@tassilo/boiling-react";

export class YourApplication extends Application {

    public constructor() {
        super("YourApplication", "1.0.0");
    }

    public LoadRoutes(): Route[] {
        return [];
    }

}
```

`index.ts`
```typescript
// Imports
import {App, Initialize} from "@tassilo/boiling-react";
import {YourApplication} from "./YourApplication";

// Initialize
App.SetApplication(new YourApplication());
Initialize().then().catch(console.error);
```
