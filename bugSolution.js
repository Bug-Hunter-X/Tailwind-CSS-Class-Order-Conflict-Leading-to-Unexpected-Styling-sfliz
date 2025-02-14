```javascript
<div class="flex">
  <div class="p-4 bg-red-500">
    This should be red
  </div>
  <div class="p-4 bg-blue-500">
    This should be blue
  </div>
</div>
```
By putting `bg-red-500` before `p-4` we ensure that background color is applied first and does not get overwritten by the later classes.  Alternatively, using more specific class names would prevent this problem entirely. For example, you could create custom classes or use the `!important` flag (although this is generally discouraged). The key is to understand how Tailwind CSS applies styles based on class order.