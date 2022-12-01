Tables
------
# categories
- id
- name
- created_at
- updated_at

# products
- id
- name
- created_at
- updated_at

# cateogry_product
- category_id
- product_id

# Todo
- Category CRUD
- Product CRUD

------- Today (6/1/2022) Progress (Yu Nandar Moe) ---------
⇒ Testing Detail Pages of New Design Branch (4hr) (100%)
⇒ Implemented Category Product CRUD Search (3.5hr) (100%)
⇒ Bug Fixed Category Product CRUD Search (0.5hr) (100%)

Remark
--------
CRUD include 1 search, 2 pagination, 3 delete confirmation, 4 validation
        
Attach
attach() inserts related models when working with many-to-many relations and no array parameter is expected.

Sync
It is similar to the attach() method and it also use to attach related models. sync() method accepts an array of IDs to place on the pivot table.If the models doesnot exist in array the sync method will delete models from table and insert new items to the pivot table.