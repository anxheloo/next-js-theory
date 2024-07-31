<!-- LAYOUT -->

1.Layout inside src/app folder is the layout of our app that takes the page.js for our app.

<!-- ROUTES -->

1. For routing and creating other routes, we simple add a folder with a name ex: products and inside it we add an page.js. Now if we go to /products we can see our page.

<!-- NESTED ROUTES -->

1. For nested routes, we can add another folder inside the account folder and name it ex: membership and add an page.js inside it. To access it we can simply go to /account/membership. We can also add another folder inside membership to nest another route inside it.

<!-- DYNAMIC ROUTES -->

1. Lets say inside products page we have a lot of products that when we click on 1 on it we go to product details page. But we can have a tone of products and we cant add a tone of folders for each product, so to solve this and make it dynamic, we use Dynamic routes. Inside products folder, we add another folder ex: [details] but, now we have to use brackets "[]". Inside the new folder we add an page.js and we can access it by simply going to /products/"param"
2. We can also build an "Catch all segments/routes" which is same as dynamic routes ex: inside products we add another folder called [...product-reviews] and we create a page.js inside it. Now we are able to catch all routes ex: is using only dynamic routes "[]" we can get the param ex: /products/"param" , but if we use catch all segments ex: /products/"param1"/"param2" we can get all of them.

<!-- NAVIGATE FROM ONE PAGE TO ANOTHER -->

1. To navigate to another route we can use Link component or alternative way using useRouter from next/navigation using router.push() or replace() or refresh() or back() etc...
2. Now lets say we want to redirect to a different route from a server component without using Link or useRouter, in this case we use redirect() from next/navigation

<!-- ACCESS URL  -->

1. To get the pathname we can use : usePathname() hook.
2. We can achieve the same thing using : window.location and access the pathname property
3. To access the query params in a "client page" we use : useSearchParams() hook and access the get() property of it by passing the string name of the query we want. To access query params in "server page", next gives us a default prop : {searchParams} , and to access a specific query param we use : searchParam."name of the query"
   ex: /profile?q=xhoni => searchParam.q
4. To access the params in a "client page" we use : useParams() hook and access the param name or descructuring it or we can access params in a "server page" by using the default prop that next pass : {params}

<!-- LOADING AND SUPSENSE -->

1. We can create a loading.js file that is a convenction name like page.js or layout.js, in the root or in a specific folder to make it custom for each route, and than by using suspense in the root layout, we wrap the children in it and pass the loading.js component as a fallback prop.
2. We can also use suspense in a specific page to load data before rendering the page.

<!-- CUSTOM ERROR PAGE -->

1. We can create an not-found.js file that is a convenction name like page.js or layout.js, in the root or in a specific folder to make it custom for each route.

<!-- Fetching -->

1. We can fetch on "server-side" making the component async which is faster & on "client-side" using useEffect and state => check client-data-fetch and server-data-fetch

<!-- Creating backend -->

1. We establish the connection using MongoDb and inside our project we install mongoose and joi
2. Create the database folder inside src with index.js and connect the database
3. Create the models folder inside src with blog.js and create the Blog Schema
4. Create the api folder inside app to create the api routes, we create folders ex: add-routes => route.js inside => next.js knows it automatically same as page.js
