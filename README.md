# namaste-react
 Namaste React Lessons and Assignments


# EP02:-
npm parcel index.html

Creating a bundle and be production ready
HMR :- Hot Module Replacement. It automatically refreshes as immediately. It used file watching algorithm and it refreshes automatically as soon as it saves up and builds up once again.

It also caches things for project so that it builds it quickly

It also does image optimization for rendering the UI image.

It also minification of files for production ready features.

Minify by removing the white spaces from the project

Differential Bundling is also done :- (Runs in different versions of browsers (Older version of the browser is supported))

Consistent Bundling.

Diagnostics by rendering what the error is .

Error Handling

SSL handshake testing by provided https 

Reliable caching

Tree Shaking -> In whole code, 100 fucntions but only used 4-5 code, it would remove unwanted codes.

Dist folder would have the production ready file.


Remove the main : "App.js" from the package.json as we are running index.html through parcel as it has the entry point of the project

# Package, Package-lock.json

it has dependencies 

Package.json has the approximate version of the dependencies.

^ -> Automatic Minor Version Update
~ -> Automatic Majore Version Update (Not Recommeneded

package.lock.json has the SHA key hashing which is track of production ready packages 

# Browsers list

Add browsers list in the package.json and it would supports the compatibility according to browsers version

It can be also configured depending upon the coutnry users such as Chrome US users.

parcel with the help of Browsers list is used to configure all the browsers provided/

//browserslist.dev is the website it would give the list of the browsers along with its version