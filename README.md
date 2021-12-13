In this project, let's build a **Nxt Trendz - Products Filters Group** app by applying the concepts we have learned till now.

### Refer to the images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-output-v0.gif" alt="products filters group output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

**Failure View**

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-failure-view-output.gif" alt="products filters group failure output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-sm-output-v2.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - No Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-sm-no-products-output-v0.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-sm-failure-view-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Products](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-no-products-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Failure View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-failure-view.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When an authenticated user opens the Products Route,

  - An HTTP GET request should be made to **productsApiUrl** with `jwt_token` in the Cookies and query parameters `title_search`, `category`, and `rating` with initial values as **empty strings**
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
    - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-failure-view.png) should be displayed
  - When a non-empty value is provided in the Search Input and the **Enter** button is clicked
    - Make an HTTP GET request to the **productsApiUrl** with `jwt_token` in the Cookies and query parameter `title_search` with value as the text provided in the Search Input
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When a **Category** is clicked
    - Make an HTTP GET request to the URL **productsApiUrl** with `jwt_token` in the Cookies and query parameter `category` with value as the id of the category clicked
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When a **Rating** is clicked
    - Make an HTTP GET request to the URL **productsApiUrl** with `jwt_token` in the Cookies and query parameter `rating` with value as the id of the rating clicked
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When the **Clear Filters** button is clicked
    - All the filters applied should be reset to initial values
    - Make an HTTP GET request to the URL **productsApiUrl** with`jwt_token` in the Cookies and without any filters
    - **_loader_** should be displayed while fetching the data
    - After the data is fetched successfully, display the products list received in the response
  - When multiple filters are applied, then the HTTP GET request should be made with all the filters that are applied

  - For example: When the **Electronics** Category is clicked and rating **4 and above** is clicked the **productsApiUrl** will be as follows

  ```js
  const apiUrl = 'https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=2&title_search=&rating=4'
  ```

  - If the HTTP GET request returns empty products list, then [No Products View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-no-products-output.png) should be displayed.
  - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-lg-failure-view.png) should be displayed

  - The `AllProductsSection` component will consist `categoryOptions`. It consists of a list of category option objects with the following properties in each category option object

  |    Key     | Data Type |
  | :--------: | :-------: |
  | categoryId |  String   |
  |    name    |  String   |

  - The `AllProductsSection` component will consist `ratingOption`. It consists of a list of category rating option objects with the following properties in each rating option object

  |   Key    | Data Type |
  | :------: | :-------: |
  | ratingId |  String   |
  | imageUrl |  String   |

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**productsApiUrl**

#### API: `https://apis.ccbp.in/products`

#### Example: `https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=4&title_search=machine&rating=4`

#### Method: `GET`

#### Description:

Returns a response containing the list of Products

#### Success Response

```json
{
  "products": [
    {
      "title": "Front Load Machine",
      "brand": "Samsung",
      "price": 22490,
      "id": 24,
      "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
      "rating": 4.5,
    },
      ....
  ]
}
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-component-structure-breakdown.png" alt="component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/AllProductsSection/index.js`
- `src/components/AllProductsSection/index.css`
- `src/components/FiltersGroup/index.js`
- `src/components/FiltersGroup/index.css`
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` Route should consist of `/` in the URL path
- `Login` Route should consist of `/login` in the URL path
- `Products` Route should consist of `/products` in the URL path
- `Cart` Route should consist of `/cart` in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js`

- User credentials

  ```text
   username: raja
   password: raja@2021
  ```

- The rating stars images in the route should have the alt attribute value as **rating {ratingId}**

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png) alt should be **no products**
- [https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png](https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png) alt should be **products failure**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
