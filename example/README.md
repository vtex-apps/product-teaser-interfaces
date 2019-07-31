# Product Teaser app example

This is an example of how a product teaser app would integrate with the store framework.

## How to add to your theme

Add the `product-teaser.product.example-teaser` block to your product page layout in your `blocks.json`. Example:

```diff
 // In the product page layout block
 // ...
   "children": [
     "product-name",
     "product-rating-summary",
     "product-price#product-details",
+    "product-teaser.product.example-teaser",
     "product-separator",
     "product-quantity",
```

You can also use it in the shelf or search results block of the product. Make sure you are using the block `product-summary.shelf`. This will not work if it uses the `product-summary`. Example:

```diff
 "product-summary.shelf": {
   "children": [
     // ...other blocks
+    "product-teaser.summary.example-teaser",
     // ...other blocks
   ]
 }
```
